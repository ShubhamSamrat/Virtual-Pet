//Create variables here
var animatio,watermelon,candy,pizza,chilli,cake,watermelonImg,candyImg,pizzaImg,chilliImg,cakeImg;
//var state = "nor";
var TomStatus,hour,meridian,food,candyStock,chilliStock,cakeStock,pizzaStock,watermelonStock,database,time;
var today = new Date,feedHour,feedCandy,lastFeed = "...",lastFeedStatus,GameState;






function draw() { 
  lastFeedStatus.html("Last Feed At :- " + lastFeed);
  currentTime = today.getHours();
  //console.log();

  if(currentTime - feedHour == 1){
    //GameState = "garden";
    updateGameState("garden")
  }else if(currentTime-feedHour >= 2 &&currentTime-feedHour <= 4 ){
    //GameState = "bathing";
    updateGameState("bathing")
  }else if(currentTime-feedHour > 4){
    //GameState = "hungry";
    updateGameState("hungry");
  }/*else{
    GameState = "normal";
  }*/
  
  
  

  if(GameState === "normal"){
    image(normal,0,0,600,600);
    TomStatus.html("Tom is Happy");
    
  } else if(GameState === "eatCh"){
    
    image(eatChilli,0,0,600,600);
    TomStatus.html("Tom is eating Chilli");
    
    eatChilli.frame([1]);
   } else if(GameState === "eatCa"){
    
    image(eatCake,0,0,600,600);
    TomStatus.html("Tom is eating Cake");
    
    eatCake.frame([1]);
   } else if(GameState === "eatWM"){
    
    image(eatWM,0,0,600,600);
    TomStatus.html("Tom is eating Watermelon");
    
    eatWM.frame([1]);
   } else if(GameState === "eatIce"){
    
    image(eatIce,0,0,600,600);
    TomStatus.html("Tom is eating IceCream");
    
    eatIce.frame([1]);
   } else if(GameState === "eatPiz"){
    
    image(eatPizza,0,0,600,600);
    TomStatus.html("Tom is eating Pizza");
    
    eatPizza.frame([1]);
   } else if(GameState === "garden"){
    
    image(playing,0,0,600,600);
    TomStatus.html("Tom is playing in Garden");
    
    
    playing.frame([1]);
   } else if(GameState === "bathing"){
    
    image(bathing,0,0,600,600);
    TomStatus.html("Tom is Bathing");
    
    bathing.frame([1]);
   } else if(GameState === "hungry"){
    
    image(hungry,0,0,600,600);
    TomStatus.html("Tom is Very Hungry! Feed Him...");
    
    hungry.frame([1]);
   }

   //connect game State to web db
   //recheck state and gamestate
   //conditionals for gamestates
   //updating gamestate in firebase

      
      
      
    

     

 
  
  drawSprites();
  
  
  textSize(30);
  text(candyStock,25,800);
  text(pizzaStock,140,800);
  text(watermelonStock,270,800);
  text(chilliStock,400,800);
  text(cakeStock,520,800);
  
  

}







