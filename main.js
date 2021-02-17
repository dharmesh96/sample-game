// Game configuration object 
let config = {
  type: Phaser.AUTO,
  width: 600,
  height: 400,
  backgroundColor: 0xFFCBA4, // 0x000000,
  scene: [Scene1, Scene2],
  parent: "phaser-div",
  dom: {
    createContainer: true
  },
  fontFamily: 'Arial',
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    }
  }
};

//Create a Phaser Game using the config
const game = new Phaser.Game(config);

