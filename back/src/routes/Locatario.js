const express = require("express");
const router = express.Router();
const mysqlConnection = require("../db/database");

//Get All
router.get("/getlocatarios", (req, res, next) => {
  mysqlConnection.query(
    "SELECT * FROM locatario ", (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});


//GET BY ID WHERE uf_tiponum = id

router.get("/getlocatarioselect/:id", (req, res, next) => {
  mysqlConnection.query(
    "SELECT * FROM locatario WHERE dni = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    }
  );
});


//INSERT FOR CONTRATO

router.post("/postlocatariocontrato", (req, res) => {
  console.log(req.body);

  const data = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    dni: req.body.dnil,
    cuit: req.body.cuit,
    domicilio: req.body.domicilio,
    barrio: req.body.barrio,
    localidad: req.body.localidad


  };

  const sql = "INSERT INTO locatario SET ?";
  mysqlConnection.query(sql, data, (err, result) => {
    if (!err) {
      console.log("Insert successfully");
      res.send('Insert successfully')
    } else {
      console.log(err);
      res.send(err)
    }
  });
});



//INSERT ALONE

router.post("/postlocatario", (req, res) => {
  console.log(req.body);

  const data = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    dni: req.body.dni,
    cuit: req.body.cuit,
    domicilio: req.body.domicilio,
    barrio: req.body.barrio,
    localidad: req.body.localidad
  };

  const sql = "INSERT INTO locatario SET ?";
  mysqlConnection.query(sql, data, (err, result) => {
    if (!err) {
      console.log("Insert successfully");
      res.send('Insert successfully')
    } else {
      console.log(err);
      res.send(err)
    }
  });
});

module.exports = router;
