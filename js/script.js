'use strict'
/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta,
i numeri che ha visto precedentemente, tramite una casella di input e un bottone
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri 
da indovinare sono stati individuati.
*/

/*
variabile numeri random
math random x numeri random while, metto in array 'random' e print in pagina

timeout 30 sec

dopo 30 sec ----> 
    tolgo i numeri in pagina
    parserInt(input) + btn per prendere un numero per volta x numeri random (for) poi disable
    aggiungere in array 'scelti'
corretti=[];
per ogni elemento in scelti, controlla che elemento sia presente in random
    for (let i=0; i<scelti.length; i++){
        if (random.includes(scelti[i])){
            se presente pusha in array di numeri 'corretti'
            corretti.push(scelti[i]);
        }        
    }


*/
const div = document.getElementById('frsel');
const howMany = 5;
const randomNumbers = document.createElement('p');
randomNumbers.classList.add('text-center', 'my-5');
const random = [];
const chosen = [];
//crea una lista di numeri random tutti diversi tra loro
while (random.length < howMany){
    const n = randomNumber(1,100);
    if (!(random.includes(n))){
        random.push(n);
    }
}
randomNumbers.innerHTML = `Hai solo 5 secondi per memorizzare questi numeri: <br> ${random}`;
div.appendChild(randomNumbers);

const input = document.getElementById('choose');
const button = document.querySelector('button');
const label = document.querySelector('label');
const text = document.createElement('p');
div.append(text);

const chosenNum = function (){
    //al click prendi il valore in input e salvalo in una lista di 'scelti'
    const inputValue = parseInt(input.value);
    chosen.push(inputValue);
    input.value = '';
    
    const correctAnsw = [];
    // controlla che tra i scelti ci siano valori presenti in 'random'
    for (let i = 0; i < chosen.length; i++){
        if (random.includes(chosen[i]) && !(correctAnsw.includes(chosen[i]))){
            // se presente pusha in array di numeri 'corretti'
            correctAnsw.push(chosen[i]);
            
        }
    }
    // se la lunghezza della lista dei numeri scelti è uguale alla lunghezza dei numeri random disabilita l'input
    if (chosen.length ==  random.length){
        input.setAttribute('disabled', '');
        button.setAttribute('disabled', '');
        label.className = 'd-none';

        // stampa in pagina   'hai indovinato ${corretti.length} numeri e quelli giusti sono ${corretti}'
        if (correctAnsw.length == 0){
            text.innerHTML = `Mi spiace non hai una buona memoria`;
        } else {
            text.innerHTML = `Hai terminato i tentativi, hai indovinato ${correctAnsw.length} numeri, ovvero: ${correctAnsw}`;
        }

    }

    
}

const hideNinput = function (){
    // fai apparire l'input dopo i 5 sec
    randomNumbers.innerHTML = '';
    input.className = 'd-inline-block my-3 rounded-2 p-3'
    button.className = 'd-inline-block my-3 rounded-pill'
    label.className = 'd-block';
}
// timer 5 sec dal loading della page
setTimeout(hideNinput, 5000); 


button.addEventListener('click', chosenNum);


