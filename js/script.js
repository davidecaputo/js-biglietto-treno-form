const boxKm = document.querySelector('input[name="km"]');
const boxAnni = document.querySelector('input[name="età"]');
const button = document.querySelector('button');
const biglietto = document.getElementById('biglietto');
console.log(boxKm);
console.log(boxAnni);
console.log(button);
console.log(biglietto);

button.addEventListener('click', function () {
    let km = boxKm.value;
    let anni = boxAnni.value;
    let prezzoBiglietto = km * 0.21;
    let scontoMinorenni = prezzoBiglietto - (prezzoBiglietto * 0.20);
    let scontoOver65 = prezzoBiglietto - (prezzoBiglietto * 0.40);
    console.log(km);
    console.log(anni);
    console.log(prezzoBiglietto);

    if(km && anni){
        if(anni <= 18){
            biglietto.innerHTML = `<h2>${scontoMinorenni.toFixed(2) + '€'}</h2>`
        } else if(anni > 65) {
            biglietto.innerHTML = `<h2>${scontoOver65.toFixed(2) + '€'}</h2>`
        } else {
            biglietto.innerHTML = `<h2>${prezzoBiglietto.toFixed(2) + '€'}</h2>`
        }
    } else {
        biglietto.innerHTML = `<h2>Devi inserire dei valori</h2>`
    }
});