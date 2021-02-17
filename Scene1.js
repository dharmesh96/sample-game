class Scene1 extends SimpleScene {
  constructor() {
    super("Scene1");
  }

  init() {
      
  }

  preload() {
    this.load.image("mala", "assets/rudraksha-mala.png");
  }

  create() {
    // config.backgroundColor = 0xFFCBA4
    this.mala = this.add.sprite(300, 200, "mala");
    this.mala.setScale(0.6, 0.5)

    
    // add text
    this.info = this.add.text(250, 40, " Clicker\nCounter", 0x000000);
    this.info.setFontSize(40);
    // add circle
    // this.circ = this.add.circle(100, 100, 20, 0x00FF00);
    // add rectangle
    this.square = this.add.rectangle(320, 230, 150, 50, 0x0F7F7F);
    this.square.text = this.add.text(275,210,"Start",0xFFFFFF)
    this.square.text.setFontSize(40);
    //enable click on square
    this.square.enableClick();


    // Uncomment line below to draw the grid
    // this.drawGrid();
  }

  update() {

    // check if square was clicked
    if (this.square.wasClicked()) {
      // move circle to the right
      // this.circ.x += 10;
      this.scene.start("Scene2")
    }
  }
}