const express = require("express");
const router = express.Router();
const mysqlConnection = require("../db/database");

//GET BY ID

router.get("/getcontratoselect/:id", (req, res, next) => {
  mysqlConnection.query(
    "SELECT * FROM contrato WHERE id_contrato = ?",
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

//INSERT

router.post("/postcontrato", (req, res) => {
  const data = {
    id_contrato: req.body.id_contrato,
    dni_locatario: req.body.dni_locatario,
    dni_locatario2: req.body.dni_locatario2,
    uf_tiponum: req.body.uf_tiponum,
    locador: req.body.locador,
    pagos_contrato: req.body.pagos_contrato,
    pagos_pagare: req.body.pagos_pagare
  };

  console.log(data);

  const sql = "INSERT INTO contrato SET ?";
  mysqlConnection.query(sql, data, (err, result) => {
    if (!err) {
      console.log("Insert successfully");
      res.send("Insert successfully");
    } else {
      console.log(err);
      res.send(err);
    }
  });
});

module.exports = router;
