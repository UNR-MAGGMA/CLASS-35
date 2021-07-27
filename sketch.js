var balloon, background;


function preload() {
  backgroundImg = loadImage("cityImage.png")
  balloonImage = loadAnimation("hotairballoon1.png", "hotairballoon1.png", "hotairballoon1.png");
}

function setup(){
   database = firebase.database();
   console.log(database);
    createCanvas(500,500);

balloon = createSprite (100,400, 20, 20)
  balloon.addAnimation("balloon", balloonImage);
  balloon.scale = 0.4;


}

function draw(){

    background(backgroundImg);
  
        if(keyDown('A')){
            balloon.x = balloon.x - 10;
        }
        else if(keyDown('D')){
            balloon.x = balloon.x + 10;
        }
        else if(keyDown('W')){
            balloon.y = balloon.y - 10;
        }
        else if(keyDown('S')){
             balloon.y = balloon.y + 10;
        }
        drawSprites();
    }

    