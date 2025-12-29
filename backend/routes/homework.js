const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./school.db');

router.post('/', (req,res)=>{
  const { title, description, clas, due_date, created_by } = req.body;
  db.run("INSERT INTO homework (title,description,class,due_date,created_by) VALUES (?,?,?,?,?)",
    [title,description,clas,due_date,created_by], function(err){
      if(err) return res.status(500).json({error:err.message});
      res.json({ id: this.lastID });
    });
});

router.get('/', (req,res)=>{
  db.all("SELECT * FROM homework ORDER BY due_date ASC", [], (err, rows)=>{ if(err) return res.status(500).json({error:err.message}); res.json(rows); });
});

module.exports = router;
