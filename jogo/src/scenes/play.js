export default class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    this.add
      .image(this.scale.width / 2, this.scale.height / 2, "background")
      .setDisplaySize(this.scale.width, this.scale.height);

    this.add
      .graphics()
      .fillStyle(0x631597, 0.4)
      .fillRoundedRect(
        this.scale.width / 2 - 355,
        this.scale.height / 2 - 150,
        700,
        300,
        80,
      );

    this.add
      .text(this.scale.width / 2, this.scale.height / 2, "PLAY", {
        fontFamily: "Audiowide",
        fontSize: "190px",
        fontStyle: "bold",
        color: "#8c40d3",
        stroke: "#311649c2",
        strokeThickness: 10,
      })
      .setOrigin(0.5)
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("DifficultyScene");
      });

    this.input.keyboard.once("keydown-ENTER", () => {
      this.scene.start("DifficultyScene");
    });
  }
}
