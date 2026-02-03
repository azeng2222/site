function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

	controls.update();

	//Set text font sizes
	let scaledArea = Math.round(Math.sqrt(window.innerWidth * window.innerHeight) / 10);



	var h1el = document.querySelectorAll('.textH1');
	for(var i=0; i<h1el.length; i++){
    	h1el[i].style.fontSize = scaledArea / 3;
	}

	var h2el = document.querySelectorAll('.textH2');
	for(var i=0; i<h2el.length; i++){
    	h2el[i].style.fontSize = scaledArea / 5;
	}

	var h3el = document.querySelectorAll('.textH3');
	for(var i=0; i<h3el.length; i++){
    	h3el[i].style.fontSize = scaledArea / 6.5;
	}

	var pEl = document.querySelectorAll('.textP');
	for(var i=0; i<pEl.length; i++){
    	pEl[i].style.fontSize = scaledArea / 7;
	}

	var h2el = document.querySelectorAll('.projButton');
	for(var i=0; i<h2el.length; i++){
    	h2el[i].style.fontSize = scaledArea / 5;
	}

	var imb = document.querySelectorAll('.introMenuButton');
	for(var i=0; i<imb.length; i++){
    	imb[i].style.fontSize = scaledArea / 4.4;
	}

	document.getElementById("ianWalsh").style.fontSize = scaledArea / 1.1;
	document.getElementById("welcome").style.fontSize = scaledArea / 1.7;
}