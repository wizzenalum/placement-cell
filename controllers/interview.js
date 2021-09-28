const { Interview,Student,Result } = require("../models");
const { populate } = require("../models/Batch");
const { company } = require("./company");

// inteivew lists will we here.
module.exports.interview = function(req,res){
  Interview.findById(req.params.id)
      .populate({
        path:"company",
        model:"Company"                                     
      }).populate({
        path:"students",
        populate:[
          {
            path:"student",
            model:"Student"
          },
          {
            path:"result",
            model:"Result"
          }
        ]    
      }).then(interview=>{
        const context = {
          title:`${interview.name}-interview`,
          interview:interview
        }
        console.log(interview.students[0]);

        return res.render('interview',context);
      }).catch(err=>{
        console.log(err);
        return res.redirect("back");
      })


}


// function to create interview
module.exports.createInterview = function (req, res) {
  Interview.create({...req.body})
  .then(interview=>{
    console.log(interview,"inteview")
    return res.redirect('/');

  }).catch(err=>{
    console.log(err)
    return res.redirect('/');
  })
};

// this function add student to interview.

module.exports.updateInterview = async function (req, res) {
  try {
    console.log(req.query);
    const {interviewId,studentId} = req.query;
    const interview = await Interview.findById(interviewId);
    const student = await Student.findById(studentId);
    const result = await Result.create({
      student:student.id,
      company:interview.company,
      interview:interview.id,
      result:"Pending"
    });
    student.interview.push(interviewId)
    student.save();
    interview.students.push({student:studentId,result:result.id});
    interview.save();
    console.log(req.query,interview,student,result);
    return res.redirect('/');

  } catch (error) {
    console.log(error);
    return res.redirect('/');
  }
};