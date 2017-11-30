function setCookie(){
	if(window.document.cookieForm.persist.checked ){
		var expDate = new Date();
		expDate.setFullYear(expDate.getFullYear()+1);
		var who = window.document.cookieForm.username.value;
		document.cookie="username"+ who+";"+"expires="+expDate.toGMTString();
	}
	else{
		deleteCookie();
	}
	return true;
}
function readCookie(){
	if(document.cookie){
		var theCookie = document.cookie;
		var pos= theCookie.indexOf("username");
		if( post!=-1){
			var cookie_array = theCookie.split("=");
			var value  = cookie_array[1];
			window.document.cookieForm.username.value = value;
			window.document.cookieForm.persist.checked= true;
		}
	}
}
function deleteCookie(){
	if(document.cookie){
		var expDate = new Date();
		expDate.setFullYear(expDate.getFullYear()-1);
		document.cookie="username="+"" + ";" + "expires=" + expDate.toGMTString();
	}
}