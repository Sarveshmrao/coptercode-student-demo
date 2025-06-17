const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;
const DATA_PATH = path.join(__dirname, "data", "students.json");

app.use(cors());
app.use(express.json());

const readStudents = () => JSON.parse(fs.readFileSync(DATA_PATH));
const writeStudents = (data) => {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
};

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.get("/api/students", (req, res) => {
  try {
    const students = readStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Error reading students data" });
  }
});

app.get("/api/students/:id", (req, res) => {
  const students = readStudents();
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

app.post("/api/students", (req, res) => {
    const students = readStudents();
    const newStudent = {...req.body, id: Date.now()};
    students.push(newStudent);
    writeStudents(students);
    res.status(201).json(newStudent);
});

app.put("/api/students/:id", (req, res) => {
    const students = readStudents();
    const id = parseInt(req.params.id);
    students = students.map((s) => (s.id === id ? { ...s, ...req.body } : s));
    writeStudents(students);
    res.json({ message: "Student updated successfully" });
});

app.delete("/api/students/:id", (req, res) => {
    let students = readStudents();
    students = students.filter(s => s.id !== parseInt(req.params.id));
    writeStudents(students);
    res.json({ message: "Student deleted successfully" });
});

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
