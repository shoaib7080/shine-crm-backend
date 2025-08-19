import mongoose from "mongoose";

const EmployeeAttendanceSchema = new mongoose.Schema(
  {
    employee_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    checkIn: {
      date: {
        type: Date,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
      location: {
        latitude: {
          type: Number,
          required: true,
        },
        longitude: {
          type: Number,
          required: true,
        },
      },
    },
    checkOut: {
      date: {
        type: Date,
      },
      time: {
        type: String,
      },
      location: {
        latitude: {
          type: Number,
        },
        longitude: {
          type: Number,
        },
      },
    },
    status: {
      type: String,
      enum: ["Present", "Absent", "Half Day", "Leave"],
      default: "Present",
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

const EmployeeAttendance =
  mongoose.models.EmployeeAttendance ||
  mongoose.model("EmployeeAttendance", EmployeeAttendanceSchema);

export default EmployeeAttendance;
