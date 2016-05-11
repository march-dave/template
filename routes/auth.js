var express = require('express');
var router = express.Router();

router.post('/github', (req, res) => {
  // var accessTokenUrl = 'https://github.com/login/oauth/access_token';
  // var userApiUrl = 'https://api.github.com/user';


  var oauthUrl = 'https://api.pitneybowes.com/oauth/token';
  var key = Base64.encode(`${API_KEY}:${SECRET}`);


});

module.exports = router;
