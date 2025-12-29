const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./school.db');

router.post('/', (req,res)=>{
  const { name,email,subject } = req.body;
  db.run("INSERT INTO teachers (name,email,subject) VALUES (?,?,?)",[name,email,subject], function(err){
    if(err) return res.status(500).json({error:err.message});
    res.json({ id: this.lastID });
  });
});

router.get('/', (req,res)=>{
  db.all("SELECT * FROM teachers", [], (err, rows)=>{ if(err) return res.status(500).json({error:err.message}); res.json(rows); });
});

module.exports = router;
