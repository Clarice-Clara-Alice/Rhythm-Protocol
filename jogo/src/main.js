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
game.scene.add('OTFloorScene', OTFloorScene);
game.scene.add('BeautifulScene', BeautifulScene);
game.scene.add('BillieScene', BillieScene);
game.scene.add('RichGirlScene', RichGirlScene);
game.scene.add('SmackThatScene', SmackThatScene);
game.scene.add('CandyShopScene', CandyShopScene);
game.scene.add('DarkHorseScene', DarkHorseScene);
game.scene.add('JustDanceScene', JustDanceScene);
game.scene.add('InDaClubScene', InDaClubScene);
game.scene.add('SexyKnowItScene', SexyKnowItScene);
game.scene.add('TheFloorGameScene', TheFloorGameScene);
game.scene.add('BillieGameScene', BillieGameScene);
game.scene.add('DarkHorseGameScene', DarkHorseGameScene);
game.scene.add('SmackThatGameScene', SmackThatGameScene);
game.scene.add('BeautifulGameScene', BeautifulGameScene);
game.scene.add('RichGirlGameScene', RichGirlGameScene);
game.scene.add('InDaClubGameScene', InDaClubGameScene);
game.scene.add('SexyKnowItGameScene', SexyKnowItGameScene);
game.scene.add('JustDanceGameScene', JustDanceGameScene);
game.scene.add('CandyShopGameScene', CandyShopGameScene);
game.scene.add('LowScene', LowScene);
game.scene.add('LowGameScene', LowGameScene);
game.scene.add('TheFloorHardGameScene', TheFloorHardGameScene);
game.scene.add('OTFloorHardScene', OTFloorHardScene);
game.scene.add('EasyResultScene', EasyResultScene);

game.scene.start('PreloadScene');