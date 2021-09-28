const { Schema, model } = require("mongoose");

// creating the schema
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
// creating model from the schema

const Company = model("Company", companySchema);
module.exports = Company;
