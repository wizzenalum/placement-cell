const { Schema, model } = require("mongoose");

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

const Batch = model("Batch", batchSchema);
module.exports = Batch;
