let gameBoard
let board
let warning
let player
let line
let column

function start() {
    gameBoard = []
    board = document.getElementById('board')
    warning = document.getElementById('warning')
    player = 1

    for (let i = 0; i < 3; i++) {
        gameBoard[i] = []
        for (let j = 0; j < 3; j++) {
            gameBoard[i][j] = 0
        }
    }

    console.table(gameBoard)
    display()
}

function display() {
    let table = '<table cellpadding = "20" border = "1">'

    for (let i = 0; i < 3; i++) {
        table += '<tr>'
        for (let j = 0; j < 3; j++) {
            let marker
            switch (gameBoard[i][j]) {
                case -1: marker = 'X'; break;
                case 1: marker = 'O'; break;
                default: marker = '_'
            }
            table += '<td>' + marker + '</td>'
        }
        table += '</tr>'
    }

    table += '</table>'

    board.innerHTML = table

}
function toPlay() {
    warning.innerHTML = 'Vez do Jogador: ' + playerTurn()

    line = document.getElementById('line').value - 1
    column = document.getElementById('column').value - 1

    if (gameBoard[line][column] == 0) {
        gameBoard[line][column] = playerTurn() == 1 ? 1 : -1
    } else {
        warning.innerHTML = 'Esse campo já foi marcado!'
    }

    console.table(gameBoard)
    player++
    display()
}
function check() {

    //Lines
    for (let i = 0; i < 3; i++) {
        let sum = 0
        sum = gameBoard[i][0] + gameBoard[i][1] + gameBoard[i][2]
        if (sum == 3 || sum == -3) {
            warning.innerHTML = 'O jogador ' + playerTurn() + 'ganhou!'
        }
    }

    //Column
    for (let i = 0; i < 3; i++) {
        let sum = 0
        sum = gameBoard[0][i] + gameBoard[1][i] + gameBoard[2][i]
        if (sum == 3 || sum == -3) {
            warning.innerHTML = 'O jogador ' + playerTurn() + 'ganhou!'
        }
    }

    //Diagonal
    sum = gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2]
    if (sum == 3 || sum == -3) {
        warning.innerHTML = 'O jogador ' + playerTurn() + 'ganhou!'
    }
}
function playerTurn() {
    return player % 2 + 1
}
