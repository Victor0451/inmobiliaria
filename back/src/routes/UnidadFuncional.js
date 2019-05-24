const express = require("express");
const router = express.Router();
const mysqlConnection = require("../db/database");

//GET ALL

router.get("/getunidadfunc", (req, res, next) => {
  mysqlConnection.query("SELECT * FROM u_funcional", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

//GET BY ID

router.get("/getunidadfunc/:id", (req, res, next) => {
  mysqlConnection.query(
    "SELECT * FROM u_funcional WHERE titular = ?",
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

//GET BY ID WHERE uf_tiponum = id

router.get("/getufselect/:id", (req, res, next) => {
  mysqlConnection.query(
    "SELECT * FROM u_funcional WHERE uf_tiponum = ?",
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

//GET BY ID WHERE uf_tiponum = id

router.get("/getlocatarioselect/:id", (req, res, next) => {
  mysqlConnection.query(
    "SELECT * FROM locatario WHERE id_contrato = ? and loc_tipo = 1",
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

//GET LOCATARIO2 BY ID WHERE uf_tiponum = id

router.get("/getlocatario2select/:id", (req, res, next) => {
  mysqlConnection.query(
    "SELECT * FROM locatario WHERE id_contrato = ? and loc_tipo = 2",
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

//GET ID_CONTRATO BY DNI 

router.get("/getidcont/:id", (req, res, next) => {
    mysqlConnection.query(
      "SELECT id_contrato FROM locatario WHERE dni = ?",
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

router.post("/postlocatario", (req, res) => {
  console.log(req.body);

  const data = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    dni: req.body.dni,
    cuit: req.body.cuit,
    uf_alquilada: req.body.uf_tipo,
    domicilio: req.body.domicilio,
    barrio: req.body.barrio,
    localidad: req.body.localidad,
    id_contrato: req.body.idcontrato,
    uf_tiponum: req.body.ufnum,
    loc_tipo: req.body.loc_tipo
  };

  const sql = "INSERT INTO locatario SET ?";
  mysqlConnection.query(sql, data, (err, result) => {
    if (!err) {
      console.log("Insert successfully");
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
