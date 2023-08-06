import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import Cookies from "js-cookie";
const Pockman = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef();

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    if (loading) return;
    if (observerRef.current) {
      observerRef.current.observe(document.querySelector(".loading"));
    }
  }, [loading, page]);
  const token = Cookies.get("jwtToken");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const fetchPokemons = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3001/pokeman?page=${page}`,
        { headers }
      );
      setPokemons(response.data.pokemons);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return (
    <div className="pokemon-container">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon._id} pokemon={pokemon} />
      ))}
      {loading && <div className="loading">Loading...</div>}
    </div>
  );
};
export default Pockman;
