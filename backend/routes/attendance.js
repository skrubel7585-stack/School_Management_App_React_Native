const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./school.db');

router.post('/', (req,res)=>{
  const { user_id, date, status, role } = req.body;
  db.run("INSERT INTO attendance (user_id,date,status,role) VALUES (?,?,?,?)",[user_id,date,status,role], function(err){
    if(err) return res.status(500).json({error:err.message});
    res.json({ id: this.lastID });
  });
});

router.get('/', (req,res)=>{
  db.all("SELECT * FROM attendance ORDER BY date DESC", [], (err, rows)=>{ if(err) return res.status(500).json({error:err.message}); res.json(rows); });
});

module.exports = router;
