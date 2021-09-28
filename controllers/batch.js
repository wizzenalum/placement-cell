const { Batch } = require("../models");

module.exports.batch = function (req, res) {
  return res.end("<h1>bathc to read</h1>" + `${req.params.id}`, {});
};

// this function will create the batch document in the database
module.exports.createBatch = function (req, res) {
  // console.log(req.body);
  let batch = Batch.create(req.body)
    .then((batch) => {
      console.log(batch);
      return res.redirect("/");
    })
    .catch((err) => {
      console.log("error in creating batch", err);
    });
};
