import mongoose from "mongoose";

const timesheetSchema = mongoose.Schema(
  {
    employee_id: {
      type: String,
      required: true,
    },
    employee_name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time_entries: [
      {
        start_time: {
          type: String,
          required: true,
        },
        end_time: {
          type: String,
          required: true,
        },
        task_description: {
          type: String,
          required: true,
        },
        project_name: {
          type: String,
        },
        hours_worked: {
          type: Number,
          required: true,
        },
      },
    ],
    total_hours: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["Draft", "Submitted", "Approved", "Rejected"],
      default: "Draft",
    },
  },
  {
    timestamps: true,
  }
);

// Calculate total hours before saving
timesheetSchema.pre("save", function (next) {
  this.total_hours = this.time_entries.reduce(
    (total, entry) => total + entry.hours_worked,
    0
  );
  next();
});

const Timesheet =
  mongoose.models.Timesheet || mongoose.model("Timesheet", timesheetSchema);

export default Timesheet;
