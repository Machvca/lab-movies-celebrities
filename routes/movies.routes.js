const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");
/* GET movies page */
router.get("/", (req, res, next) => {
  res.render("movies/movies.hbs");
});

router.get("/create", (req, res, next) => {
  res.render("movies/new-movie.hbs");
});



router.post("/create", (req, res) => {
  const { name } = req.body;
  Celebrity.findOne({ name })
    .then((celebritiesDocFromDB) => {
      if (!celebritiesDocFromDB) {
        // prettier-ignore
        User.create({ name })
        .then(() => res.redirect('/movies'));
      } else {
        res.render("movies/movies.hbs", {
          message: "It seems you are already registered. ☀️",
        });
        return;
      }
    })
    .catch((err) => console.log(`Error while creating a new user: ${err}`));
});


module.exports = router;
