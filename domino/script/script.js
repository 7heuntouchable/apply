function rotateLeft(){
	var domino = document.getElementById("domino");
	if (domino.style.transform == "none"){
		domino.style.transform = "rotate(-90deg)";
	} else {
		domino.style.transform = "none";
	}
}

function rotateRight(){
	var domino = document.getElementById("domino");
	if (domino.style.transform == "none"){
		domino.style.transform = "rotate(90deg)";
	} else {
		domino.style.transform = "none";
	}
}

function reset(){
	var domino = document.getElementById("domino");
	if (domino.style.transform == "rotate(90deg)" || domino.style.transform == "rotate(-90deg)"){
		domino.style.transform = "none";
	} else {
		domino.style.transform = "none";
	}
}