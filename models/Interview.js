const { Schema, model } = require("mongoose");

const interviewSchema = Schema(
  {
    name: { type: String, required: true },
    company:{
      type:Schema.Types.ObjectId,
      ref:"Company"
    },
    students: [
      {
        student: {
          type: Schema.Types.ObjectId,
          ref: "Student",
        },
        result: {
          type: Schema.Types.ObjectId,
          ref: "Result",
        },
      },
    ],
    date: Date,
  },
  {
    timestamps: true,
  }
);
const Interview = model("Interview", interviewSchema);
module.exports = Interview;
