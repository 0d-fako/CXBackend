import Student from "../models/Student.js";
import express from "express";

const router = express.Router();


router.get("/enrollments", async (req, res) => {
  try {
    const students = await Student.find().populate(
      "enrolledCourses",
      "courseTitle courseCode"
    );
    return res.status(200).json({ students });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to retrieve enrollments." });
  }
});



router.post("/enroll", async (req, res) => {
  try {
    const { studentId, courseId } = req.body;

  
    const student = await Student.findById(studentId);
    if (!student || student.role !== "Student") {
      return res.status(403).json({ message: "Only students can enroll in courses." });
    }

    const existingEnrollment = await Enrollment.findOne({ student: studentId, course: courseId });
    if (existingEnrollment) {
      return res.status(400).json({ message: "Student already enrolled in this course." });
    }

    
    const newEnrollment = new Enrollment({ student: studentId, course: courseId });
    await newEnrollment.save();

    
    student.enrolledCourses.push(courseId);
    await student.save();

    return res.status(201).json({ message: "Enrollment successful!", enrollment: newEnrollment });

  } catch (error) {
    console.error("Enrollment Error:", error);
    return res.status(500).json({ message: "Failed to enroll student." });
  }
});

export default router;
