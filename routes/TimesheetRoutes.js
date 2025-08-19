import express from "express";
import {
  getTimesheets,
  getTimesheetById,
  createTimesheet,
  updateTimesheet,
  deleteTimesheet,
  getTimesheetsByEmployeeId,
} from "../controllers/TimesheetController.js";

const timesheetRouter = express.Router();

timesheetRouter.get("/", getTimesheets);
timesheetRouter.get("/:id", getTimesheetById);
timesheetRouter.post("/", createTimesheet);
timesheetRouter.put("/:id", updateTimesheet);
timesheetRouter.delete("/:id", deleteTimesheet);
timesheetRouter.get("/employee/:employeeId", getTimesheetsByEmployeeId);

export default timesheetRouter;
