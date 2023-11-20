/* ESERCIZIO 1
Scrivi un algoritmo per trovare il più grande tra due numeri interi.
 // due variabili da conrontare (i else)
*/

/* RISPOSTA ESERCIZIO 1 */

let num1 = 10;
let num2 = 20;

if (num1 > num2) {
  console.log("Il primo numero è maggiore");
} else if (num1 < num2) {
  console.log("Il secondo numero è maggiore");
} else {
  console.log("I due numeri sono uguali");
}

/*---------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* RISPOSTA ESERCIZIO 2 */

let num3 = 7; {
  if (num3 !== 5);
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca) divisibile --> %
*/

/*---------------------------------------------------------------------------------------------------------------------------------------------*/

/* RISPOSTA ESERCIZIO 3 */

let numx = 100;
if (numx % 5 === 0) {
  console.log("è divisibile per 5");
}

/*---------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
  serie di condizioni if --> la verifica ===
*/

/* RISPOSTA ESERCIZIO 4 */

let numY = 10;
let numU = 2;

if (numY === 8 || numU === 8) {
  console.log("Uno dei numeri è uguale a 8");
}

if (numY + numU === 8) {
  console.log("La somma dei numeri è uguale a 8");
}

if ((numY - numU) === 8) {
  console.log("La differenza tra i numeri è uguale a 8");
}

/* if (numY === 8 || numU === 8 || numY + numU === 8 || numY - numU === 8 || numU - numY === 8)
  console.log("Verificato");    !!!!!!MODO PER SCRIVERE MENO CODICE!!!!!!
*/
/*---------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout. // dichiarerò tre variabili, il totale della spesae pagamento === totale   if --> se un valore è inferiore una soglia aggiungo le spese
*/

/* RISPOSTA ESERCIZIO 5 */

let totCarrello = 55;
// let spedizioneGratuita = "hai diritto alla spedizione gratuita,";
let totPay = totCarrello;
let shippingCost = 10;



if (totCarrello < 50) {
  totPay += shippingCost;
}
console.log("Totale da pagare: " + totPay);
// if (totCarrello > 50) {
//   console.log("Totale da pagare: " + (spedizioneGratuita + " pagherai: " + totCarrello + "€"));
// } else if (totCarrello <= 50) {
//   console.log("Totale da pagare: " + (costoSpedizione + totCarrello + "€"));
// }

/*---------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
  // simile a quello di sopra (sconto *0.8)
*/

/*---------------------------------------------------------------------------------------------------------------------------------------------*/

/* RISPOSTA ESERCIZIO 6 */

let totCarrello1 = 55;
let spedizioneGratuita1 = "hai diritto alla spedizione gratuita";
let costoSpedizione1 = 10;
let scontoBF = totCarrello * 0.8;

if (totCarrello1 > 50) {
  console.log("Totale da pagare: " + (spedizioneGratuita1 + " e allo sconto del 20%" + " pagherai: " + scontoBF + "€"));
} else if (totCarrello1 <= 50) {
  console.log("Totale da pagare: " + (costoSpedizione1 + totCarrello1 + "€"));
}

/*---------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
  // if annidati  --> controllo tutte le varie condizioni e con la console stampo la condizione (quando true)
*/

/* RISPOSTA ESERCIZIO 7 */
let a = 10;
let b = 20;
let c = 30;

let max, mid, min;

if (a > b && a > c) {
  max = a;
  if (b > c) {
    mid = b;
    min = c;
  }
  if (c > b) {
    mid = c;
    min = b;
  }
}

if (b > a && b > c) {
  max = b;
  if (a > c) {
    mid = a;
    min = c;
  }
  if (c > a) {
    mid = c;
    min = a;
  }
}

if (c > a && c > b) {
  max = c;
  if (a > b) {
    mid = a;
    min = b;
  }
  if (b > a) {
    mid = b;
    min = a;
  }
}

console.log("L'ordine dei numeri dal più alto al più basso è: " + max + ", " + mid + ", " + min);

/*---------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
  // typeof --> if else
*/

/* RISPOSTA ESERCIZIO 8 */

let numero = 7;
if (typeof numero === 'number') {
  console.log("Il valore è un numero");
} else {
  console.log("Il valore non è un numero");
}

/*---------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  //modulo di 2 (%2) --> if else
*/

/* RISPOSTA ESERCIZIO 9 */

let x = 10;

if (x % 2 == 0) {
  messaggio = x + " è pari";
} else if (x % 2 == 1) {
  messaggio = x + " è dispari";
}
console.log(messaggio);

/*---------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* RISPOSTA ESERCIZIO 10 */

let val = 7
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/*---------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
  // siamo dentro a un oggetto  --> aggiungo qualcosa (una proprietà) all'oggetto
*/

/* RISPOSTA ESERCIZIO 11 */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto';
console.log(me);

/*---------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  // posso cancellare da un oggetto
*/

/* RISPOSTA ESERCIZIO 12 */

delete me.lastName;
console.log(me);

/*---------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  // metodi array --> che mi fa rimuovere l'ultimo elemento
*/

/* RISPOSTA ESERCIZIO 13 */

let rimosso = me.skills.pop();
console.log(me);
console.log(rimosso);

/*---------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  // creo array e lo popolo (riempio) dopo
*/

/* RISPOSTA ESERCIZIO 14 */

let myArray = [];

myArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(myArray);

/*---------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  // metodi array --> sostituio il nono (nono = [10]) elemento
*/

/* RISPOSTA ESERCIZIO 15 */

// myArray[myArray.length - 1] = 100;
// console.log(myArray);

myArray[9] = 100;
console.log(myArray);

/*---------------------------------------------------------------------------------------------------------------------------------------------*/