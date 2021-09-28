const { Schema, model } = require("mongoose");

// creating the schema
const batchSchema = new Schema(
  {
    name: String,
    limit: {
      type: Number,
      min: [1, "without students, how batch posible"],
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  {
    timestamps: true,
  }
);
batchSchema.virtual("isBatchFull").get(function () {
  return this.limit < this.students.length;
});
// creating model from the schema

const Batch = model("Batch", batchSchema);
module.exports = Batch;
