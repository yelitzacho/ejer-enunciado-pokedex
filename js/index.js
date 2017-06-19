'use strict';

const render = (root) => {
  root.empty();
  const update = function() {
    render(root);
  }

const state = {
  pokemons: null,
  selectedPokemon: null
};

$( _ => {

  getJSON('pokedex.json', (err, json) => {

    if (err) { return alert(err.message);}

    state.pokedex = json;

    const root = $('#root');
    render(root);
  });

});