const config = {
  type: Phaser.AUTO,
  input: {
    gamepad: true,
  },
  pixelArt: false,
  scale: {
    parent: "game-container",
    width: 1280,
    height: 720,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode: Phaser.Scale.FIT,
  },
};

export default config;
