var cat2, cat4 , mouse1, mouse3, garden;
var catImage, gardenImage, mouseImage; 


function preload() {
    //load the images here

    cat2Image=loadImge("cat2.png");
    cat4Image=loadImge("cat4.png");
    mouse1Image=loadImge("mouse1.png");
    mouse3Image=loadImge("mouse3.png");
    gardenImage=lodImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat2 = createSprite(900, 700, 50 , 50);
    cat2.addImage("cat", cat2Image);
    cat2.scale=0.5;

    garden = createSprite(500, 400,  1000 ,800);
    garden.addImage("garden", gardenImage);

    mouse1 =createSprite(900, 100, 50, 50);
    mouse1.ddImage("mouse", mouse1.png);
    mouse1.scale=0.5


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(keydown("space")){
cat2.velocityX=2

    }

    if (cat2.isTouching(mouse1)){
        cat4 = createSprite(900, 700, 50 , 50);
        cat4.addImage("cat", cat4Image);
        cat4.scale=0.5;

        mouse3 =createSprite(900, 700, 50, 50);
        mouse3.ddImage("mouse", mouse3.png);
        mouse3.scale=0.5
    
    

    }
    drawSprites();
}
