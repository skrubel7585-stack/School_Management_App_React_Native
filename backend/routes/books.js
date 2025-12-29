const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./school.db');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const unique = Date.now() + '-' + Math.round(Math.random()*1E9);
    cb(null, unique + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

router.post('/upload', upload.single('file'), (req,res)=>{
  const { title, uploaded_by } = req.body;
  if(!req.file) return res.status(400).json({ error: 'File required' });
  db.run("INSERT INTO books (title, filename, uploaded_by) VALUES (?,?,?)",
    [title, req.file.filename, uploaded_by||null], function(err){
      if(err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID, title, filename: req.file.filename, url: '/uploads/' + req.file.filename });
    });
});

router.get('/', (req,res)=>{
  db.all("SELECT b.*, u.name as uploader FROM books b LEFT JOIN users u ON b.uploaded_by = u.id ORDER BY b.created_at DESC", [], (err, rows)=>{
    if(err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

module.exports = router;
