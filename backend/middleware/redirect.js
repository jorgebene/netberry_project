// middleware/redirect.js

function redirectToApi(req, res, next) {
    if (req.path === '/') {
      res.redirect('/api');
    } else {
      next();
    }
  }
  
  module.exports = redirectToApi;
  