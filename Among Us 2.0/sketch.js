var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var characters, blue, green, red, orange;

function preload(){
 
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-230);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}


function draw(){
  console.log(playerCount)
  if(playerCount === 4){
    game.update(1);
  }
  console.log(gameState)
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end()
  }
}
