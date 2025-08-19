import Timesheet from "../models/Timesheet.js";

// Get all timesheets
export const getTimesheets = async (req, res) => {
  try {
    const timesheets = await Timesheet.find({});
    res.json({
      timesheets,
      totalCount: timesheets.length,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get timesheet by ID
export const getTimesheetById = async (req, res) => {
  try {
    const timesheet = await Timesheet.findById(req.params.id);
    if (!timesheet) {
      return res.status(404).json({ message: "Timesheet not found" });
    }
    res.json(timesheet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new timesheet
export const createTimesheet = async (req, res) => {
  try {
    const timesheet = await Timesheet.create(req.body);
    res.status(201).json({
      success: true,
      timesheet,
      message: "Timesheet created successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update timesheet
export const updateTimesheet = async (req, res) => {
  try {
    const updatedTimesheet = await Timesheet.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTimesheet) {
      return res.status(404).json({ message: "Timesheet not found" });
    }
    res.json({ success: true, updatedTimesheet });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete timesheet
export const deleteTimesheet = async (req, res) => {
  try {
    const timesheet = await Timesheet.findByIdAndDelete(req.params.id);
    if (!timesheet) {
      return res.status(404).json({ message: "Timesheet not found" });
    }
    res.json({ message: "Timesheet deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTimesheetsByEmployeeId = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const timesheets = await Timesheet.find({ employeeId });
    res.json(timesheets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
