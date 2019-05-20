    
const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/database');

//GET LAST CONTRATO

router.get("/getunidadfunc", (req, res, next) => {
    mysqlConnection.query('SELECT * FROM u_funcional', (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
           
        } else {
            console.log(err);
        }
    })
})

module.exports = router;