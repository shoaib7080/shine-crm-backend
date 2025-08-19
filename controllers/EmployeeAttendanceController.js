import EmployeeAttendance from "../models/EmployeeAttendance.js";

export const getEmployeeAttendance = async (req, res) => {
  try {
    const employeeAttendance = await EmployeeAttendance.find().sort({
      createdAt: -1,
    });
    res.json(employeeAttendance);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const saveEmployeeAttendance = async (req, res) => {
  try {
    const employeeAttendance = new EmployeeAttendance(req.body);
    await employeeAttendance.save();
    res.status(201).json(employeeAttendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateEmployeeAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEmployeeAttendance =
      await EmployeeAttendance.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedEmployeeAttendance) {
      return res.status(404).json({ error: "Employee Attendance not found" });
    }
    res.json(updatedEmployeeAttendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getEmployeeAttendanceById = async (req, res) => {
  try {
    const { id } = req.params;
    const employeeAttendance = await EmployeeAttendance.findById(id).sort({
      createdAt: -1,
    });
    if (!employeeAttendance) {
      return res.status(404).json({ error: "Employee Attendance not found" });
    }
    res.json(employeeAttendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
