class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
  static getPlayerinfo(){
    var PlayerInforef=database.ref('players')
    PlayerInforef.on("value",(data)=>{
      allPlayers=data.val()
    })
  }
  update(){
    var playerIndex="player/players"+this.index
    database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance
    });
  }
}