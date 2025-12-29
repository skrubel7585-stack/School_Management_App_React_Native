const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./school.db');

router.post('/item', (req,res)=>{
  const { item_name, price, stock } = req.body;
  db.run("INSERT INTO canteen (item_name,price,stock) VALUES (?,?,?)",[item_name,price,stock], function(err){
    if(err) return res.status(500).json({error:err.message});
    res.json({ id: this.lastID });
  });
});

router.get('/items', (req,res)=>{
  db.all("SELECT * FROM canteen", [], (err, rows)=>{ if(err) return res.status(500).json({error:err.message}); res.json(rows); });
});

module.exports = router;
