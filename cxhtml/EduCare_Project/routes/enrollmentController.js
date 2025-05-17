import { isExpression } from "typescript";
import Student from "../models/Student.js";
import express from "express";

const router = express.Router();

export default router;

router.get("/enrollments", async (req, res) => {
  try {
    const students = await Student.find().populate(
      "enrolledCourses",
      "courseTitle courseCode"
    );
    return res.status(200).json({ students });
  } catch (error) {
    console.error("Fetching Enrollments Error:", error);
    return res.status(500).json({ message: "Failed to retrieve enrollments." });
  }
});
