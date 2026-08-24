window.HardScene = class HardScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'HardScene',
        });
    }

    create() {

        const background = this.add.image(
            this.scale.width / 2,
            this.scale.height / 2,
            'background'
        );

        background.setDisplaySize(
            this.scale.width,
            this.scale.height
        );

        this.add.image(640, 360, 'Mulher'); 
    }
};