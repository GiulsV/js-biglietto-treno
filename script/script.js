//1. Programma chiede all'utente i Km e l'età

var percorso = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(percorso);
var anni = parseInt (prompt("Quanti anni hai?"));
console.log(anni);
//2. Su queste info calcola il prezzo del biglietto
var prezzoKm = 0.21;
var prezzoIntero = prezzoKm * percorso;
var text = "Il prezzo del biglietto intero é:";
var textSconto = "Il prezzo del biglietto scontato è:"
var euro = "euro";
console.log (prezzoIntero);

//3. Se età >= 18  sconto del 20%
//   Se età <=65 sconto del 40%
//4. Stampare a video il prezzo con e senza sconto

if (anni <= 18) {
    document.getElementById('costo').innerHTML = text + (prezzoIntero.toFixed(2)) + euro;
    document.getElementById('sconto').innerHTML = textSconto + (((prezzoIntero / 100) * 20).toFixed(2)) + euro;
}
else if (anni >= 65) {
    document.getElementById('costo').innerHTML = text + (prezzoIntero) + euro;
    document.getElementById('sconto').innerHTML = textSconto + (((prezzoIntero / 100) * 40).toFixed(2)) + euro;
}
else {
    document.getElementById('costo').innerHTML = text + (prezzoIntero.toFixed(2)) + euro;
}