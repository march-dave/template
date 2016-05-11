var express = require('express');
var router = express.Router();

var request = require('request');
var Base64 = require('js-base64').Base64;

var API_KEY = process.env.PB_API_KEY;
var SECRET = process.env.PB_SECRET;

router.get('/getpitneybowes', (req, res) => {
  // var accessTokenUrl = 'https://github.com/login/oauth/access_token';
  // var userApiUrl = 'https://api.github.com/user';

  console.log('getpitneybowes');

    var oauthUrl = 'https://api.pitneybowes.com/oauth/token';
    var key = Base64.encode(`${API_KEY}:${SECRET}`);
    // if(err) return res.status(400).send(err);



    request.post({
      url: oauthUrl,
      headers: {
        'Authorization': `Basic ${key}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: "grant_type=client_credentials"
    }, (err, response, body) => {
      var accessToken = JSON.parse(body).access_token

      var apiUrl = 'https://api.pitneybowes.com/location-intelligence/geoenhance/v1/address/bylocation?latitude=37.4954193&longitude=-121.9178031999999&searchRadius=2640&searchRadiusUnit=feet'

      console.log('accessToken:', accessToken)

      request.get({
        url: apiUrl,
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }, (err, response, body) => {
        console.log('body:', JSON.stringify(JSON.parse(body), null, 2));
      });
    });






    res.send();

});

module.exports = router;
