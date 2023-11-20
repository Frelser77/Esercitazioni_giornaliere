// 1. una funzione che genera una tabella principale
// 2. funzione che scrive i numeri (array.push)
// 3. funzione che associata al bottone genera numeri random
// 4. funzione che evidenzia i numeri estratti (aggiungi una classe)
// 5. EXTRA funzione che genera tabelline da 24
// funzioni vanno dichiarate e invocate

const tabellone = document.getElementById('tabellone')
const numeriEstratti = new Set();
// console.log(numeriEstratti)

// Creo le 90 celle del tabellone
for (let i = 1; i <= 90; i++) {
    const cella = document.createElement('div');
    cella.textContent = i;
    cella.classList.add('cella');
    cella.id = 'numero-' + i; // 
    tabellone.appendChild(cella);
}


// creazione di numeri random 1-90 e assegnato all'evento click del bottone 'estrainumero'
const gameButton = document.getElementById('estrainumero').addEventListener('click', function () {

    if (numeriEstratti.size >= 90) {
        alert('Tutti i numeri sono stati già estratti!');
        return;
    }

    let numeroEstratto;

    do {
        numeroEstratto = Math.floor(Math.random() * 90) + 1;
    } while (numeriEstratti.has(numeroEstratto));
    numeriEstratti.add(numeroEstratto);
    const cellaEstratta = document.getElementById('numero-' + numeroEstratto);
    cellaEstratta.classList.add('evidenziato');
});
console.log(gameButton);



/*
¯\_(ツ)_ /¯¯\_(ツ)_ /¯¯\_(ツ)_ /¯¯\_(ツ)_ /¯¯\_(ツ)_ /¯¯\_(ツ)_ /¯¯\_(ツ)_ /¯
*/

/*-------------------------- DA RIVEDERE --------------------------*/
const textNumeroEstratto = document.getElementById('numeroestratto');
if (textNumeroEstratto) {
    textNumeroEstratto.innerHTML = Array.from(numeriEstratti).join('<br>');
    console.log(textNumeroEstratto)
}
/*-------------------------- DA RIVEDERE --------------------------*/

for (let i = 0; i < 24; i++) {
    const cellaPlayers = document.createElement('div');
    cellaPlayers.textContent = i;
    cellaPlayers.classList.add('cella');
    cellaPlayers.id = 'numero-' + i;
    gameButton.appendChild(cellaPlayers);
}

const generaCartelleBtn = document.getElementById('creacartelle');
const cartelleContainer = document.getElementById('tabellePlayers');
