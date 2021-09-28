const { Student, Company } = require("../models");
const { company } = require("./company");
const fs = require('fs');


module.exports.allStudent = async function (req, res) {
  try {
    const students = await Student.find({})
    .populate({
                path:'interview',
                model:"Interview",
              populate:[
                {
                  path:'company',
                  model:'Company',
                },
                {
                path:'students',
                populate:[
                  {
                    path:'result',
                    model:'Result',
                  }
                ]}]
              }).populate('batch');
    let serialNumber = 1, entry = "";
    let fileData = "S.No,name,batch,college,status,dsa,web,react,interview,interview Date,company,result"
    for(let student of students){
      // console.log("student==", student.name)
      if(student.interview.length>0){
        entry = serialNumber+","+student.name+","+student.batch.name+","+student.college+","+student.status+","+student.dsa+","+student.web+","+student.react;
        
        for(let interview of student.interview){
          // console.log("interve",interview.name);
          let result = "Pending";
          for(let item of interview.students){
            if(item.student.toString()===student.id){
              result = item.result.result
            }
          }
          entry+=","+interview.name+","+interview.date.toDateString()+","+interview.company.name+","+result;
          serialNumber++;
          fileData+="\n"+entry;
        }
      }
    }
    console.log(fileData)
    const file = fs.writeFile('assets/data.csv',fileData,(err,data)=>{
      if(err){
        console.log(err);
        return res.redirect('/');
      }
      return res.download('assets/data.csv');
    });
  } catch (err) {
    console.log(err,0000);
  }
};

module.exports.interview = function (req, res) {
  return res.end(`for a interview ${req.params.id}`, {});
};
module.exports.batch = function (req, res) {
  return res.end(`for a batch  ${req.params.id}`, {});
};
