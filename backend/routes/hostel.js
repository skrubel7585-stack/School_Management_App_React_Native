const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./school.db');

router.post('/', (req,res)=>{
  const { room_no, student_id } = req.body;
  db.run("INSERT INTO hostel (room_no,student_id) VALUES (?,?)",[room_no,student_id], function(err){
    if(err) return res.status(500).json({error:err.message});
    res.json({ id: this.lastID });
  });
});

router.get('/', (req,res)=>{
  db.all("SELECT * FROM hostel", [], (err, rows)=>{ if(err) return res.status(500).json({error:err.message}); res.json(rows); });
});

module.exports = router;
