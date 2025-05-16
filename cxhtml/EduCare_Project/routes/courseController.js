import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Instructor from "../models/Instructor.js";
import Course from "../models/Course.js";

const router = express.Router();

const validateInstructor = (req, res, next) => {
  if (req.user?.role !== "Instructor") {
    return res
      .status(403)
      .json({ message: "Access denied, Only instructor can create course" });
  }
  next();
};

router.post("/createCourse", validateInstructor, async (req, res) => {
  try {
    const { courseCode, courseTitle, courseDescription, instructorId } =
      req?.body;

    if (!courseCode || !instructorId || !courseTitle) {
      return res.status(400).json({
        message: "Course code, course title, instructor are required",
      });
    }

    let existingCourse = await Course.findOne({ courseCode });

    if (existingCourse) {
      return res.status(400).json({
        message: "Course code already exist",
      });
    }

    let instructor = await Instructor.findById(instructorId);

    if (!instructor) {
      return res.status(404).json({ message: "Unable to find the instructor" });
    }

    const newCourse = new Course({
      courseCode,
      courseTitle,
      courseDescription,
      instructor: instructorId,
    });

    await newCourse.save();

    return res
      .status(201)
      .json({ message: "Course created successfully", course: newCourse });
  } catch (error) {
    console.error({ message: error });
    return res.status(500).json({ message: "Error creating course" });
  }
});

export default router;
