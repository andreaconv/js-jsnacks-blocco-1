/*
JSnack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array
*/

const array = [];

// come faccio a far ripetere 6 volte il prompt e salvarmi i numeri inseriti?

for (let i = 0; i < 6; i++){
  
  const numeroInserito = parseInt(prompt("inserisci un numero"));
  
  if (numeroInserito % 2){
    array.push(numeroInserito);
  }
  
}

console.log(array);