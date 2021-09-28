const { Company } = require("../models");

// dummy function to read the company

module.exports.company = function (req, res) {
  return res.end("<h1>company to read</h1>" + `${req.params.id}`, {});
};

// this function will create the company document in the database

module.exports.createCompany = function (req, res) {
  Company.create({
    name:req.body.name,
    about:req.body.about
  }).then(company=>{
    console.log(company,"company")
  }).catch(err=>{
    console.log("error",err)
  })
  return res.redirect('/');
};
