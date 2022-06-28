const mongoose = require("mongoose");
const celebritySchema = new mongoose.Schema({
  title: {
    type: String,
    // este elemento no puede repetirse, si se fuese a repetir, error!
  },

  genre: {
    type: String,
  },

  plot: {
    type: String, // en caso que la caracteristica no se pase, será el valor indicado.
  },

  cast: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Celebrity",
      },
    ], // en caso que la caracteristica no se pase, será el valor indicado.
  },
}); // Iteration #1
const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
