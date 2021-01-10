function feed(Code) {

    //console.log(keyCode);
    if (Code === 67 && (GameState === "normal" || GameState === "hungry") && cakeStock > 0) {
      //Cake(C)
      //state = "eatCa";
      updateGameState("eatCa")
      deductFoods("Cake",cakeStock);
      setTimeout(Normal ,15000);
      
  
  
    } else if (Code === 73 && (GameState === "normal" || GameState === "hungry") && candyStock>0) {
      //Ice(I)
      //state = "eatIce";
      updateGameState("eatIce")
      deductFoods("Candy",candyStock);
      setTimeout(Normal ,13000);
      
  
    } else if (Code === 80 && (GameState === "normal" || GameState === "hungry") && pizzaStock>0) {
      //Pizza(P)
      //state = "eatPiz";
      updateGameState("eatPiz")
      deductFoods("Pizza",pizzaStock);
      setTimeout(Normal ,8000);
      
  
    } else if (Code === 77 && (GameState === "normal" || GameState === "hungry") && chilliStock>0) {
      //Chilli(M)
      //state = "eatCh";
      updateGameState("eatCh")
      deductFoods("Chilli",chilliStock);
      setTimeout(Normal ,13000);
  
    } else if (Code === 87 && (GameState === "normal" || GameState === "hungry") && watermelonStock>0) {
      //WaterMelon(W)
      //state = "eatWM";
      updateGameState("eatWM")
      deductFoods("Watermelon",watermelonStock);
      setTimeout(Normal ,12000);
  
    } else if(Code === 87 ||Code === 77||Code === 80||Code === 73||Code === 67){
      textSize(30);
      fill("black");
      Code = 0;
      //text("Oh! That Food has exhausted",160,640);
    }
    
  
  }
 
 function addFood(){
     database.ref("Foods").update({
         'Candy' : candyStock++,
         'Cake'  : cakeStock++,
         'Chilli'  : chilliStock++,
         'Pizza'  : pizzaStock++,
         'Watermelon'  : watermelonStock++
     })
     clear();
 }
 
 function readData(data){
  food = data.val();
  candyStock = food.Candy;
  chilliStock = food.Chilli;
  cakeStock = food.Cake;
  watermelonStock = food.Watermelon;
  pizzaStock = food.Pizza;
  console.log(food);

}

function deductFoods(key,currentVal){
  path = ("Foods/" + key);
  database.ref(path).set(currentVal-1);
  var today = new Date(); 

  if(today.getHours()>12){
    hour = today.getHours()-12;
  }
  if(today.getHours()>11 && today.getHours()<24){
    meridian = "PM";
  }else{
    meridian = "AM";
  }
  time = (hour + ":" + (today.getMinutes()) + " " + meridian +" on " + "("+today.getDate()+"/"+(today.getMonth() +1) + "/" + today.getUTCFullYear() + ")")
  database.ref("lastFeed").set(time);
  database.ref("feedHour").set(today.getHours());
  

  clear();
}
function Normal(){
  updateGameState("normal");

  
}

function updateGameState(state){
  database.ref("GameState").set(state);
}
    
  
  
  
  
  