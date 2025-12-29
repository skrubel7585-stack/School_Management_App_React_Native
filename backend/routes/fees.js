const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./school.db');

router.post('/', (req,res)=>{
  const { student_id, amount, due_date } = req.body;
  db.run("INSERT INTO fees (student_id,amount,due_date) VALUES (?,?,?)",[student_id,amount,due_date], function(err){
    if(err) return res.status(500).json({error:err.message});
    res.json({ id: this.lastID });
  });
});

router.get('/student/:id', (req,res)=>{
  db.all("SELECT * FROM fees WHERE student_id = ?", [req.params.id], (err, rows)=>{ if(err) return res.status(500).json({error:err.message}); res.json(rows); });
});

module.exports = router;
