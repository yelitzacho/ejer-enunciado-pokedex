// 'use strict';

// const render = (root) => {
//   root.empty();
//   const wrapper = $('<div class="wrapper"></div>');
//   const update = function() {
//     render(root);
//   }
  
//   wrapper.append(Header(update));
//   if (state.selectedStation == null) {
//     wrapper.append(Search(update));
//   } else {
//     gmap = Gmap();
//     wrapper.append(gmap);
//     //wrapper.append(StationDetails(update));
//   }
//   root.append(wrapper);
//   gmap.init();
// }

// const state = {
//   stations: null,
//   selectedStation: null
// };

//$(function() {
//
//});
// $( _ => {

//   getJSON('stations.json', (err, json) => {

//     if (err) { return alert(err.message);}

//     state.stations = json;

//     const root = $('.root');
//     render(root);
//   });

// });
