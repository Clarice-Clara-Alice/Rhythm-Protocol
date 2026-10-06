export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  init() {
    this.add
      .rectangle(this.game.config.width / 2, this.game.config.height / 2, 468, 32)
      .setStrokeStyle(1, 0xffffff);
    const bar = this.add.rectangle(
      this.game.config.width / 2 - 230,
      this.game.config.height / 2,
      4,
      28,
      0xffffff,
    );

    this.load.on("progress", (progress) => {
      bar.width = 4 + 460 * progress;
    });
  }

  preload() {
    this.load.setPath("./assets/");
    this.load.image("background", "./images/background.png");
    this.load.image("Capsula", "./images/capsula.png");
    this.load.image("Homem", "./images/homem.png");
    this.load.image("Menina", "./images/menina.png");
    this.load.image("Mulher", "./images/mulher.png");
    this.load.image("facil-diff", "./images/facil-diff.png");
    this.load.image("medio-diff", "./images/medio-diff.png");
    this.load.image("dificil-diff", "./images/dificil-diff.png");
    this.load.image("Facil", "./images/Facil.png");
    this.load.image("Medio", "./images/Medio.png");
    this.load.image("Dificil", "./images/Dificil.png");
    this.load.image("SetaUp", "./images/setaUp.png");
    this.load.image("SetaDown", "./images/setaDown.png");
    this.load.image("SetaLeft", "./images/setaLeft.png");
    this.load.image("SetaRight", "./images/setaRight.png");
    this.load.image("P1Ganha", "./images/P1Ganha.png");
    this.load.image("P2Ganha", "./images/P2Ganha.png");
    this.load.image("P1Perde", "./images/P1Perde.png");
    this.load.image("P2Perde", "./images/P2Perde.png");
    this.load.image("P1Empate", "./images/P1Empate.png");
    this.load.image("P2Empate", "./images/P2Empate.png");
  }

  create() {
    this.scene.start("PlayScene");
  }
}
