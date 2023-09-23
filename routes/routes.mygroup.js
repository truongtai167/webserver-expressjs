const express = require('express');
const {studentRequest} = require('../controllers/controllers.mygroup');
const {studentmessage} = require('../controllers/controllers.mygroup');
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/:studentID', studentRequest);
// define the about route
router.get('/:studentID', studentmessage);

module.exports = router