const express =require('express');
const router = express.Router();
const connection = require('../conf');

const excelController = require('../controller');
const upload = require('../upload');

let routes = (app) => {
    router.post('/upload', upload.single('file'), excelController.upload);
    router.get('/tutorials', excelController.getTutorials);

    app.use("/excel", router);
}


module.exports = routes;