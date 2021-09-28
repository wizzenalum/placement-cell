const { Schema, model } = require("mongoose");

const employeeSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Employee = model("Employee", employeeSchema);
module.exports = Employee;
