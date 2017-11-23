var session = function(req, res, next) {
  if (req.session && req.session.data) {
    User.findOne({ E_mail: req.session.data.E_mail }, function(err, user) {
      if (data) {
        req.data = data;
        delete req.data.password; // delete the password from the session
        req.session.data = data;  //refresh the session value
        res.locals.data = data;
      }
      // finishing processing the middleware and run the route
      next();
    });
  } else {
    next();
  }
};
module.exports={session:session};