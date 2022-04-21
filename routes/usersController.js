const express = require('express');
const router = express.Router();
// const ObjectID = require('mongoose').Types.ObjectId;

const { UsersModel } = require('../models/usersModel');

router.get('/', (req, res) => {
    UsersModel.find((err, docs) => {
      if (!err) res.send(docs);
      else console.log("Error to get data : " + err);
    })
  });

router.post('/', (req, res) => {
    const newRecord = new UsersModel({
        id: req.body.id,
        designation: req.body.designation,
        telephone: req.body.telephone,
        email: req.body.email,
        adresse: req.body.adresse,
        gerant: req.body.gerant,
        forme_juridique: {
            id: req.body.id,
            libelle: req.body.libelle
          },
          secteur_intervention: {
            id: req.body.id,
            libelle: req.body.libelle
          },
        annee_experience: req.body.annee_experience
    });
  
newRecord.save((err, docs) => {
      if (!err) res.send(docs);
      else console.log('Error creating new data : ' + err);
    })
  });

module.exports = router;