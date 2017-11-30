function swap(file){document.globe.src=file;}
function chooseFile(){
	var fileReader = new FileReader();
	fileReader.readAsDataURL(document.getElementById("choosefile").files[0]);
	fileReader.onload= function(fileReader){
		document.getElementById("imageupdate").src=fileReader.target.result;
	};
};
function f1(){
	 var x = document.myForm.fname.value;
	    if (x == "") {
	        alert("Name must be filled out");
	        return false;
	    }
}
function checkPhone(){
	var phNum= document.myForm.area.value+document.myForm.pre.value+document.myForm.last.value;
	alert(phNum.length);
	for(i=0;i<phNum.length;i++){
		if(phNum.charAt(i)<"0"||phNum.charAt(i)>"9"){
			alert("plese enter number!");
			return false;
		}
	}
	if(phNum.length < 10){
		alert("please enter 10 digit for phone number!");
		return false;
	}
	return true;
}