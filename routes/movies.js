const express = require('express')
const router = express.Router()
const movieModel = require('../models/Movie.model')

router.get('/', async (req, res, next) => {
  const movies = await movieModel.find()
  res.render('movies', { movies })
})

module.exports = router
