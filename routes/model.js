const { Sequelize } = require("sequelize/types")

module.exports = (sequelize, sequelize) => {
    const tutorials = sequelize.define('tutorial', {
        source: {
            type: Sequelize.VARCHAR
        },
        data_collecte: {
            type: Sequelize.DATETIME 
        },
        code_client: {
            type: Sequelize.VARCHAR
        },
        rs_client: {
            type: Sequelize.VARCHAR
        },
        site: {
            type: Sequelize.VARCHAR
        },
        types_collecte: {
            type: Sequelize.VARCHAR
        },
        dechet: {
            type: Sequelize.VARCHAR
        },
        quantite: {
            type: Sequelize.NUMBER
        },
        code_traitement: {
            type: Sequelize.VARCHAR
        },
        mois: {
            type: Sequelize.NUMBER
        }
    })
    return tutorials;
}