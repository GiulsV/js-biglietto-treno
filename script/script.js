//1. Programma chiede all'utente i Km e l'età

const percorso = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log("Km: " + percorso);
const anni = parseInt (prompt("Quanti anni hai?"));
console.log("Età: " + anni);
//2. Su queste info calcola il prezzo del biglietto
const prezzoKm = 0.21;
const prezzoIntero = prezzoKm * percorso;

    //Testo da stampare a vieo
    const text = "Il prezzo del biglietto intero é: ";
    const textSconto = "Il prezzo del biglietto scontato è: "
    const euro = " euro";

//3. Se età <= 18 sconto del 20%
//   Se età >= 65 sconto del 40%
//4. Stampare a video il prezzo con e senza sconto

document.getElementById('costo').innerHTML = text + (prezzoIntero.toFixed(2)) + euro;
console.log (text + prezzoIntero + euro);


if (anni < 18) {

    document.getElementById('sconto').innerHTML = textSconto + (((prezzoIntero * 80 ) / 100).toFixed(2)) + euro;
    console.log (textSconto + ((prezzoIntero * 80 ) / 100).toFixed(2) + euro);
}
else if (anni >= 65) {

    document.getElementById('sconto').innerHTML = textSconto + (((prezzoIntero * 60) / 100).toFixed(2)) + euro;
    console.log (textSconto + ((prezzoIntero * 60) / 100).toFixed(2) + euro);
}
