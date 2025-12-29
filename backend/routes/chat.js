const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./school.db');

router.post('/send', (req,res)=>{
  const { from_id, to_id, body } = req.body;
  db.run("INSERT INTO messages (from_id,to_id,body) VALUES (?,?,?)",[from_id,to_id,body], function(err){
    if(err) return res.status(500).json({error:err.message});
    res.json({ id: this.lastID });
  });
});

router.get('/inbox/:user_id', (req,res)=>{
  db.all("SELECT m.*, u.name as from_name FROM messages m LEFT JOIN users u ON m.from_id = u.id WHERE m.to_id = ? ORDER BY m.created_at DESC",[req.params.user_id], (err, rows)=>{
    if(err) return res.status(500).json({error:err.message});
    res.json(rows);
  });
});

module.exports = router;
