const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./school.db');

router.post('/', (req,res)=>{
  const { name,dob,clas,section,roll,parent_contact } = req.body;
  db.run("INSERT INTO students (name,dob,class,section,roll,parent_contact) VALUES (?,?,?,?,?,?)",
    [name,dob,clas,section,roll,parent_contact], function(err){
      if(err) return res.status(500).json({error: err.message});
      res.json({ id: this.lastID });
    });
});

router.get('/', (req,res)=>{
  db.all("SELECT * FROM students", [], (err, rows)=>{ if(err) return res.status(500).json({error:err.message}); res.json(rows); });
});

router.get('/:id', (req,res)=>{
  db.get("SELECT * FROM students WHERE id = ?", [req.params.id], (err,row)=>{ if(err) return res.status(500).json({error:err.message}); res.json(row); });
});

router.put('/:id', (req,res)=>{
  const { name,dob,clas,section,roll,parent_contact } = req.body;
  db.run("UPDATE students SET name=?,dob=?,class=?,section=?,roll=?,parent_contact=? WHERE id=?",
    [name,dob,clas,section,roll,parent_contact, req.params.id], function(err){
      if(err) return res.status(500).json({error:err.message});
      res.json({ updated: this.changes });
    });
});

router.delete('/:id', (req,res)=>{
  db.run("DELETE FROM students WHERE id = ?", [req.params.id], function(err){ if(err) return res.status(500).json({error:err.message}); res.json({ deleted: this.changes }); });
});

module.exports = router;
