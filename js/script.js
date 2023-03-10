const boxKm = document.querySelector('input[name="km"]');
const boxAnni = document.querySelector('input[name="età"]');
const button = document.querySelector('button');
const calcolo = document.querySelector('.calcola');
const cancella = document.querySelector('.reset');
const biglietto = document.getElementById('biglietto');
const acquista = document.querySelector('.box-compra');
const compra = document.querySelector('.compra');
const contenitore = document.querySelector('.content');
console.log(acquista);
console.log(boxKm);
console.log(boxAnni);
console.log(button);
console.log(biglietto);

compra.addEventListener('click', function() {
    acquista.classList.add('d-none');
    contenitore.classList.remove('d-none');
})

calcolo.addEventListener('click', function() {
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
            biglietto.classList.remove('text-danger');
            biglietto.classList.add('text-primary');
            biglietto.innerHTML = `<h1>Costo biglietto:</h1> <h2>${scontoMinorenni.toFixed(2) + '€'}</h2>`
        } else if(anni > 65) {
            biglietto.classList.remove('text-danger');
            biglietto.classList.add('text-primary');
            biglietto.innerHTML = `<h1>Costo biglietto:</h1> <h2>${scontoOver65.toFixed(2) + '€'}</h2>`
        } else {
            biglietto.classList.remove('text-danger');
            biglietto.classList.add('text-primary');
            biglietto.innerHTML = `<h1>Costo biglietto:</h1> <h2>${prezzoBiglietto.toFixed(2) + '€'}</h2>`
        }
    } else {
        biglietto.classList.add('text-danger');
        biglietto.innerHTML = `<h2>Devi inserire dei valori</h2>`
    }
});

cancella.addEventListener('click', function() {
    boxKm.value = '';
    boxAnni.value = '';
    biglietto.innerHTML = '';
});