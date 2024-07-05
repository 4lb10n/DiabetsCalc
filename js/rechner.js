document.getElementById("berechnen").addEventListener("click", function(){
    kohlenhydratImLebensmittel();
})
function kohlenhydratImLebensmittel() {
    let kohlenhydrate = document.getElementById('kohlenhydrate').value;
    let floatKohlenhyrate = parseFloat(kohlenhydrate);
    let zucker = document.getElementById('zucker').value;
    let floatZucker = parseFloat(zucker);
 
    const Ergebnis = (floatKohlenhyrate * 1.9 + floatZucker).toFixed(2);
if (Ergebnis >= 4){
 
	document.getElementById('result1').innerText = 'Das Ergebnis ist: Gut' + Ergebnis;
	return Ergebnis;
}  else if(Ergebnis ==3){
    document.getElementById('result2').innerText = 'Das Ergebnis ist: MIttel' + Ergebnis;
    return Ergebnis;
}
	else {
	document.getElementById('result3').innerText = 'Das Ergebnis ist: Schlecht' + Ergebnis;
    return Ergebnis;
}
}
