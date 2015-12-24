var board;
var player;
var winConditions = [[0,1,2], [3,4,5], [6,7,8],
                    [0,3,6], [1,4,7], [2,5,8],
                    [0,4,8], [6,4,2]]
var gameOver;

function renderBoard (){
  for (var i = 0;i<board.length;i++){
    $('.'+i).text(board[i]);
  }
}

function renderText(){
  $('.playerText').text('Turn : ' + player)
}



function setBox(box){
  if (gameOver) {
    return;
  }

  if (board[box] == " "){
    board[box] = player;
    checkState();
    changePlayer();
  }


  if (gameOver) return;

  renderBoard();
  renderText();
}

function changePlayer(){
  if (player == "O")
    player = "X";
  else{
    player = "O";
    cpu();
    }
}

function cpu () {
  var enemy = Math.floor((Math.random() * 8) + 0);
  if (board[enemy] == " ")  {
    board[enemy] = player;
    checkState();
    changePlayer();
  }
   else
   {
  }
}

function checkState(){
  $.each(winConditions, function(index,value){
   if (board[winConditions[index][0]] == board[winConditions[index][1]]
    && board[winConditions[index][0]] == board[winConditions[index][2]]
    && board[winConditions[index][0]] != " "){
      gameOver = true;
      $('.playerText').text('Player ' + player + ' wins');
      renderBoard();
   }
  });
}

function init(){
  board = [" "," "," "," "," "," "," "," "," "];
  player ="X";
  gameOver = false;
  renderBoard();
  renderText();
}

$(document).ready(function(){
  init();
});
