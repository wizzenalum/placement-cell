const { Schema, model } = require("mongoose");

// creating the schema
const studentSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    batch: {
      type: Schema.Types.ObjectId,
      ref: "Batch",
    },
    college: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Placed", "Not Placed", "Unknown"],
      required: true,
    },
    dsa: {
      type: Number,
      min: [0, "least posible % score are 0"],
      max: [100, "heighest poslible % score is 100"],
    },
    web: {
      type: Number,
      min: [0, "least posible % score are 0"],
      max: [100, "heighest poslible % score is 100"],
    },
    react: {
      type: Number,
      min: [0, "least posible % score are 0"],
      max: [100, "heighest poslible % score is 100"],
    },
    interview: [
      {
        type: Schema.Types.ObjectId,
        ref: "Interview",
      },
    ],
  },
  {
    timestamps: true,
  }
);
// creating model from the schema
const Student = model("Student", studentSchema);
module.exports = Student;
