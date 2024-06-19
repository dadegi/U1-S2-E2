/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('***** ESERCIZIO 1 *****');

let number1 = 15;
let number2 = 15;

if (number1 > number2) {
	console.log('il numero maggiore è ' + number1);
} else if (number2 > number1) {
	console.log('il numero maggiore è ' + number2);
} else {
	console.log('I due numeri sono uguali');
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('***** ESERCIZIO 2 *****');

let number3 = 5;

if (number3 !== 5) {
	console.log('not equal');
} else {
	console.log('equal');
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('***** ESERCIZIO 3 *****');

let number4 = 16;

if (number4 % 5 === 0) {
	console.log('divisibile per 5');
} else {
	console.log('non divisibile per 5');
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('***** ESERCIZIO 4 *****');

let number5 = 3;
let number6 = 6;

if (
	number5 === 8 ||
	number6 === 8 ||
	number5 - number6 === 8 ||
	number6 - number5 === 8 ||
	number5 + number6 === 8
) {
	console.log('una delle condizioni restituisce 8');
} else {
	console.log('nessuna delle condizioni restituisce 8');
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('***** ESERCIZIO 5 *****');

let totalShoppingCart = 55;
let delivery = 10;
let checkout;

if (totalShoppingCart > 50) {
	checkout = totalShoppingCart;
} else {
	checkout = totalShoppingCart + delivery;
}
// Con l'operatore ternario
// checkout = totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + delivery;

console.log(checkout);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('***** ESERCIZIO 6 *****');

let discount = 0.2;
totalShoppingCart = totalShoppingCart * (1 - discount);

if (totalShoppingCart > 50) {
	checkout = totalShoppingCart;
} else {
	checkout = totalShoppingCart + delivery;
}
// Con l'operatore ternario
// checkout = totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + delivery;

console.log(checkout);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('***** ESERCIZIO 7 *****');

let num1 = 4;
let num2 = 35;
let num3 = 12;

if (num1 > num2 && num1 > num3) {
	if (num2 > num3) {
		console.log(num1, num2, num3);
	} else {
		console.log(num1, num3, num2);
	}
} else if (num2 > num1 && num2 > num3) {
	if (num1 > num3) {
		console.log(num2, num1, num3);
	} else {
		console.log(num2, num3, num1);
	}
} else {
	if (num1 > num2) {
		console.log(num3, num1, num2);
	} else {
		console.log(num3, num2, num1);
	}
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('***** ESERCIZIO 8 *****');

let integer = 14;

if (typeof integer === 'number') {
	console.log('È un numero');
} else {
	console.log('Non è un numero');
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('***** ESERCIZIO 9 *****');

if (integer % 2 === 0) {
	console.log('Il numero è pari');
} else {
	console.log('Il numero è dispari');
}

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

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('***** ESERCIZIO 10 *****');

let val = 14;
if (val < 5) {
	console.log('Meno di 5');
} else if (val < 10) {
	console.log('Meno di 10');
} else {
	console.log('Uguale a 10 o maggiore');
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
	name: 'John',
	lastName: 'Doe',
	skills: ['javascript', 'html', 'css'],
};

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('***** ESERCIZIO 11 *****');

me.city = 'Toronto';
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('***** ESERCIZIO 12 *****');

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('***** ESERCIZIO 13 *****');

me.skills.length = me.skills.length - 1; // È preferibile usare il metodo pop()
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('***** ESERCIZIO 14 *****');

const myArr = [];

myArr[0] = 1;
myArr[1] = 2;
myArr[2] = 3;
myArr[3] = 4;
myArr[4] = 5;
myArr[5] = 6;
myArr[6] = 7;
myArr[7] = 8;
myArr[8] = 9;
myArr[9] = 10;
// È preferibile usare il metodo push()
console.log(myArr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('***** ESERCIZIO 15 *****');

myArr[9] = 100;
console.log(myArr);
