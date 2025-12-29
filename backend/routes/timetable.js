const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./school.db');

router.post('/', (req,res)=>{
  const { clas, section, day, period, subject, teacher_id } = req.body;
  db.run("INSERT INTO timetable (class,section,day,period,subject,teacher_id) VALUES (?,?,?,?,?,?)",
    [clas,section,day,period,subject,teacher_id], function(err){
      if(err) return res.status(500).json({error:err.message});
      res.json({ id: this.lastID });
    });
});

router.get('/', (req,res)=>{
  db.all("SELECT * FROM timetable ORDER BY day,period", [], (err, rows)=>{ if(err) return res.status(500).json({error:err.message}); res.json(rows); });
});

module.exports = router;
