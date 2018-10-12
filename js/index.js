var canvas = document.getElementById('gameCanvas');
var gameBoard = new GameBoard(canvas);
gameBoard.render();

function onKeyDown(event) {
    gameBoard.action(event.which);
}