const db = require("./routes/model");
const Tutorial = db.tutorials;

const readXlsxFile = require("read-excel-file/node");

//permet de vérifier le téléchargement du ficher 
const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }
// permet de lire le fichier, les données sont renvoyés rowq seront modifiées en tutorials tableau
    let path =
      __basedir + "/assets/uploads/" + req.file.filename;

    readXlsxFile(path).then((rows) => {
      // skip header
      rows.shift();

      let tutorials = [];

      rows.forEach((row) => {
        let tutorial = {
          id: row[0],
          source: row[1],
          date_collecte: row[2],
          code_client: row[3],
          rs_client: row[4],
          site: row[5],
          types_collecte: row[6],
          dechet: row[7],
          quantite: row[8],
          code_traitement: row[9],
          mois: row[10]
        };

        tutorials.push(tutorial);
      });
      
//permet d'enregistrer dans la base de données MySql
      Tutorial.bulkCreate(tutorials)
        .then(() => {
          res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

const getTutorials = (req, res) => {
  Tutorial.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

module.exports = {
  upload,
  getTutorials,
};