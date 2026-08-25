const gameConfig = {

    type: Phaser.AUTO,

    pixelArt: false,

    title: 'Rhythm Protocol',

    scale: {
        parent: 'game-container',
        width: 1280,
        height: 720,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        mode: Phaser.Scale.FIT
    }
};

const game = new Phaser.Game(gameConfig);

game.scene.add('PreloadScene', PreloadScene);
game.scene.add('PlayScene', PlayScene);
game.scene.add('DifficultyScene', DifficultyScene);
game.scene.add('EasyScene', EasyScene);
game.scene.add('MediumScene', MediumScene);
game.scene.add('HardScene', HardScene);
game.scene.add('TokyoScene', TokyoScene);
game.scene.add('BillieScene', BillieScene);
game.scene.add('OTFloorScene', OTFloorScene);
game.scene.add('PumpItScene', PumpItScene);
game.scene.add('DarkHorseScene', DarkHorseScene);
game.scene.add('CandyShopScene', CandyShopScene);
game.scene.add('BeautifulScene', BeautifulScene);
game.scene.add('RichGirlScene', RichGirlScene);
game.scene.add('TokyoGameScene', TokyoGameScene);
game.scene.add('BillieGameScene', BillieGameScene);

game.scene.start('PreloadScene');