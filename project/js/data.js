

var email = "user@utente.it";
var pass = "0000";
var nickname = "angfor";
var sex = "uomo";
var eta = "22";
var conferma = "aaaa";
var myObj;
var myJSON;
var myUser;
var emForm;
var psForm;
var myJSON2;
var storiaJ;
var myStoria;

var storia = [];


$(document).ready(function () {
	var text = localStorage.getItem("StoriaJSON");
	var obj = JSON.parse(text);
	var text2 = localStorage.getItem("testJSON");
	var utente = JSON.parse(text2);
	if (obj == null){
		$("#messaggio").append("Non ci sono storie da visualizzare al momento, vai alla sezione <a href="+"liststorie.html"+">Forum</a> per poterne aggiungere.");
		return;
	} 
	var i = 0
	do {
		$('#containerStories').append('<div class="storyBox" id="' + i + '"></div>');
		$('#' + i + '').append('<span class="glyphicon glyphicon-remove" onclick="on()"></span><div class="titleStory3"><h3>' + utente.nickname+" "+utente.eta+" anni" + '</h3></div>');
		$('#' + i + '').append('<div class="bodyStory"><p>' + obj.storia[i] + '</p></div>');
		i++;
	} while (obj.storia[i] != undefined)

});
function cancellaStoria(){
	storiaJ = null;
	myStoria = JSON.stringify(storiaJ)
	localStorage.setItem("StoriaJSON", myStoria);
	location.reload();
}

function controlloLog() {
	if (loadPage() == 1) {
		window.location.replace("aggiungiStorie.html");
	}
	if (loadPage() == 0) {
		alert("Devi effettuare il Log-in per inserire una storia");
	}
}

function setStoria() {
	storia.push($("#tua-Storia").val());
	storiaJ = { storia: storia };
	myStoria = JSON.stringify(storiaJ)
	localStorage.setItem("StoriaJSON", myStoria);
	document.getElementById("overlay").style.display = "block";
}
function login() {
	var text = localStorage.getItem("testJSON");
	var obj = JSON.parse(text);
	emForm = document.getElementById("email").value;
	psForm = document.getElementById("password").value;
	myUser = { email: emForm, password: psForm };
	myJSON2 = JSON.stringify(myUser)
	localStorage.setItem("UtenteJSON", myJSON2);
	if ((emForm != obj.email) || (psForm != obj.pass))
		alert("Credenziali errate. Reinserisci email o password")
	if ((emForm == obj.email) && (psForm == obj.pass)) {
		document.getElementById("accedi").style.display = "none";
		document.getElementById("registrati").style.display = "none";
		document.getElementById("pannellino").style.display = "none";
		document.getElementById("login-btn1").style.display = "inline-block";
		document.getElementById("login-btn2").style.display = "inline-block";
		document.getElementById("login-btn3").style.display = "inline-block";
		document.getElementById("utente").innerHTML = obj.nickname;
	}
}
function loadPage() {
	text = localStorage.getItem("testJSON");
	obj = JSON.parse(text);
	var textUser = localStorage.getItem("UtenteJSON");
	var objUser = JSON.parse(textUser);
	if (objUser == null) {
		return 0;
	}
	if (objUser.email == "") {
		return 0;
	}
	if ((objUser.email == obj.email) && (objUser.password == obj.pass)) {
		document.getElementById("accedi").style.display = "none";
		document.getElementById("registrati").style.display = "none";
		document.getElementById("pannellino").style.display = "none";
		document.getElementById("login-btn1").style.display = "inline-block";
		document.getElementById("login-btn2").style.display = "inline-block";
		document.getElementById("login-btn3").style.display = "inline-block";
		document.getElementById("utente").innerHTML = obj.nickname;
		return 1;
	}
	return 0;
}



function on() {
	document.getElementById("overlay").style.display = "block";
}
function off() {
	document.getElementById("overlay").style.display = "none";
}
function off2() {
	document.getElementById("overlay2").style.display = "none";
}

function off3() {
	document.getElementById("overlay3").style.display = "none";
}

$(".l").click(function () {
	$("#pannellino").toggle();
});

$("#loggato").click(function () {
	$("#pannello-utente").toggle();
});

function addOmbra() {
	var x = document.getElementById('ricerca');
	x.classList.add('ombra');
}

function removeOmbra() {
	var x = document.getElementById('ricerca');
	x.classList.remove('ombra');
}

$("#Reg").click(function () {
	nickname = $("#nickname").val();
	sex = $("#sex").val();
	eta = $("#eta").val();
	email = $("#email").val();
	pass = $("#password").val();
	conferma = $("#conferma").val();
	emForm = $("#email").val();
	psForm = $("#password").val();
	myUser = { email: emForm, password: psForm };
	myJSON2 = JSON.stringify(myUser)
	localStorage.setItem("UtenteJSON", myJSON2);
	myObj = {nickname: nickname, sex: sex, eta: eta, email: email, pass: pass, conferma: conferma };
	myJSON = JSON.stringify(myObj)
	localStorage.setItem("testJSON", myJSON);
	window.location.replace("index.html");

});


function f() {
	var text = localStorage.getItem("testJSON");
	var obj = JSON.parse(text);
	alert(obj.nickname);
	alert(obj.sex);
	alert(obj.data);
	alert(obj.email);
	alert(obj.pass);
	alert(obj.conferma);
}

function logout() {
	myObj = null;
	myJSON = JSON.stringify(myObj)
	localStorage.setItem("testJSON", myJSON);
	window.location.replace("index.html");
}

