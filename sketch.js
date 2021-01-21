var doctor1;
var doctor;
var covid19;
var covid191;
var medicalKits1;
var medicalKits;
var PPEKits;
var PPEKits1;
var backgroundImg;
var form;
var game;
var playerCount;
var gameState=0;
var database;
var player;

function preload(){
backgroundImg = loadImage("images/background.JPEG")
covid191 = loadImage("images/Covid-19.png")
doctor1 = loadImage("images/doctor.png")
medicalKits1 = loadImage("images/medical kit.png")

}

function setup(){
createCanvas(displayWidth-50,displayHeight-150)
 database = firebase.database();
 game = new Game();
 game.getState();
 game.start();
}

function draw(){
background(backgroundImg)
if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

