const express = require("express");
const router = express.Router();

const Movie = require("../models/movies.model.js");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allMovies) => {
      res.render("movies.hbs", { allMovies });
    })
    .catch(() => {
      console.log("find failed");
    });
});

router.get("/movies/:id", (req, res, next) =>{
    const { id } = req.params
    console.log(id)
    Movie.findById(id)
    .then((data)=>{
        res.render("oneMovie.hbs", {data})
    })
    .catch(()=>{
        console.log('fail')
    })
})

module.exports = router;
