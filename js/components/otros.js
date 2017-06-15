window.addEventListener('load', function (evento){
	var galeriaContenedor = document.getElementById('container-pokemon');

	for (var i = 1; i <= 150; i++) {
		/*creando divs*/
		var urlImg = 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+ i +'.png';
		var div = document.createElement('div');
		var img = document.createElement('img');
		img.setAttribute('src', urlImg);
		img.setAttribute('class', 'img-galeria');
		div.setAttribute('class','contenedor-galeria');
		/*añadiendo a html*/
		div.appendChild(img);
		galeriaContenedor.appendChild(div);
		var galeria = document.getElementById("container-pokemon");
	};

	var modal = document.getElementById("modal");
	var imgModal = document.getElementById("myImg");
	galeria.addEventListener('click', function(e){
		if (e.target.tagName == "IMG") {
        modal.style.display = "block";
        console.log (e.target.src);
        imgModal.src = e.target.src;
    }
  });
});