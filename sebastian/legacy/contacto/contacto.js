function isEmpty(s){
	return ((s == null) || (s.length == 0) || (Trim(s) == ""));
}

var whitespace = " \t\n\r";
function isWhitespace(s){
	var i;
	if (isEmpty(s)) return true;
	for (i = 0; i < s.length; i++){
		var c = s.charAt(i);
		if (whitespace.indexOf(c) == -1)
			return false;
	}
	return true;
}

function LTrim(str){	
	while(str.length > 0 && str.charAt(0) == " "){
		str = str.substr(1,str.length)
	}

	return str
}

function RTrim(str){
	while(str.length > 0 && str.charAt(str.length-1) == " "){
		str = str.substr(0,str.length-1);
	}
	
	return str
}

function Trim(theStr){
	theStr = RTrim(theStr);
	theStr = LTrim(theStr);
	
	return theStr 
}

function isEmail(s){
	if (isEmpty(s)) 
		if (isEmail.arguments.length == 1) return true;
		else return (isEmail.arguments[1] == true);
	if (isWhitespace(s)) return false;
	
	var i = 1;
	var sLength = s.length;
	while ((i < sLength) && (s.charAt(i) != "@")){
		i++
	}
	
	if ((i >= sLength) || (s.charAt(i) != "@")) return false;
	else i += 2;
	
	while ((i < sLength) && (s.charAt(i) != ".")){
		i++
	}
	
	if ((i >= sLength - 1) || (s.charAt(i) != "."))	return false;
	else return true;
}


function validarCampos(theForm){
	var nombre,email,message
	
	if (typeof(theForm.nombre) == "undefined" || typeof(theForm.from) == "undefined"){
		alert("Error, recuerda ingresar los campos para validacion");
		return false;
	}
	
	nombre = theForm.nombre.value = Trim(theForm.nombre.value);
	email = theForm.from.value = Trim(theForm.from.value);
	message = theForm.message.value = Trim(theForm.message.value);
	
	if (nombre == null || nombre == ''){
		alert("Por Favor, ingresa tu Nombre");
		theForm.nombre.focus();
		return false;
	}

	if (email == null || email == ''){
		alert("Por Favor, ingresa tu e-mail");
		theForm.from.focus();
		return false;
	}

	if (!isEmail(email)){
		alert("El email íngresado no es válido, por favor ingrésalo en el formato casilla@dominio.cl");
		theForm.from.focus();
		return false;
	}
	
	if (message == null || message == ''){
		alert("Por Favor, ingresa tu Mensaje");
		theForm.message.focus();
		return false;
	}
	

	return true;
}