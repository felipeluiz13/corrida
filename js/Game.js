class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
    car1 = createSprite(width/2-50,height-100);
    car2 = createSprite(width/2+50,height-100);
    car1.addImage("car1",car1Img);
    car2.addImage("car2",car2Img);
    car1.scale = 0.07;
    car2.scale = 0.07;
    cars = [car1,car2];
  }

  play() {
    form.hide();
    Player.getPlayerInfo();
    if(allPlayers !== undefined) {
      image(track,0,-height*5,width,height*6)
      drawSprites()
    }
  }

  getState() {
   var gameStateRef = database.ref("gameState")
    gameStateRef.on("value",function (data){
      gameState = data.val();
    })
  }

  updateState(state) {
    database.ref("/").update({
      gameState:state
    })
  }
}
