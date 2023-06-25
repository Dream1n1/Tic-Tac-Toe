



const gameBoard = (() => {

    const display = document.querySelector('.display');
    const button = document.querySelector('button');
    const formContainer = document.querySelector('.formContainer');
    const form = document.querySelector('.form');
    const container = document.querySelector('.container');
    
    button.addEventListener('click',() => {
        //Getting the players names
        const player1 = document.querySelector('#player1');
        const player2 = document.querySelector('#player2');
        let p1name = player1.value;
        let p2name = player2.value;

        //Removing the form and making the game board
        formContainer.removeChild(form);
        for (let i = 1; i < 10; i++) {
            let spots = document.createElement('div');
            spots.setAttribute('class', 'spot');
            spots.setAttribute('id', i.toString());
            container.appendChild(spots);
        }

        //Making the restart button
        const restart = document.querySelector('.restart');
        let restartBtn = document.createElement('button');
        restartBtn.setAttribute('class', 'restartBtn');
        restartBtn.textContent = "Restart Game";
        restart.appendChild(restartBtn);
        restartBtn.addEventListener('click', ()=>{
            spotsArr.forEach(i => {
                i.textContent = "";
            })
            gb = [["","",""], ["","",""], ["","",""]];
            switchi = "toX";
            gameEnded = false;
        })
        
        //Game functionality
        const spots = document.querySelectorAll('.spot');
        const spotsArr = Array.from(spots);
        const x = "X";
        const o = "O";
        let gb = [["","",""], ["","",""], ["","",""]];
        let switchi = "toX";
        let gameEnded = false;

        spotsArr.forEach(i => {
            i.addEventListener('click', ()=>{
                
                if (!i.textContent && !gameEnded) {
                    if (switchi == "toX") {
                        i.textContent = x;
                        if (i.id - 1  < 3) {
                            gb[0][i.id - 1] = x;
                        } else if (i.id - 1  < 6) {
                            gb[1][i.id - 4] = x;
                        } else {
                            gb[2][i.id - 7] = x;
                        }
                        switchi = "toO";
                    } else {
                        i.textContent = o;
                        if (i.id - 1  < 3) {
                            gb[0][i.id - 1] = o;
                        } else if (i.id - 1  < 6) {
                            gb[1][i.id - 4] = o;
                        } else {
                            gb[2][i.id - 7] = o;
                        }
                        switchi = "toX";
                    }
                    
                }
                //Checking for the win and the tie
                (() => {
                    if (i.textContent && !gameEnded) {
                        // Rows
                        for (let row = 0; row < 3; row++) {
                            let column = [];
                            for (let col = 0; col < gb.length; col++) {
                            column.push(gb[row][col]);
                            }
                        if (column.every(element => element === 'X')) {
                            display.textContent = `${p1name} won!`;
                            gameEnded = true;
                        } else if (column.every(element => element === 'O')) {
                            display.textContent = `${p2name} won!`;
                            gameEnded = true;
                            }
                        }
                  
                        // Columns
                        for (let col = 0; col < 3; col++) {
                            let column = [];
                            for (let row = 0; row < gb.length; row++) {
                            column.push(gb[row][col]);
                            }
                            if (column.every(element => element === 'X')) {
                                display.textContent = `${p1name} won!`;
                                gameEnded = true;
                            } else if (column.every(element => element === 'O')) {
                                display.textContent = `${p2name} won!`;
                                gameEnded = true;
                            }
                        }
                  
                        // Diagonals
                        let diagonal = [];
                        for (let i = 0; i < gb.length; i++) {
                            diagonal.push(gb[i][i]);
                        }
                        if (diagonal.every(element => element === 'X')) {
                            display.textContent = `${p1name} won!`;
                            gameEnded = true;
                        } else if (diagonal.every(element => element === 'O')) {
                            display.textContent = `${p2name} won!`;
                            gameEnded = true;
                        }
                  
                        let x = 0;
                        let y = 2;
                        let counterDiagonal = [];
                        for (let i = 0; i < gb.length; i++) {
                            counterDiagonal.push(gb[x][y]);
                            x++;
                            y--;
                        }
                        if (counterDiagonal.every(element => element === 'X')) {
                            display.textContent = `${p1name} won!`;
                            gameEnded = true;
                        } else if (counterDiagonal.every(element => element === 'O')) {
                            display.textContent = `${p2name} won!`;
                            gameEnded = true;
                        }
                  
                        // Tie
                        if (!gb.flat().includes("") && !gameEnded) {
                            display.textContent = "It's a tie!";
                            gameEnded = true;
                        }
                    }
                  })();
            });
        });
    });
})();



