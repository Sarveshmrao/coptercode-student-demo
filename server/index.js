require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Student = require("./models/Student");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if connection fails
  });

app.get("/", (req, res) => {
  res.send("API is running!");
});

// get all students
app.get("/api/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// get student by id
app.get("/api/students/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  if(student) res.json(student);
  else res.status(404).json({ message: "Student not found" });
});

// add a new student
app.post("/api/students", async (req, res) => {
  const newStudent = new Student(req.body);
  await newStudent.save();
  res.status(201).json({ message: "Student added successfully", student: newStudent });
});

// update an existing student
app.put("/api/students/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Student updated successfully" });
});

// delete a student
app.delete("/api/students/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted successfully" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
