const mongoose = require("mongoose");

const UsersModel = mongoose.model(
    "user-api",
    {
        id: {
            type: Number,

        },
        designation: {
            type: String,

        },
        telephone: {
            type: String,

        },
        email: {
            type: String,

        },
        adresse: {
            type: String,

        },
        gerant: {
            type: String,

        },
        forme_juridique: {
            id: {
                type: Number,

            },
            libelle: {
                type: String,

            }
        },
        secteur_intervention:
        {
            id: {
                type: Number,

            },
            libelle: {
                type: String,

            }
        },
        date_creation: {
            type: Date,
            default: Date.now
        },
        annee_experience: {
            type: Number,

        }
    },
    "users"
);

module.exports = { UsersModel };