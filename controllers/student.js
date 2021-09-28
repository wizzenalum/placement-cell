const { Student, Batch } = require("../models");

module.exports.create = async function (req, res) {
  console.log(req.body);
  let student = await Student.create(req.body);
  let batch = await Batch.findByIdAndUpdate(req.body.batch,{ $push: { students: [student.id] } });
  console.log(student);
  return res.redirect("/");
};
module.exports.update = function (req, res) {
  console.log(req.body);
  Student.findByIdAndUpdate(req.params.id,{status:req.body.status})
  .then(value=>{
    console.log(value);
    return res.redirect('back');
  }).catch(err=>{
    console.log(err);
  })
};

module.exports.delete = function (req, res) {
  return res.end("student updated" + `${req.params.id}`, {});
};
