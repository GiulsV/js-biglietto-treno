//1. Programma chiede all'utente i Km e l'età

const percorso = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log("Km: " + percorso);
const anni = parseInt (prompt("Quanti anni hai?"));
console.log("Età: " + anni);
//2. Su queste info calcola il prezzo del biglietto
const prezzoKm = 0.21;
const prezzoIntero = prezzoKm * percorso;
const text = "Il prezzo del biglietto intero é: ";
const textSconto = "Il prezzo del biglietto scontato è: "
const euro = " euro";

//3. Se età >= 18  sconto del 20%
//   Se età <=65 sconto del 40%
//4. Stampare a video il prezzo con e senza sconto

if (anni <= 18) {
    document.getElementById('costo').innerHTML = text + (prezzoIntero.toFixed(2)) + euro;
    console.log (text + prezzoIntero + euro);
    document.getElementById('sconto').innerHTML = textSconto + (((prezzoIntero / 100) * 80).toFixed(2)) + euro;
    console.log (textSconto + ((prezzoIntero / 100) * 80).toFixed(2) + euro);
}
else if (anni >= 65) {
    document.getElementById('costo').innerHTML = text + (prezzoIntero) + euro;
    console.log (text + prezzoIntero);
    document.getElementById('sconto').innerHTML = textSconto + (((prezzoIntero / 100) * 60).toFixed(2)) + euro;
    console.log (textSconto + ((prezzoIntero / 100) * 60).toFixed(2) + euro);
}
else {
    document.getElementById('costo').innerHTML = text + (prezzoIntero.toFixed(2)) + euro;
    console.log (text + prezzoIntero + euro);
}