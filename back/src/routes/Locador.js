const express = require("express");
const router = express.Router();
const mysqlConnection = require("../db/database");

//GET BY ID 

router.get("/getlocadorselect/:id", (req, res, next) => {
  mysqlConnection.query(
    "SELECT * FROM locador WHERE dni = ?",
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

router.post("/postlocador", (req, res) => {
    console.log(req.body);
  
    const data = {
        dni: req.body.dni,
        apellido: req.body.apellido,
        nombre: req.body.nombre,
        domicilio: req.body.domicilio,
        barrio: req.body.barrio,
        localidad: req.body.localidad,
        provincia: req.body.provincia
    };
  
    const sql = "INSERT INTO locador SET ?";
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