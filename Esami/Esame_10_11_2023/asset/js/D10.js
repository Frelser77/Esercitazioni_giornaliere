/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/


console.log('Primo(A) Esercizio');

let sum = 10 + 20;
console.log('La somma è: ' + sum);


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/


console.log('Secondo(B) Esercizio');


let random = Math.floor(Math.random() * 21);
console.log('Il numero random tra 1 e 20 è: ' + random);


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/


console.log('Terzo(C) Esercizio');


let me = { name: 'Salvatore', surname: "D'Amico", age: '27' }
console.log(me);



/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/


console.log('Quarto(D) Esercizio');


delete me.age;
console.log(me);


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/


console.log('Quinto(E) Esercizio');



me.skils = ['Javascript'];
console.log(me);




/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/


console.log('Sesto(F) Esercizio');


me.skils.push('Css');
console.log(me);


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/


console.log('Settimo(G) Esercizio');


me.skils.splice(-1, 1);
console.log(me);


// Funzioni
console.log('!!!!!!!!!!!FUNZIONI!!!!!!!!!!!')

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/


console.log('Funzioni Primo(1) Esercizio');


let dice = function () {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}
console.log(dice());

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/


console.log('Funzioni Secondo(2) Esercizio');


function whoIsBigger(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
console.log(whoIsBigger(7, 77));


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/


console.log('Funzioni Terzo(3) Esercizio');


function splitMe(str) {
  return str.split(' ');
}
console.log(splitMe('I Love Coding'));


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/


console.log('Funzioni Quarto(4) Esercizio');


function deleteOne(str, remove) {
  if (remove) {
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
}

console.log(deleteOne('Hello', true));
console.log(deleteOne('Hello', false));


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/


console.log('Funzioni Quinto(5) Esercizio');



function onlyLetters(str) {
  return str.replace(/[0-9]/, '');
}

console.log(onlyLetters('I have 4 dogs'));


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/


console.log('Funzioni Sesto(6) Esercizio');


function isThisAnEmail(email) {
  let input = document.createElement('input');
  input.type = 'email';
  input.value = email;
  return input.checkValidity();
}

console.log('Email giusta:');
console.log(isThisAnEmail('salvofre77@gmail.com'));
console.log('Email sbagliata:');
console.log(isThisAnEmail('salvofre77@.com'));


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/


console.log('Funzioni Settimo(7) Esercizio');


function whatDayIsIt() {
  let currentDay = new Date();
  const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  return days[currentDay.getDay()];
}
console.log('Oggi è: ' + whatDayIsIt());


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().
 
  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/


console.log('Funzioni Ottavo(8) Esercizio');


function rollTheDices(numRolls) {
  let sum = 0;
  let values = [];
  for (let i = 0; i < numRolls; i++) {
    let roll = dice();
    values.push(roll);
    sum += roll;
  }
  return {
    sum: sum,
    values: values
  };
}

console.log(rollTheDices(3));


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/


console.log('Funzioni Nono(9) Esercizio');

const lastDate = new Date('1996-02-07');

function howManyDays() {
  let currentDay = new Date();
  let lastday = currentDay - lastDate;
  return lastday;
}

console.log('La differenza però è in millisecondi: ' + howManyDays());


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file


console.log('Funzioni Decimo(10) Esercizio');

function isTodayMyBirthday() {
  const today = new Date();
  const myBirthdayMonth = 2;
  const myBirthdayDay = 7;

  return today.getMonth() + 1 === myBirthdayMonth && today.getDate() === myBirthdayDay;
}

console.log("E' il mio compleanno: " + isTodayMyBirthday());


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/


console.log('Funzioni Undicesimo(11) Esercizio');

function deleteProp(obj, str) {
  delete obj[str];
  return obj;
}

const salento = {
  luMare: 'Mare',
  luSule: 'Sule',
  luIentu: 'Ientu'
}
var daFastidio = 'luIentu';
console.log(deleteProp(salento, daFastidio));


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
/* ESERCIZIO 12 /* RIMETTO LA TRACCIA QUI PER COMODITA'
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

console.log('Funzioni Dodicesimo(12) Esercizio');


function newestMovie(movies) {
  let newest = movies[0];
  for (let i = 1; i < movies.length; i++) {
    newest = (parseInt(movies[i].Year) > parseInt(newest.Year)) ? movies[i] : newest;
  }
  return newest;
}

console.log(newestMovie(movies));


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/


console.log('Funzioni Tredicesimo(13) Esercizio');


movies.length;
console.log('I film sono: ' + movies.length);


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/


console.log('Funzioni Quattordicesimo(14) Esercizio');


function onlyYear(movies) {
  return movies.map(function (movie) {
    return movie.Year;
  })
}
const yearMovies = onlyYear(movies);
console.log('Gli anna dei film sono: ' + yearMovies);


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/


console.log('Funzioni Quindicesimo(15) Esercizio');

function onlyInLastMillennium00(movies) {
  return movies.filter(function (movie) {
    return parseInt(movie.Year) >= 1900 && parseInt(movie.Year) < 2000;
  });
}

const film1900 = onlyInLastMillennium00(movies);
console.log(film1900);


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/


console.log('Funzioni Sedicesimo(16) Esercizio');


function sumAllTheYears(movies) {
  return movies.reduce((total, movie) => {
    return total + parseInt(movie.Year, 10);
  }, 0);
}

const somTotYears = sumAllTheYears(movies);
console.log('La somma totale degli anni di produzione è: ' + somTotYears);


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/


console.log('Funzioni Diciassettesimo(17) Esercizio');


function searchByTitle(query, movies) {
  return movies.filter(function (movie) {
    return movie.Title.includes(query);
  });
}
const searchResult = searchByTitle("Avengers", movies);

console.log(searchResult);


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/


console.log('Funzioni Diciottesimo(18) Esercizio');


function searchAndDivide(query, movies) {
  return movies.reduce((result, movie) => {
    if (movie.Title.includes(query)) {
      result.match.push(movie);
    } else {
      result.unmatch.push(movie);
    }
    return result;
  }, { match: [], unmatch: [] });
}

const result = searchAndDivide("Lord of the Rings", movies);
console.log(result);



/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/


console.log('Funzioni Diciannovesimo(19) Esercizio');



function removeIndex(i, movies) {
  let moviesCopy = [...movies];
  if (i >= 0 && i < moviesCopy.length) {
    moviesCopy.splice(i, 1);
  }

  return moviesCopy;
}

console.log(removeIndex(0, movies));


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/


console.log('DOM Ventesimo(20) Esercizio');


function selected() {
  let containerElem = document.getElementById('container');
  return containerElem;
}

let container = selected();
console.log(container);


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/


console.log('DOM Ventunesimo(21) Esercizio');


function allTd() {
  let allSelectedTd = document.querySelectorAll('td');
  return allSelectedTd;
}

let td = allTd();
console.log(td);


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/


console.log('DOM Ventiduesimo(22) Esercizio');


function printTdContents() {
  var tdElements = document.querySelectorAll('td');

  for (let i = 0; i < tdElements.length; i++) {
    console.log(tdElements[i].innerText);
  }
}

let newStringInTd = printTdContents();
console.log('Perchè non ho gli elementi <td> nel foglio HTML -> ' + newStringInTd);


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/


console.log('DOM Ventitresimo(23) Esercizio');


function bgRed() {
  let allLinks = document.querySelectorAll('a');
  for (let link of allLinks) {
    link.style.backgroundColor = 'red';
  }
}

let bgRedAllLinks = bgRed();
console.log('Perchè non ho gli elementi <a> nel foglio HTML -> ' + bgRedAllLinks);


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/


console.log('DOM Ventiquattresimo(24) Esercizio');


function addLi() {
  /* Creo un nuovo elemento <ul> perchè altrimenti mi da errore in console */
  let newUl = document.createElement('ul');
  newUl.setAttribute('id', 'myList');
  document.body.appendChild(newUl);
  let myUl = document.getElementById('myList');
  let newLi = document.createElement('li');
  newLi.textContent = "Nuovo List Item aggiungo";
  myUl.appendChild(newLi);
  return newLi;
}

let newContentForLi = addLi();
console.log(newContentForLi);


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/


console.log('DOM Venticinquesimo(25) Esercizio');


function clearList() {
  let myList = document.getElementById('myList');
  while (myList.firstChild) {
    myList.removeChild(myList.firstChild);
  }
}

let clear = clearList();
console.log(clear);



/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/


console.log('DOM Ventiseiesimo(26) Esercizio');


function testForAllTr() {
  let allTr = document.querySelectorAll('tr');
  for (let tr of allTr) {
    tr.classList.add('test');
  }
}

let addClassTr = testForAllTr();
console.log(addClassTr);

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/


console.log('[EXTRA] DOM Ventisettesimo(27) Esercizio- NON SVOLTO');


function halfTree(hgth) {

}




/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/


console.log('[EXTRA] DOM Ventottesimo(28) Esercizio- NON SVOLTO');


function Tree() {

}


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/


console.log('[EXTRA] DOM Ventinovesimo(29) Esercizio');


function isPrime(x) {
  if (x <= 1) {
    return false;
  }
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

console.log('Il 5 è un numero primo quindi --> ' + isPrime(5));
console.log('Il 4 non è un numero primo quindi --> ' + isPrime(4));


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/* Questo array viene usato per gli esercizi. Non modificarlo. */
/* ARRAY SPOSTATO ALL'ESERCIZIO 12 */

/*
--------------------- 
PAPERELLA AMICA <3
       .__(.)< (MEOW)
        \___)   
---------------------*/