/*
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

/*
Chiedere all’utente la sua email;
Creare un array con N elementi con all'interno una lista di mail;
Controlla che la mail inserita sia nella lista di chi può accedere;
Stampare un messaggio appropriato sull’esito del controllo.
*/

const arrMail = ['prova0@mail.com','prova1@mail.com', 'prova2@mail.com', 'prova3@mail.com', 'prova4@mail.com', 'prova5@mail.com', 'prova6@mail.com', 'prova7@mail.com', 'prova8@mail.com', 'prova9@mail.com', 'prova10@mail.com'];

const eleMail = prompt('inserisci la tua mail');

if (arrMail.includes(eleMail)){
    console.log('La mail è corretta puoi entrare')
} else {
    console.log('La mail è errata')
}



