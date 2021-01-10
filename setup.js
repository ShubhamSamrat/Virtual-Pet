function preload()
{
  
  normal = loadGif("images/normal.gif");
  eatChilli = loadGif("images/eatChilli.gif");
  eatCake = loadGif("images/eatCake.gif");
  eatPizza = loadGif("images/eatPizza.gif");
  eatWM = loadGif("images/eatWatermelon.gif");
  eatIce = loadGif("images/eatCandy.gif");
  hungry = loadGif("images/hungry.gif");
  playing = loadGif("images/playing.gif");
  bathing = loadGif("images/bathing.gif");

  watermelonImg = loadImage("images/watermelon.png");
  candyImg = loadImage("images/icecream.png");
  pizzaImg = loadImage("images/pizza.png");
  chilliImg = loadImage("images/chilli.png");
  cakeImg = loadImage("images/cake.png");
  
  animatio = normal ;
}

function setup() {
    createCanvas(600, 820);
    database = firebase.database();
    var stock = database.ref("Foods");
    stock.on("value",readData);
  
    var getFeedTime = database.ref("/");
    getFeedTime.on("value",function getLastFeedTime(data){
      var value = data.val();
      lastFeed = value.lastFeed;
      feedHour = value.feedHour;
      GameState = value.GameState;
    });
  
  
  
    watermelon = createSprite(305,700,70,100);
    watermelon.addImage(watermelonImg);
    watermelon.scale = 0.4;
  
  
    candy = createSprite(40,700,70,100);
    candy.addImage(candyImg);
    candy.scale = 0.5;
   
  
    pizza = createSprite(165,700,100,100);
    pizza.addImage(pizzaImg);
    pizza.scale = 0.55;
  
  
    chilli = createSprite(425,700,100,100);
    chilli.addImage(chilliImg);
    chilli.scale = 0.4;
  
    cake = createSprite(535,700,100,100);
    cake.addImage(cakeImg);
    cake.scale = 0.35;
    
    feedCandy = createButton("Candy");
    feedCandy.position(380,870);
    feedCandy.mousePressed(function serve(){
      feed(73);
    }); 
  
  
    feedPizza = createButton("Pizza");
    feedPizza.position(500,870);
    feedPizza.mousePressed(function serve(){
      feed(80);
    }); 
  
  
    feedWM = createButton("Watermelon");
    feedWM.position(610,870);
    feedWM.mousePressed(function serve(){
      feed(87);
    });
  
  
    feedChilli = createButton("Chilli");
    feedChilli.position(760,870);
    feedChilli.mousePressed(function serve(){
      feed(77);
    });
  
  
    feedCake = createButton("Cake");
    feedCake.position(880,870);
    feedCake.mousePressed(function serve(){
      feed(67);
    });
  
    addButton = createButton("Add Food");
    addButton.position(380,665)
    addButton.mousePressed(addFood);
  
    lastFeedStatus = createElement("h2");
    lastFeedStatus.position(520,645);
    lastFeedStatus.style.width = "500px";

    TomStatus = createElement("h2");
    TomStatus.position(530,1);

    
    
      
  }