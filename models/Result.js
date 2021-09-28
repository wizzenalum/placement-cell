const { Schema, model } = require("mongoose");
// creating the schema

const resultSchema = Schema(
  {
    student: {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
    },
    interview: {
      type: Schema.Types.ObjectId,
      ref: "Interview",
    },
    result: {
      type: String,
      enum: ["Pass", "Fail", "Pending"],
    },
  },
  {
    timestamps: true,
  }
);

// creating model from the schema

const Result = model("Result", resultSchema);
module.exports = Result;
