📚 School Management System – React Native + Node.js (Advanced Version)

A complete School Management System with 18 full modules, built using:

Frontend: React Native (Expo)

Backend: Node.js + Express

Database: SQLite

Auth: JWT Based

File Uploads: Multer

Platform: Android / iOS Supported

This project includes Super Admin, Admin, Teacher, Student, Parent login flows and full school workflow.

🚀 Features Included (18 Modules)
🔐 1. Authentication & User Roles

Super Admin, Admin, Teacher, Student, Parent Login

JWT Authentication

Role-based access system

👨‍🎓 2. Student Management

Add / Edit / Delete student

Student profile

Class & Section assign

Student photo upload

👨‍🏫 3. Teacher Management

Add / Edit / Delete teacher

Subject assignment

Teacher document upload

🏫 4. Class & Section Management

Class create

Section create

Subject list

Teacher assign

📝 5. Attendance System

Student attendance

Teacher attendance

Date-wise & monthly records

🧪 6. Exam & Marks Management

Exam create

Marks entry

Grade calculation

Report card (PDF setup placeholder)

📘 7. Books / Study Material

PDF upload

Notes upload

Student download

💰 8. Fees Management

Class-wise fees

Fees record

Paid / unpaid list

📢 9. Notice Board

Create notice

Student & teacher wise notices

👨‍👩‍👧 10. Parent Portal

Attendance view

Marks view

Homework view

Notices

🏠 11. Homework Management

Homework upload

Student submission

Submission tracking

🗓 12. Timetable Management

Class timetable

Teacher timetable

Student timetable

📊 13. Dashboard & Analytics

Student count

Teacher count

Fees overview

Attendance summary

💬 14. Chat / Messaging

Teacher ↔ Parent

Teacher ↔ Student

Basic chat API

⚙️ 15. Settings

School info update

App settings

Password change

🚌 16. Transport Management

Bus routes

Driver details

Student bus assignment

🏨 17. Hostel Management

Room list

Student room assign

Hostel attendance

🍽 18. Canteen / Inventory

Item list

Stock management

Purchase entry

📁 Folder Structure
school-management-advanced/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── uploads/
│   └── database.sqlite
│
└── frontend/
    ├── App.js
    ├── screens/
    ├── components/
    ├── navigation/
    ├── api/
    └── assets/

🔑 Default Super Admin Login
Email: admin@school.com
Password: admin123

🛠 How to Run Backend
cd backend
npm install
node server.js


Backend will run on:
👉 http://localhost:4000

📱 How to Run Frontend (React Native)
cd frontend
npm install
expo start


If using Android Emulator, API base is already set to:

http://10.0.2.2:4000


For real device:
📌 Replace with your PC IP (example: http://191.x.x.x:4000)

⚠️ Important Notes

This is a fully functional scaffold, ready for expansion.

Not production-ready. Needs:

Input validation

Secure file storage (S3)

Push notifications

Payment gateway

Better UI/UX polish

🤝 Contributing

Pull requests welcome!
You can improve UI, add new modules, or upgrade code quality.

📄 License

This project is free to use for personal and learning purposes.

🙌 Author

Sk Rubel (S.R)
React Native Developer • Web Developer • VAPT Analyst • SEO • Digital Marketing
