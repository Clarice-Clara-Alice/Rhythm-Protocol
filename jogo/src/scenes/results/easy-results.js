export default class ResultScene extends Phaser.Scene {
  constructor() {
    super("EasyResultScene");
  }

  create(data) {
    const player1Score = data.player1Score || 0;

    const player2Score = data.player2Score || 0;

    const background = this.add.image(
      this.scale.width / 2,
      this.scale.height / 2,
      "background",
    );

    background.setDisplaySize(this.scale.width, this.scale.height);

    let player1Image;
    let player2Image;

    if (player1Score > player2Score) {
      player1Image = "P1Ganha";
      player2Image = "P2Perde";
    } else if (player2Score > player1Score) {
      player1Image = "P1Perde";
      player2Image = "P2Ganha";
    } else {
      player1Image = "P1Empate";
      player2Image = "P2Empate";
    }

    this.add.image(320, 450, player1Image).setOrigin(0.5).setScale(0.65);

    this.add.image(960, 450, player2Image).setOrigin(0.5).setScale(0.65);

    this.add
      .text(this.scale.width / 2, 90, "RESULTADO", {
        fontFamily: "Audiowide",
        fontSize: "80px",
        fontStyle: "bold",
        color: "#e6e0e0",
      })
      .setOrigin(0.5);

    this.add
      .text(this.scale.width / 2, 175, "Enter = Reiniciar", {
        fontFamily: "Audiowide",
        fontSize: "40px",
        fontStyle: "bold",
        color: "#e6e0e0",
      })
      .setOrigin(0.5);

    this.add
      .text(320, 570, player1Score.toString(), {
        fontFamily: "Audiowide",
        fontSize: "60px",
        fontStyle: "bold",
        color: "#e6e0e0",
      })
      .setOrigin(0.5);

    this.add
      .text(960, 570, player2Score.toString(), {
        fontFamily: "Audiowide",
        fontSize: "60px",
        fontStyle: "bold",
        color: "#e6e0e0",
      })
      .setOrigin(0.5);

    this.input.keyboard.on("keydown-ENTER", () => {
      this.resetGameData();
      this.scene.start("PlayScene");
    });
  }

  resetGameData() {
    window.player1Score = 0;
    window.player2Score = 0;

    window.player1Combo = 0;
    window.player2Combo = 0;

    window.mapIndex = 0;
    window.activeNotes = [];
  }
}
