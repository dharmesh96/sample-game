class Scene2 extends SimpleScene {
  constructor() {
    super("Scene2");
    this.clickCount = 0
  }

  init() {

  }

  preload() {
    this.load.image("bead", "assets/bead.png");
    this.load.audio("tone1", ["assets/sounds/tone1.ogg"]);
  }

  createMalaFromBeads(){
    var height = 66
    var y = height/2
    var i = 0
    var x = 50
    this.bead1 = this.add.sprite(x, y + (height*i++), "bead");
    this.bead1.setScale(0.2, 0.2);
    this.bead2 = this.add.sprite(x, y + (height*i++), "bead");
    this.bead2.setScale(0.2, 0.2);
    this.bead3 = this.add.sprite(x, y + (height*i++), "bead");
    this.bead3.setScale(0.2, 0.2);
    this.bead4 = this.add.sprite(x, y + (height*i++), "bead");
    this.bead4.setScale(0.2, 0.2);
    this.bead5 = this.add.sprite(x, y + (height*i++), "bead");
    this.bead5.setScale(0.2, 0.2);
    this.bead6 = this.add.sprite(x, y + (height*i++), "bead");
    this.bead6.setScale(0.2, 0.2);
    this.bead1.enableClick();
    this.bead2.enableClick();
    this.bead3.enableClick();
    this.bead4.enableClick();
    this.bead5.enableClick();
    this.bead6.enableClick();
  }

  create() {
    this.createMalaFromBeads()
    this.myTone = this.sound.add("tone1", { loop: false });
    this.label = this.add.text(250,20, "Test", 0xFF0000)
    this.label.setFontSize(30);
  }

  updateHelper(){
    this.myTone.play();
    this.clickCount += 1
    this.label.setText(this.clickCount);
  }
  update() {
    // this.label.text = this.bead1.x;
    if (this.bead1.wasClicked()){
      this.updateHelper();
      if (this.bead1.x >= 550) {
        this.bead1.x = 50
      }
      else {   
        this.bead1.x += 100
      }
    }
    if (this.bead2.wasClicked()){
      this.updateHelper();
      if (this.bead2.x >= 550) {
        this.bead2.x = 50
      }
      else {   
        this.bead2.x += 100
      }
    }
    if (this.bead3.wasClicked()){
      this.updateHelper();
      if (this.bead3.x >= 550) {
        this.bead3.x = 50
      }
      else {   
        this.bead3.x += 100
      }
    }
    if (this.bead4.wasClicked()){
      this.updateHelper();
      if (this.bead4.x >= 550) {
        this.bead4.x = 50
      }
      else {   
        this.bead4.x += 100
      }
    }
    if (this.bead5.wasClicked()){
      this.updateHelper();
      if (this.bead5.x >= 550) {
        this.bead5.x = 50
      }
      else {   
        this.bead5.x += 100
      }
    }
    if (this.bead6.wasClicked()){
      this.updateHelper();
      if (this.bead6.x >= 550) {
        this.bead6.x = 50
      }
      else {   
        this.bead6.x += 100
      }
    }
    
  }
}