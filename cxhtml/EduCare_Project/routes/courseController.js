import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Student from "../../models/Student.js";
import Instructor from "../../models/Instructor.js";
import Admin from "../../models/Admin.js";
import Course from "../models/Course.js";

const router = express.Router();

router.post("/createCourse", validateInstructor(), async (req, res) => {
  try {
    const { courseCode, courseTitle, courseDescription, instructorid } =
      req?.body;

    if (!courseCode || !instructorid || !courseTitle) {
      return res.status(400).json({
        message: "Course code, course title, instructor are required",
      });
    }

    

    let existingCourse = await Course.findOne({ email });

    if (existingCourse) {
      return res.status(400).json({
        message: "Course code already exist",
      });
    }
  } catch (error) {
    return res.json(500).json({ message: "Error creating course" });
  }
});
