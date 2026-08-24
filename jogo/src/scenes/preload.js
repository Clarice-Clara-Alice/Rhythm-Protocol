window.PreloadScene = class PreloadScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'PreloadScene',
        });
    }

    preload() {

        this.load.image('background', 'assets/images/background.png');
        this.load.image('Capsula', 'assets/images/capsula.png');
        this.load.image('Homem', 'assets/images/homem.png');
        this.load.image('Menina', 'assets/images/menina.png');
        this.load.image('Mulher', 'assets/images/mulher.png');
    }

    create() {
        this.scene.start('PlayScene');
    }
};