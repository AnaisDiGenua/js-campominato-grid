// Consegna L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.




const playBtn = document.getElementById('play');

playBtn.addEventListener("click", function() {

    // variabile livello di difficoltà
    const level = document.getElementById('game-level').value;
    console.log(level);

    // variabile che conterrà i quadratini
    const container = document.querySelector('.container');


    switch(level) {

        case 'easy':
            for (let i =1; i <= 100; i++) {
                container.innerHTML += 
                `
                <div class="square">${i}</div>
                `;
            }
        break;

        case 'medium':
            for (let i =1; i <= 81; i++) {
                container.innerHTML += 
                `
                <div class="square medium">${i}</div>
                `;
            }
        break;

        case 'expert':
            for (let i =1; i <= 49; i++) {
                container.innerHTML += 
                `
                <div class="square expert">${i}</div>
                `;
            }
        break;
    }

})






