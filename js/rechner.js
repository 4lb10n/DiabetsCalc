var gramm = document.getElementById('gramm').value;
var kohlenhydrate = document.getElementById('kohlenhydrate').value;
var grammidv = document.getElementById('grammidv').value;
var zucker = document.getElementById('zucker').value;

document.getElementById("berechnen").addEventListener("click", function(){
kohlenhydratInverpackung();
})
function kohlenhydratInverpackung() {
    const ergebnis =  gramm / kohlenhydrate;
if (ergebnis >= 4){
 
	document.getElementById('result1').innerText = 'Das Ergebnis ist: Gut' + ergebnis;
	return ergebnis;
}  else if(ergebnis==3){
    document.getElementById('result2').innerText = 'Das Ergebnis ist: MIttel' + ergebnis;
    return ergebnis;
}
	else {
	document.getElementById('result3').innerText = 'Das Ergebnis ist: Schlecht' + ergebnis;
    return ergebnis;
}
}
