const { Schema, model } = require("mongoose");

// creating the schema
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
// creating model from the schema

const Employee = model("Employee", employeeSchema);
module.exports = Employee;
