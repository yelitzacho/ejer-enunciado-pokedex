'use strict';

const filterPokemon = (pokemons,query) => {
  let pokemon = pokedex.filter((event)=>{
    if(event.district.toLowerCase().indexOf(query.toLowerCase()) !== -1){
      return event;
    }
  });
  return pokemon;
}