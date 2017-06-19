'use strict';

const filterPokemon = (stations,query) => {
  let grifos = stations.filter((event)=>{
    if(event.district.toLowerCase().indexOf(query.toLowerCase()) !== -1){
      return event;
    }
  });
  return grifos;
}