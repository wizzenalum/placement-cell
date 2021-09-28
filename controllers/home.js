const {Student,Batch,Interview, Company} = require("../models") 

module.exports.studentList = async function (req, res) {
  try {
    const studentList = await Student.find({});
    const batchList = await Batch.find({});
    const companyList = await Company.find({});
    const interviewList = await Interview.find({})

    const context = {
      title: "students list",
      studentList:studentList,
      batchList,
      companyList,
      interviewList
    };
    console.log(studentList.length, " student send");
    
    return res.render("home.ejs", context);
  } catch (err) {
    console.log("server side error",err)
  }
};

module.exports.interviewList = async function (req, res) {
  try {
    const interviewList = await Interview.find({}).populate('company');
    const batchList = await Batch.find({});
    const companyList = await Company.find({});
    const context = {
      title: "interview list",
      interviewList:interviewList,
      companyList,
      batchList
    };
    console.log(interviewList);
    
    return res.render("interview-list.ejs", context);
  } catch (err) {
    console.log("server side error",err);

  }
  
  
};
module.exports.currentJobs = function (req, res) {
  let context = { title: "current jobs" };
  return res.render("current-job.ejs", context);
};
module.exports.error404 = function (req, res) {
  return res.end("Page not found", {});
};
