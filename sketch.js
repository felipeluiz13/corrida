var canvas;
var backgroundImage,car1Img,car2Img,track;
var bgImg;
var database;
var form, player,game;
var playerCount;
var gameState;
var car1,car2,cars;
var allPlayers;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1Img = loadImage("./assets/car1.png");
  car2Img = loadImage ("./assets/car2.png");
  track = loadImage ("./assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
  if(playerCount === 2) {
    game.update(1);
  }
  if(gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
