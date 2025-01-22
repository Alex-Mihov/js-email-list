// Descrizione
// Attraverso l’apposita API di Boolean
//  https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

// selezione output in html 
const outPutEmail = document.getElementById("emails");

// creazione ciclo for per generare le 10 email
for (let i = 0; i < 10; i++) {

    // setto l'endpoint
    const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

    
    // faccio partire la richiesta per l'email
    axios.get(endpoint)
        .then(responseEmail => {
            const risultato = responseEmail.data.response
        })

        .catch(error => {

            console.log(error);
            
        })

    

}
