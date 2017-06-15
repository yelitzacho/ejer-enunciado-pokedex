$(document).ready(function(){

	for(var i= 1; i <= 150; i++) {
		const urlImg = 'http://serebii.net/art/th/'+i+'.png';
		const ul = $('<ul></ul>');
		const li = $('<li></li>');
		const pokemon = $('<div></div>');
		const div = $('<div></div>');
		const img = $('<div><img class=""></div>');
		const span = $('<span></span>');
		const pokemonInfo = $('<p></p>');
		const pokebola = $('<a><img src="assets/icon/pokeball_gray.png" alt="pokebola"></a>');
		const heart = $('<a><img src="assets/icon/valentines-heart.png" alt="corazón"></a>');
		const trade = $('<a><img src="assets/icon/data.png" alt="data"></a>');

		img.attr('src',urlImg);
		div.append(img);
		pokemonInfo.append(pokebola, heart, trade);
		span.append(span);
		pokemon.append(div, pokemonInfo);
		li.append(pokemon);
		ul.append(li);

		$('#container-pokemon').append(li);
	}
})

// 	var modal = $('#modal');
// 	var imgModal = $('#modalImg');

// 	$('#container-pokemon').click(function(e){
// 		if (e.target.tagName == "IMG") {
// 			modal.style.display = "block";
// 			imgModal.src = e.target.src;
// 		}
// 	});
// });