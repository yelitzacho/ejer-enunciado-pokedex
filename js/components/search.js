'use strict';

const Search = (update) => {
  const header = $("<header></header>");
  const title = $("<span>Pokédex</span>");

  header.append(title);
  header.append(Search());
  return header;
}