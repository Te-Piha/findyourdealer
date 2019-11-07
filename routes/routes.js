const express = require('express')
const db = require('../db')
const router = express.Router()

// home page
router.get('/', (req, res) => {
  db.getUsers()
    .then(dealers => {
      res.render('index', { dealers: dealers })
    })
    .catch(err => displayError(res, err))
})

function displayError (res, err) {
  res.status(500).send('DATABASE ERROR: ' + err.message)
}

module.exports = router
