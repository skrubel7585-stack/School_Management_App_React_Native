const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./school.db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'CHANGE_THIS_SECRET';

router.post('/login', (req,res)=>{
  const { email, password } = req.body;
  db.get("SELECT * FROM users WHERE email = ?", [email], (err, user)=>{
    if(err) return res.status(500).json({error: 'DB error'});
    if(!user) return res.status(401).json({error: 'Invalid credentials'});
    bcrypt.compare(password, user.password).then(match=>{
      if(!match) return res.status(401).json({error: 'Invalid credentials'});
      const token = jwt.sign({ id: user.id, role: user.role, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
      res.json({ token, user: { id: user.id, name: user.name, role: user.role, email: user.email } });
    });
  });
});

router.post('/register', async (req,res)=>{
  const { name, email, password, role } = req.body;
  const hash = await bcrypt.hash(password, 10);
  db.run("INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)", [name,email,hash,role||'teacher'], function(err){
    if(err) return res.status(500).json({ error: 'Could not create user', details: err.message });
    res.json({ id: this.lastID, name, email, role: role||'teacher' });
  });
});

module.exports = router;
