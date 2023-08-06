const Pokemon = require("../models/pockmanModel");

// Create a new Pokémon
const createPokemon = async (req, res) => {
  try {
    data = req.body;
    const newPokemon = new Pokemon(data);
    const savedPokemon = await newPokemon.save();
    return res.status(201).send({ msg: "sucessfully created" });
  } catch (error) {
    return res.status(500).send({ msg: error });
  }
};

// Read all Pokémon
const getAllPokemon = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    // Fetch the paginated pokemons
    const pokemons = await Pokemon.find({})
      .skip((page - 1) * limit)
      .limit(limit);
    // Count the total number of pokemons in the collection
    const totalCount = await Pokemon.countDocuments();

    res.json({
      totalCount,
      currentPage: page,
      totalPages: Math.ceil(totalCount / limit),
      pokemons,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// Read a specific Pokémon by ID
const getPokemonById = async (req, res) => {
  try {
    let id = req.params.id;
    const pokemon = await Pokemon.findOne({ id });
    return pokemon;
  } catch (error) {
    return res.status(500).send({ msg: error });
  }
};

// Update a Pokémon by ID
const updatePokemonById = async (req, res) => {
  try {
    let newData = req.body;
    let id = req.params.id;
    const updatedPokemon = await Pokemon.findOneAndUpdate({ id }, newData, {
      new: true,
    });
    return updatedPokemon;
  } catch (error) {
    return res.status(500).send({ msg: error });
  }
};

// Delete a Pokémon by ID
const deletePokemonById = async (id) => {
  try {
    const deletedPokemon = await Pokemon.findOneAndDelete({ id });
    return deletedPokemon;
  } catch (error) {
    return res.status(500).send({ msg: error });
  }
};

module.exports = {
  createPokemon,
  getAllPokemon,
  getPokemonById,
  updatePokemonById,
  deletePokemonById,
};
