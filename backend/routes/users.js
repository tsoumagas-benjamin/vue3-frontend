var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  //step 1 goto youtube, get the thing based on XYZ params, and then return here
  // ... youtube

  // step 2 do another thing, like go to ... spotify?
  // ... spotify
  res.send({
    spotify: '...',
    youtube:  ',,,',
    captions: 'these are dynamically loaded captions'
  });
});

module.exports = router;
