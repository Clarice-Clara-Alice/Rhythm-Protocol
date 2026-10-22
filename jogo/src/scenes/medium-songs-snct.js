export default class MediumSceneSNCT extends Phaser.Scene {
  constructor() {
    super("MediumSceneSNCT");
  }

  create() {
    this.add
      .image(this.scale.width / 2, this.scale.height / 2, "background")
      .setDisplaySize(this.scale.width, this.scale.height);
    
    this.add
      .image(this.scale.width / 2, this.scale.height / 2, "Nada")
      .setDisplaySize(this.scale.width, this.scale.height);
  }
}