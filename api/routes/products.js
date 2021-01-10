var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(
    [{
      "id": 1,
      "name": "Nikon DSLR Camera",
      "img": "https://www.switchbacktravel.com/sites/default/files/articles%20/Nikon%20D850%20DSLR%20camera%20(m).jpg",
      "category": "camera",
      "price": 25,
      "status": "Hot"
    },
    {
      "id": 2,
      "name": "Samsung Handfree",
      "img":"https://www.switch.pk/wp-content/uploads/2018/07/Samsung-C5-Hands-free-2-600x600.jpg",
      "category": "handfree",
      "price": 45,
      "status": "New"
    },
    {
      "id": 3,
      "name": "Apple AirPods",
      "img": "https://dwkujuq9vpuly.cloudfront.net/news/wp-content/uploads/2020/11/Apple-AirPods-f939fc01-1d6f-4450-8c2c-6cddb664676a.jpg",
      "category": "airpod",
      "price": 90,
      "status": "Hot"
    },
    {
      "id": 4,
      "name": "Microphone",
      "img":"https://i.pcmag.com/imagery/reviews/05Iiqb4zK4bDwasAfoqxtZi-3.1569482265.fit_lpad.size_625x365.jpg",
      "category": "microphone",
      "price": 70,
      "status": "New"
    },
    {
      "id": 5,
      "name": "Blue Yetti",
      "img":"https://cnet4.cbsistatic.com/img/ZIoO8Dfk7S077xobNQEHRXxj54U=/940x0/2020/02/18/70404549-839a-4cf2-bed0-2fa411550b94/blue-yeti.jpg",
      "category": "microphone",
      "price": 25,
      "status": "Hot"
    }
    ]
  )
}
);

module.exports = router;