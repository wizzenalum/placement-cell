const { Schema, model } = require("mongoose");

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
const Result = model("Result", resultSchema);
module.exports = Result;
