module.exports = {
  authenticator: (req, res, next) => {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
      console.log('go home');
      return next();
      console.log('next over');
    }
    res.redirect('/users/login');
    console.log('go login');
  },
};
