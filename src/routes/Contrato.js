const express = require("express");
const router = express.Router();
const mysqlConnection = require("../db/database");


//GET ALL CONTRATOS



router.get("/getcontratos", (req, res, next) => {
  mysqlConnection.query(
    "SELECT * FROM contrato ",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});


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
    dni_locatario: req.body.dni,
    dni_locatario2: req.body.dni2,
    uf_tiponum: req.body.uf_tiponum,
    locador: req.body.titular,
    contrato_p1: req.body.contrato_p1,
    contrato_p2: req.body.contrato_p2,
    contrato_p3: req.body.contrato_p3,
    contrato_p4: req.body.contrato_p4,
    pagare_p1: req.body.pagare_p1,
    pagare_p2: req.body.pagare_p2,
    pagare_p3: req.body.pagare_p3,
    pagare_p4: req.body.pagare_p4,
    alta: req.body.alta,
    vencimiento: req.body.vencimiento,
    tipo: req.body.tipo
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


//UPDATE 2 LOC

router.put('/putlocatario/:id', (req, res) => {
  //const { id_contrato, dni2 } = req.body;

  let dni_locatario2 = req.body.dni2;

  let id = req.params.id;

  let sql = `UPDATE contrato SET dni_locatario2 = ${dni_locatario2} WHERE id_contrato = '${id}'`;

  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) {
      console.log('Update successfully')
    } else {
      console.log(err);
    }
  });
});


module.exports = router;
