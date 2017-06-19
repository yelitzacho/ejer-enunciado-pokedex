$(document).ready(function(){

	for(var i= 1; i <= 150; i++) {
		const urlImg = 'http://serebii.net/art/th/'+i+'.png';
		const img = $('<img>');
		const cardImage = $('<div class="card-image"></div>');
		const iconPokeball = $('<a href="#modal1"><i class="icon icon-pokeball"></i></a>');
		const iconHeart = $('<a><i class="icon icon-heart2"></i></a>');
		const iconBattle = $('<a><i class="icon icon-battle"></i></a>');
		const name =$('<h5>Pokemon</h5>');
		const div = $('<div class="center-align"></div>');
		const cardContent = $('<div class="card-content"></div>');
		const card = $('<div class="card"></div>');
		const col = $('<div class="col s3 m3"></div>');

		img.attr('src',urlImg);
		cardImage.append(img);
		div.append(iconPokeball, iconHeart, iconBattle,name);
		cardContent.append(div);
		card.append(cardImage, cardContent);
		col.append(card);

		$('.container-pokemon').append(col);
	}

    $('.modal').modal();
});