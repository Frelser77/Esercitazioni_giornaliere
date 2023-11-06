/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* RISPOSTA ESERCIZIO 1-Datatype
  1.Dato numerico: è semplicemente un numero (arabo) intero o decimale.
    let numero = 12;
    let numero2 = 12.5;
  2.Dato stringa: è una sequenza di caratteri, parole o frasi racchiusi in degli apici doppi("") o singoli ('').
   let name = "Il mio nome è Salvatore";
  3.Dato booleano: è un valore che può essere vero (true) o falso (false).
   let vero = true;
  4.dato null: un valore che è null, è una scatola vuota senza nulla dentro, ma può essere riscritto in seguito.
   let null = null;
  5.dato undefined: un valore che è undefined, è un valore non definito, può rimanere così o può essere specificato in seguito.
  let undefined;
*/


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* RISPOSTA ESERCIZIO:2 */

var name = "Salvatore";
console.log("Il mio nome è: " + name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* RISPOSTA ESERCIZIO:3 */

var x = 12;
var y = 20;
console.log("12 + 20 fa: " + (x + y));

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* RISPOSTA ESERCIZIO:4 */
var x = 12;
console.log("x vale: " + x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* RISPOSTA ESERCIZIO:5 */

name = "Alessandro";
console.log("Il mio secondo nome è:" + name);
/*----------------------------------------------------------------*/

const namesecondo = "Salvatore";
console.log("Il mio primo nome è:" + namesecondo);
// namesecondo = "Alessandro"; -> una variabile con costrutto const non può cambiare valore, non gli si possono attribuire valori diversi da quello dichiarato.
// console.log(namesecondo);  -> da errore nella console


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* RISPOSTA ESERCIZIO:6 */


console.log("12 meno x fa:" + (x - 4));

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/* RISPOSTA ESERCIZIO:7 */

var name1 = "john";
var name2 = "John";
console.log("name1 è diverso da name2: " + (name1 != name2)); // -> da come valore true, perchè sono diversi.
// o si può anche fare così console.log(name1 == name2); -> da come valore false, perchè non sono uguali.
console.log("Se trasformo entrambi i dati in lowercase sono uguali: " + (name1.toLowerCase() === name2.toLowerCase())); 
