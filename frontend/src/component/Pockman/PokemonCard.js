// src/components/PokemonCard.js
import React from 'react';
const PokemonCard = ({ pokemon }) => {
  console.log(pokemon)
  return (
    <div key={pokemon._id} className="pokemon-card bg-blue-700 ">
      <img src={pokemon.image} alt={pokemon.name} />
      <div className="pokemon-info">
        <h2>{pokemon.name}</h2>
        <p>HP: {pokemon.hp}</p>
        <div>Attacks: 
      {pokemon.abilities.map((attack) => (
            <div key={attack._id}>
              <p> name : {attack.name}</p>
              <p>convertedEnergyCost: {attack.convertedEnergyCost}</p>
              <p>damage: {attack.damage}</p>
              <p>text: {attack.text}</p>
              </div>
      ))}
         </div>
        <div>
          Abilities:
          {pokemon.abilities.map((ability) => (
            <div key={ability._id}>
              <p>name: {ability.name}</p>
              <p>text: {ability.text}</p>
              <p>type: {ability.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;

