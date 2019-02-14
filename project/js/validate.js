function validateForm()
{
	 var form = document.forms["FormRegistrazione"];
	    if (!validateNickName(form.nickname))
	        return false;
		if(!validateEta(form.eta))
            return false;
        if (!validateEmail(form.Email))
	        return false;   
		if (!validatePassword(form.password))
	        return false;
		if (!validateConfermaPassword(form.ConfermaPassword , form.password))
	        return false;
		
	}
function validateNickName(nickname){
	var Regexp = /^[a-zA-Z0-9]+$/;
	if(nickname.value.match(Regexp))
		return true;
	else{
		alert('Il campo Nome deve contenere solo lettere e numeri!');
		nickname.focus();
		return false;
	}
}
function validateEmail(Email){
    var Regexp = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w+)+$/;
	if(Email.value.match(Regexp))
		return true;
	else{
		alert('Il campo Email deve contenere solo lettere, trattini e spazi!');
		Email.focus();
		return false;
	}
}
function validatePassword(password){
	var Regexp =  /^[a-zA-Z0-9]+$/;
	if(password.value.match(Regexp))
		return true;
	else{
		alert('Il campo Password deve contenere solo lettere e numeri!');
		password.focus();
		return false;
	}
}
function validateConfermaPassword(ConfermaPassword , password){
	
	if(ConfermaPassword.value == password.value)
		return true;
	else{
		alert('La password non corrisponde!');
		ConfermaPassword.focus();
		return false;
	}
}
function validateEta(eta){

	if(eta.value>=11)
		return true;
	else{
		alert('Devi avere più di 11 anni!');
		eta.focus();
		return false;
	}
}
