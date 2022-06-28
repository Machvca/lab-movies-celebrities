const mongoose = require("mongoose");
const celebritySchema = new mongoose.Schema({
  name: {
    type: String,
    // este elemento no puede repetirse, si se fuese a repetir, error!
  },

  occupation: {
    type: String,
  },

  catchPhrase: {
    type:String, // en caso que la caracteristica no se pase, será el valor indicado.
  },
}); // Iteration #1
const Celebrity = mongoose.model("Celebrity", celebritySchema);
module.exports = Celebrity; //  Add your code here
