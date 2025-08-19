import express from "express";
import {
  getEmployeeAttendance,
  getEmployeeAttendanceById,
  saveEmployeeAttendance,
  updateEmployeeAttendance,
} from "../controllers/EmployeeAttendanceController.js";

const employeeAttendanceRouter = express.Router();

employeeAttendanceRouter.get("/", getEmployeeAttendance);
employeeAttendanceRouter.post("/", saveEmployeeAttendance);
employeeAttendanceRouter.put("/:id", updateEmployeeAttendance);
employeeAttendanceRouter.get("/:id", getEmployeeAttendanceById);

export default employeeAttendanceRouter;
