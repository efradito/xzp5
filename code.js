var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"KXH6tvwR5EZxzpkmnbq86azU12wap2XQ","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"MCZBJCKRpdEfKV7ux1DDI6ioik.djvlP","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"5MX0mFoGU_XXEO2ycS_gL7N_3_ldoXGc","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var finishline = createSprite(390,190,10,200);
var lives = 0;
var score = 0;
var thingthatIwillhardlyeveruseXD = thingthatIwillhardlyeveruseXD;
var gamestate = "serve";
var bus = createSprite(25,200,20,20);
bus.shapeColor = "yellow";
var border1 = createSprite(200,75,400,20);
var border2 = createSprite(200,325,400,20);
var passenger1 = createSprite(50,300,10,10);
passenger1.shapeColor = "green";
var passenger2 = createSprite(50,100,10,10);
passenger2.shapeColor = "green";
var passenger3 = createSprite(150,300,10,10);
passenger3.shapeColor = "green";
var passenger4 = createSprite(150,100,10,10);
passenger4.shapeColor = "green";
var passenger5 = createSprite(250,300,10,10);
passenger5.shapeColor = "green";
var passenger6 = createSprite(250,100,10,10);
passenger6.shapeColor = "green";
var passenger7 = createSprite(350,300,10,10);
passenger7.shapeColor = "green";
var passenger8 = createSprite(350,100,10,10);
passenger8.shapeColor = "green";
var commonperson1 = createSprite(100,200,10,10);
commonperson1.shapeColor = "red";
var commonperson2 = createSprite(100,200,10,10);
commonperson2.shapeColor = "red";
var commonperson3 = createSprite(200,200,10,10);
commonperson3.shapeColor = "red";
var commonperson4 = createSprite(200,200,10,10);
commonperson4.shapeColor = "red";
var commonperson5 = createSprite(300,200,10,10);
commonperson5.shapeColor = "red";
var commonperson6 = createSprite(300,200,10,10);
commonperson6.shapeColor = "red";

function draw() {
  background("white");
  createEdgeSprites();
  bus.collide(edges);
  bus.collide(border1);
  bus.collide(border2);
  drawSprites();
  
  if (gamestate == "serve"){
    finishline.shapeColor = "grey";
    notpersonorbusmovement();
    if (lives == 0) {
      textSize(18);
      text("Presiona espacio para empezar",10,190);
    }
    if (lives >= 1) {
      textSize(18);
      text("perdiste, espacio para intentar de nuevo",10,200);
    }
    if (lives >= 1){
     if (keyDown("space")){
     resetpeatons();
     passengerreganeration();
     }
     }
    if (keyDown("space")){
      gamestate = "play";
      personmovement();
    }
  }
  
  textSize(18);
    text("vidas perdidas = "+lives,200,20);
    if (score == 8){

      finishline.shapeColor = "blue";
      if (bus.isTouching(finishline)){
        gamestate = "end";
      }
    }
    if (gamestate == "play"){
     
     busmovement();
     textSize(18);
     text ("pasajeros, "+score,10,20);
    }
    if (gamestate == "end"){
      textSize(18);
      text("¡ganaste!, ",10,200);
      text("presiona espacio para empezar de nuevo",10,230);
      notpersonorbusmovement();
      if (keyDown("space")){
        lives = 0;
        gamestate="serve";
        finishline.shapeColor = "blue";
        resetpeatons();
        passengerreganeration();
      }
    }
  
commonperson1.bounceOff(border1);
commonperson1.bounceOff(border2);
commonperson2.bounceOff(border1);
commonperson2.bounceOff(border2);
commonperson3.bounceOff(border1);
commonperson3.bounceOff(border2);
commonperson4.bounceOff(border1);
commonperson4.bounceOff(border2);
commonperson5.bounceOff(border1);
commonperson5.bounceOff(border2);
commonperson6.bounceOff(border1);
commonperson6.bounceOff(border2);
  if (commonperson1.isTouching(bus)){
  lives = lives+1;
  gamestate ="serve";
}
if (commonperson2.isTouching(bus)){
  lives = lives+1;
  gamestate ="serve";
}
if (commonperson3.isTouching(bus)){
  lives = lives+1;
  gamestate ="serve";
}
if (commonperson4.isTouching(bus)){
  lives = lives+1;
  gamestate ="serve";
}
if (commonperson5.isTouching(bus)){
  lives = lives+1;
  gamestate ="serve";
}
if (commonperson6.isTouching(bus)){
  lives = lives+1;
  gamestate ="serve";
}
if (passenger1.isTouching(bus)){
  score = score+1;
  passenger1.destroy();
}
if (passenger2.isTouching(bus)){
  score = score+1;
  passenger2.destroy();
}
if (passenger3.isTouching(bus)){
  score = score+1;
  passenger3.destroy();
}
if (passenger4.isTouching(bus)){
  score = score+1;
  passenger4.destroy();
}
if (passenger5.isTouching(bus)){
  score = score+1;
  passenger5.destroy();
}
if (passenger6.isTouching(bus)){
  score = score+1;
  passenger6.destroy();
}
if (passenger7.isTouching(bus)){
  score = score+1;
  passenger7.destroy();
}
if (passenger8.isTouching(bus)){
  score = score+1;
  passenger8.destroy();
}
}























function busmovement(){
   if (keyDown("up")){
    bus.y=bus.y-4;
  }
  if (keyDown("down")){
    bus.y=bus.y+4;
  }
  if (keyDown("left")){
    bus.x=bus.x-4;
  }
  if (keyDown("right")){
    bus.x=bus.x+4;
  }
}
function personmovement(){
 commonperson1.velocityY = +5;
 commonperson2.velocityY = -5;
 commonperson3.velocityY = +5;
 commonperson4.velocityY = -5;
 commonperson5.velocityY = +5;
 commonperson6.velocityY = -5; 
}
function notpersonorbusmovement(){
 commonperson1.velocityY = 0;
 commonperson2.velocityY = 0;
 commonperson3.velocityY = 0;
 commonperson4.velocityY = 0;
 commonperson5.velocityY = 0;
 commonperson6.velocityY = 0; 
 commonperson1.y = 200;
 commonperson2.y = 200;
 commonperson3.y = 200;
 commonperson4.y = 200;
 commonperson5.y = 200;
 commonperson6.y = 200;
bus.y = 200;
bus.x = 25;
}
function passengerreganeration(){
passenger1 = createSprite(50,300,10,10);
passenger1.shapeColor = "green";
passenger2 = createSprite(50,100,10,10);
passenger2.shapeColor = "green";
passenger3 = createSprite(150,300,10,10);
passenger3.shapeColor = "green";
passenger4 = createSprite(150,100,10,10);
passenger4.shapeColor = "green";
passenger5 = createSprite(250,300,10,10);
passenger5.shapeColor = "green";
passenger6 = createSprite(250,100,10,10);
passenger6.shapeColor = "green";
passenger7 = createSprite(350,300,10,10);
passenger7.shapeColor = "green";
passenger8 = createSprite(350,100,10,10);
passenger8.shapeColor = "green";
score = 0;
}
function resetpeatons(){
passenger1.destroy();
passenger2.destroy();
passenger3.destroy();
passenger4.destroy();
passenger5.destroy();
passenger6.destroy();
passenger7.destroy();
passenger8.destroy();
}









































































































































































































































































































































































































































































































































































































































































































































































//¿enserio estas aqui?, ¿que haces aqui?
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
