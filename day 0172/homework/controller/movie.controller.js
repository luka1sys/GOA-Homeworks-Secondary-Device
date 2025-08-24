const movies = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
    rating: 9.2
  },
  {
    id: 3,
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    genre: "Adventure",
    rating: 8.6
  },
  {
    id: 4,
    title: "Parasite",
    director: "Bong Joon Ho",
    year: 2019,
    genre: "Thriller",
    rating: 8.5
  },
  {
    id: 5,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
    rating: 9.0
  }
];
const getMovies = (req, res) => {
    res.json(movies);
};
const getMovieById = (req, res) => {
    const movieId = parseInt(req.params.id);
    const movie = movies.find(c => c.id === movieId);
    if(!movie){
        return res.status(404).json({message:'movie not foud'});    
    };
    res.json(movie);
}

const addmovie = (req,res)=>{
    const { id, title, director, year, genre, rating } = req.body;
    const newmovie={
        id,
        title,
        director,
        year,
        genre,
        rating  
    };
    movies.push(newmovie);
    res.status(201).json(newmovie);
        
    };

const deleteMovie = (req, res) => {
    const movieId = parseInt(req.params.id);
    const movieIndex = movies.findIndex(c => c.id === movieId);
    if (movieIndex === -1){
        return res.status(404).json({ message: 'movie not found'});
    };
    movies.splice(movieIndex, 1);
    res.status(204).send(movies);
}; 
module.exports = {getMovies, getMovieById, addmovie, deleteMovie};
