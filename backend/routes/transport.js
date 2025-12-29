const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./school.db');

router.post('/', (req,res)=>{
  const { route_name, driver, vehicle_no } = req.body;
  db.run("INSERT INTO transport (route_name,driver,vehicle_no) VALUES (?,?,?)",[route_name,driver,vehicle_no], function(err){
    if(err) return res.status(500).json({error:err.message});
    res.json({ id: this.lastID });
  });
});

router.get('/', (req,res)=>{
  db.all("SELECT * FROM transport", [], (err, rows)=>{ if(err) return res.status(500).json({error:err.message}); res.json(rows); });
});

module.exports = router;
