const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initDb } = require('./db');
const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/students');
const teacherRoutes = require('./routes/teachers');
const attendanceRoutes = require('./routes/attendance');
const booksRoutes = require('./routes/books');
const examRoutes = require('./routes/exams');
const noticeRoutes = require('./routes/notices');
const feesRoutes = require('./routes/fees');
const homeworkRoutes = require('./routes/homework');
const timetableRoutes = require('./routes/timetable');
const transportRoutes = require('./routes/transport');
const hostelRoutes = require('./routes/hostel');
const canteenRoutes = require('./routes/canteen');
const chatRoutes = require('./routes/chat');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(__dirname + '/uploads'));

initDb();

app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/books', booksRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/fees', feesRoutes);
app.use('/api/homework', homeworkRoutes);
app.use('/api/timetable', timetableRoutes);
app.use('/api/transport', transportRoutes);
app.use('/api/hostel', hostelRoutes);
app.use('/api/canteen', canteenRoutes);
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log('Server running on port', PORT));
