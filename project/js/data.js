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

var denied
var myJSON3

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
		$('#' + i + '').append('<span class="glyphicon glyphicon-remove" onclick="on3()"></span><div class="titleStory3"><h3>' + utente.nickname+" "+utente.eta+" anni" + '</h3></div>');
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
	var text2 = localStorage.getItem("controllo");
	var obj2 = JSON.parse(text2);
	if (obj2 == null) {
		//Devi effettuare il Log-in per inserire una storia
		document.getElementById("overlay4").style.display = "block";
	}
	if (obj2.connesso == 1){
		window.location.replace("aggiungiStorie.html");
	}
	if (obj2.connesso == 0) {
		//Devi effettuare il Log-in per inserire una storia
		document.getElementById("overlay4").style.display = "block";
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
	if(obj==null){
		//messaggio login NON riuscito
		document.getElementById("overlay").style.display = "block";
		return;
	}
	
	emForm = document.getElementById("email").value;
	psForm = document.getElementById("password").value;
	myUser = { email: emForm, password: psForm };
	myJSON2 = JSON.stringify(myUser)
	localStorage.setItem("UtenteJSON", myJSON2);
	if ((emForm != obj.email) || (psForm != obj.pass)){
		//messaggio login NON riuscito
		document.getElementById("overlay").style.display = "block";
		return;
}
	if ((emForm == obj.email) && (psForm == obj.pass)) {
		denied = {connesso:1};
		myJSON3 = JSON.stringify(denied);
		localStorage.setItem("controllo", myJSON3);
		document.getElementById("accedi").style.display = "none";
		document.getElementById("registrati").style.display = "none";
		document.getElementById("pannellino").style.display = "none";
		document.getElementById("login-btn1").style.display = "inline-block";
		document.getElementById("login-btn2").style.display = "inline-block";
		document.getElementById("login-btn3").style.display = "inline-block";
		document.getElementById("utente").innerHTML = obj.nickname;
		document.getElementById("overlay2").style.display = "block";
	}
}

function loadPage() {
	var text2 = localStorage.getItem("controllo");
	var obj2 = JSON.parse(text2);
	
	if (obj2.connesso == 1){
		var text = localStorage.getItem("testJSON");
		var obj = JSON.parse(text);	
		document.getElementById("accedi").style.display = "none";
		document.getElementById("registrati").style.display = "none";
		document.getElementById("pannellino").style.display = "none";
		document.getElementById("login-btn1").style.display = "inline-block";
		document.getElementById("login-btn2").style.display = "inline-block";
		document.getElementById("login-btn3").style.display = "inline-block";
		document.getElementById("utente").innerHTML = obj.nickname;
	}
	else{
	document.getElementById("accedi").style.display = "inline-block";
	document.getElementById("registrati").style.display = "inline-block";
	document.getElementById("pannellino").style.display = "none";
	document.getElementById("login-btn1").style.display = "none";
	document.getElementById("login-btn2").style.display = "none";
	document.getElementById("login-btn3").style.display = "none";
	}
}

function on() {
	document.getElementById("overlay").style.display = "block";
}

function on3() {
	document.getElementById("overlay3").style.display = "block";
}
function on5() {
	document.getElementById("overlay5").style.display = "block";
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
function off4() {
	document.getElementById("overlay4").style.display = "none";
}
function off5() {
	document.getElementById("overlay5").style.display = "none";
}


$(".l").click(function () {
	$("#pannellino").toggle();
});

$("#Reg").click(function () {
	if (validateForm() != false){
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

	denied = {connesso:1};
	myJSON3 = JSON.stringify(denied);
	localStorage.setItem("controllo", myJSON3);
	document.getElementById("overlay2").style.display = "block";
	}
});

function logout() {
	denied = {connesso:0};
	 myJSON3 = JSON.stringify(denied);
	 localStorage.setItem("controllo", myJSON3);

	document.getElementById("accedi").style.display = "inline-block";
	document.getElementById("registrati").style.display = "none";
	document.getElementById("pannellino").style.display = "block";
	document.getElementById("login-btn1").style.display = "none";
	document.getElementById("login-btn2").style.display = "none";
	document.getElementById("login-btn3").style.display = "none";
	window.location.replace("index.html");
}

