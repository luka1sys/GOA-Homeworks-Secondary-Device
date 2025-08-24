const express = require('express');

const {getMovies,getMovieById,addmovie,deleteMovie} = require('../controller/movie.controller');

const router = express.Router();

router.get('/',getMovies);

router.get('/:id',getMovieById);

router.post('/',addmovie);

router.delete('/:id', deleteMovie);

module.exports = router;
