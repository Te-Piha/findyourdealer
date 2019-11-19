const express = require('express')
const db = require('../db')
const router = express.Router()

// home page
router.get('/map', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json(users)
    })
    .catch(displayError)
})

function displayError (res, err) {
  res.status(500).send('DATABASE ERROR: ' + err.message)
}

module.exports = router
