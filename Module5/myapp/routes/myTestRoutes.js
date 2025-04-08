const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => { // leads to localhost:3000/mytest/test/
    res.send('This is a test') //Swapped app for router since its object router.
   })
router.get('/test2', (req, res) => {// leads to localhost:3000/mytest/test2/
    res.send('Second test')
   })

module.exports = router; //for exporting router
