module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      source: {
        type: Sequelize.STRING
      },
      date_collecte: {
        type: Sequelize.DATE
      },
      code_client: {
        type: Sequelize.STRING
      },
      rs_client: {
          type: Sequelize.STRING
      },
      site: {
          type: Sequelize.STRING
      },
      types_collecte: {
          type: Sequelize.STRING
      },
      dechet: {
          type: Sequelize.STRING
      },
      quantite: {
          type: Sequelize.NUMBER
      },
      code_traitement: {
          type: Sequelize.STRING
      },
      mois: {
          type: Sequelize.NUMBER
      }
    });
  
    return Tutorial;
  };