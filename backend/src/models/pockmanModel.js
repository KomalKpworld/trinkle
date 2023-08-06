const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  hp: { type: String },
  abilities: [
    {
      name: { type: String },
      text: { type: String },
      type: { type: String },
    },
  ],
  attacks: [
    {
      name: { type: String },
      cost: [String],
      convertedEnergyCost: { type: Number },
      damage: { type: String },
      text: { type: String },
    },
  ],
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
