const { Result } = require('../models')
module.exports.updateResult = function (req, res) {
  console.log(req.body,req.params);
  Result.findByIdAndUpdate(req.params.id,{result:req.body.status},{new:true})
  .then(result=>{
    console.log('updated result',result);
    return res.redirect('back');
  }).catch(err=>{
    console.log(err);
    return res.redirect('back');
  })
};
