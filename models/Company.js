const { Schema, model } = require("mongoose");

const companySchema = Schema(
  {
    name: { type: String, required: true },
    about:{type:String},
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
const Company = model("Company", companySchema);
module.exports = Company;
