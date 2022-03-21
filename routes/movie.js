const express = require('express')
const router = express.Router()
const movieModel = require('../models/Movie.model')

router.get('/:id', async (req, res, next) => {
  const movie = await movieModel.findById(req.params.id)
  res.render('movie', { movie })
})

module.exports = router
