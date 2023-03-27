/*
JSnack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array
*/

const array = [];

const numeroInserito = parseInt(prompt("inserisci un numero"));

for (let i = 0; i < 6; i++){
  
  // come faccio a far ripetere 6 volte il prompt e salvarmi i numeri inseriti?

  if ((numeroInserito % 2)){
    array.push(numeroInserito);
  }else {
    console.log("il tuo numero è pari")
  }

}


console.log(array);

