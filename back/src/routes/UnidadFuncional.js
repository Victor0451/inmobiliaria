const express = require("express");
const router = express.Router();
const mysqlConnection = require("../db/database");


//GET ALL

router.get("/getunidadfunc", (req, res, next) => {
  mysqlConnection.query("SELECT * FROM u_funcional where id_uf < 46", (err, rows, fields) => {
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


//INSERT UF

router.post("/postunidadfuncional", (req, res) => {
  console.log(req.body);

  const data = {
    padron: req.body.padron,
    poligono: req.body.poligono,
    medidor: req.body.medidor,
    dir_plan: req.body.dir_plan,
    dir_boleta: req.body.dir_boleta,
    uf_tipo: req.body.uf_tipo,
    uf_tiponum: req.body.uf_tiponum,
    titular: req.body.titular
  };

  const sql = "INSERT INTO u_funcional SET ?";
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
