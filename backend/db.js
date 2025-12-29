const sqlite3 = require('sqlite3').verbose();
const DB_PATH = './school.db';
function initDb(){
  const db = new sqlite3.Database(DB_PATH);
  db.serialize(() => {
    db.run(`PRAGMA foreign_keys = ON;`);
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE,
      password TEXT,
      role TEXT,
      meta TEXT
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT, dob TEXT, class TEXT, section TEXT, roll INTEGER, parent_contact TEXT, meta TEXT
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS teachers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT, email TEXT, subject TEXT, meta TEXT
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS attendance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      date TEXT,
      status TEXT,
      role TEXT
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS books (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      filename TEXT,
      uploaded_by INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS exams (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT, class TEXT, date TEXT
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS marks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      exam_id INTEGER, student_id INTEGER, subject TEXT, marks INTEGER
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS notices (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT, body TEXT, audience TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS fees (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_id INTEGER, amount REAL, due_date TEXT, paid INTEGER DEFAULT 0
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS homework (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT, description TEXT, class TEXT, due_date TEXT, created_by INTEGER
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS timetable (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      class TEXT, section TEXT, day TEXT, period INTEGER, subject TEXT, teacher_id INTEGER
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS transport (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      route_name TEXT, driver TEXT, vehicle_no TEXT
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS hostel (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      room_no TEXT, student_id INTEGER
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS canteen (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      item_name TEXT, price REAL, stock INTEGER
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      from_id INTEGER, to_id INTEGER, body TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // create default superadmin
    db.get("SELECT * FROM users WHERE role = 'superadmin'", (err, row) => {
      if(err) return console.error(err);
      if(!row){
        const bcrypt = require('bcrypt');
        bcrypt.hash('admin123', 10).then(hash => {
          db.run("INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)",
            ['Super Admin','admin@school.com',hash,'superadmin']);
          console.log('Default superadmin created: admin@school.com / admin123');
        });
      }
    });
  });
  db.close();
}

module.exports = { initDb, DB_PATH };
