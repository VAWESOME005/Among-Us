class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.reset = createButton('Reset');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.matchmake = createElement('h3')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.matchmake.hide()
    
  }

  display(){
    this.title.html("Among Us");
    this.title.position(displayWidth/2 - 65, 0);

    this.input.position(displayWidth/2 - 65 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 , displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      this.reset.position(displayWidth-100, 500)
     

    });
    this.reset.mousePressed(()=>{
        game.update(0)
        player.updateCount(0)
        
    });
    /*if(gameState === 0){
      this.matchmake.html("Players Connected: "+ playerCount)
    this.matchmake.position(displayWidth/2 - 90, displayHeight/4 + 170)
    }
    
    if(playerCount == playerCount + 1){
      this.matchmake.html("Players Connected: "+ playerCount)
    }*/
    

  }

}
