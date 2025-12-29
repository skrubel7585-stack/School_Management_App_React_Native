const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./school.db');

router.post('/', (req,res)=>{
  const { name, clas, date } = req.body;
  db.run("INSERT INTO exams (name,class,date) VALUES (?,?,?)",[name,clas,date], function(err){
    if(err) return res.status(500).json({error:err.message});
    res.json({ id: this.lastID });
  });
});

router.get('/', (req,res)=>{
  db.all("SELECT * FROM exams", [], (err, rows)=>{ if(err) return res.status(500).json({error:err.message}); res.json(rows); });
});

router.post('/marks', (req,res)=>{
  const marks = req.body.marks || [];
  const stmt = db.prepare("INSERT INTO marks (exam_id,student_id,subject,marks) VALUES (?,?,?,?)");
  for(const m of marks){
    stmt.run([m.exam_id,m.student_id,m.subject,m.marks]);
  }
  stmt.finalize((err)=>{ if(err) return res.status(500).json({error:err.message}); res.json({ inserted: marks.length }); });
});

router.get('/marks/:student_id', (req,res)=>{
  db.all("SELECT * FROM marks WHERE student_id = ?", [req.params.student_id], (err, rows)=>{ if(err) return res.status(500).json({error:err.message}); res.json(rows); });
});

module.exports = router;
