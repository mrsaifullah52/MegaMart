var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(
    [{
      "id": 1,
      "name": "Nikon DSLR Camera",
      "category": "camera",
      "price": 25,
      "status": "Hot"
    },
    {
      "id": 2,
      "name": "Samsung Handfree",
      "category": "handfree",
      "price": 45,
      "status": "New"
    },
    {
      "id": 3,
      "name": "Apple AirPods",
      "category": "handfree",
      "price": 90,
      "status": "Hot"
    },
    {
      "id": 4,
      "name": "Microphone",
      "category": "micronphone",
      "price": 70,
      "status": "New"
    },
    {
      "id": 5,
      "name": "Blue Yetti",
      "category": "microphone",
      "price": 25,
      "status": "Hot"
    }
    ]
  )
}
);

module.exports = router;