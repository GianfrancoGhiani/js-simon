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

stampa in pagina
'hai indovinato ${corretti.length} numeri e quelli giusti sono ${corretti}'
*/
const div = document.getElementById('frsel');
const howMany = 5;