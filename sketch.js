var celebrationEmoji_img;
var baricade;
var celebrationEmoji;
var form;
var borderSprite;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var sprite;

function preload(){


  celebrationEmoji_img = loadImage("celebration.png");

  diya_img = loadImage("diya.jpg");
  earings_img = loadImage("earings.png");
  fairyLights_img = loadImage("fairyLights.jpg");
  lantern_img = loadImage("lantern.jpg");
  sweets_img = loadImage("sweets.jpg");
  rangoli_img = loadImage("rangoli.jpg");
  
}
function setup() {
  createCanvas(1000, 600);

  baricade = createSprite(350, 0, 15, 1200)
  baricade.shapeColor = "mediumpurple"

  celebrationEmoji = createSprite(950, 40, 50, 50)
  celebrationEmoji.addImage(celebrationEmoji_img)

  sprite = createSprite(680, 300, 250)
  sprite.shapeColor = "cornflowerblue"


  form = new FormGame()
  
}

function draw() {
  background(100,149,237);
  
  baricade.display();
  celebrationEmoji.display();
  form.display();
  sprite.display();

  textSize(20)
  fill("Navy")
  text("Buttons:", 30, 70)
  text("Display Cards:", 390, 70)

  textSize(30)
  fill("indigo")
  text("Diwali Greeting Card", 390, 30)  
}