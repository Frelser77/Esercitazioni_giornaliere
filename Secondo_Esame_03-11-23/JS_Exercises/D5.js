/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
for (let i = 0; i < pets.length; i++) {
  console.log("Questa è " + pets[i]);
}


/*--------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log("Ordine alfabetico: " + pets);


/*--------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();
console.log("Questo è l'ordine reverse: " + pets);


/*--------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const firstElement = pets.shift();
pets.push(firstElement);
console.log(pets);


/*--------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars.forEach(car => {
  car.licensePlate = "AA001AA";
});
console.log(cars);


/*--------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
  brand: "Fiat",
  model: "Panda",
  color: "green",
  trims: ["life", "style", "city"],
});

cars.forEach(car => {
  car.trims.pop();
});
console.log(cars);


/*--------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

cars.forEach(car => {
  justTrims.push(car.trims[0])
});
console.log(justTrims);


/*--------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/ // ciclo array con for -> if // taglia da (1, 1)


for (let i = 0; i < cars.length; i++) {
  const colorFirstChar = cars[i].color.slice(1);
  if (cars[i].color.startsWith('b')) {
    console.log('Inizia con b -> ' + 'Fizz');
  } else {
    console.log('Non inizia con b -> ' + 'Buzz');
  }
}


/*--------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/ // scrivo tutti i valori finchè non trovo 32 quindi 32 escluso
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,]


// 32 escluso
let i = 0;
while (i < numericArray.length && numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}


// 32 incluso
// while (i < numericArray.length) {
//   console.log(numericArray[i]);
//   if (numericArray[i] === 32) {
//     break;
//   }
//   i++;
// }


/*--------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

const posizioniArray = [];

charactersArray.forEach(carattere => {
  switch (carattere) {
    case 'a':
      posizioniArray.push('corrisponde al numero: ' + 1);
      break;
    case 'b':
      posizioniArray.push('corrisponde al numero: ' + 2);
      break;
    case 'c':
      posizioniArray.push('corrisponde al numero: ' + 3);
      break;
    case 'd':
      posizioniArray.push('corrisponde al numero: ' + 4);
      break;
    case 'e':
      posizioniArray.push('corrisponde al numero: ' + 5);
      break;
    case 'f':
      posizioniArray.push('corrisponde al numero: ' + 6);
      break;
    case 'g':
      posizioniArray.push('corrisponde al numero: ' + 7);
      break;
    case 'h':
      posizioniArray.push('corrisponde al numero: ' + 8);
      break;
    case 'i':
      posizioniArray.push('corrisponde al numero: ' + 9);
      break;
    case 'l':
      posizioniArray.push('corrisponde al numero: ' + 10);
      break;
    case 'm':
      posizioniArray.push('corrisponde al numero: ' + 11);
      break;
    case 'n':
      posizioniArray.push('corrisponde al numero: ' + 12);
      break;
    case 'o':
      posizioniArray.push('corrisponde al numero: ' + 13);
      break;
    case 'p':
      posizioniArray.push('corrisponde al numero: ' + 14);
      break;
    case 'q':
      posizioniArray.push('corrisponde al numero: ' + 15);
      break;
    case 'r':
      posizioniArray.push('corrisponde al numero: ' + 16);
      break;
    case 's':
      posizioniArray.push('corrisponde al numero: ' + 17);
      break;
    case 't':
      posizioniArray.push('corrisponde al numero: ' + 18);
      break;
    case 'u':
      posizioniArray.push('corrisponde al numero: ' + 19);
      break;
    case 'v':
      posizioniArray.push('corrisponde al numero: ' + 20);
      break;
    case 'z':
      posizioniArray.push('corrisponde al numero: ' + 21);
      break;
  }
});
console.log(posizioniArray);


/*--------------------------------------------------------------------------------------------------------------------------------------------------------*/
