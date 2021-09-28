const {Employee} = require('../models');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// using basic authentication here. cookie based seesion criation

// following function will create the sessions.
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
    },
    function(email, password, done) {
      Employee.findOne({ 
        email: email
        }, function (err, employee) {
        if (err) { return done(err); }
        if (!employee) {
          return done(null, false, { message: 'Incorrect employeename.' });
        }
        if (employee.password!=password) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, employee);
      });
    }
  ));

// serialize the data when it set to cookkie.
  passport.serializeUser(function(employee, done) {
    done(null, employee._id);
  });
  
// deserialize id for every request.
  passport.deserializeUser(function(id, done) {
    Employee.findById(id, function(err, employee) {
      if(err){
        console.log('error in finding user --> passport deserialzer');
        return done(err);
    }
      return done(null, employee);
    });
  });

  // i will use this middleware to check authenticity 
  passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        // request. user conatains the current signed in user from the session cokies we have just send to the views
        res.locals.user = req.user;
    }
    next();
}
module.exports = passport;