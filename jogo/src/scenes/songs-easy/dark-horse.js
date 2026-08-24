window.DarkHorseScene = class DarkHorseScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'DarkHorseScene',
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

        this.add.text(640, 360,
            'Dark Horse',
            {
                fontFamily: 'Times New Roman',
                fontSize: '60px',
                fontStyle: 'bold',
                color: '#8c40d3',
                stroke: '#311649c2',
                strokeThickness: 10
            }
        )

    }
};