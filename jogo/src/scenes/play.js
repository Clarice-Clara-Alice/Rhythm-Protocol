window.PlayScene = class PlayScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'PlayScene',
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


        const buttonBackground = this.add.graphics();

        buttonBackground.fillStyle(0x631597, 0.4);

        buttonBackground.fillRoundedRect(
            this.scale.width / 2 - 355,
            this.scale.height / 2 - 150,
            700,
            300,
            80
        );


        const button = this.add.text(
            this.scale.width / 2,
            this.scale.height / 2,
            'PLAY',
            {
                fontFamily: 'Times New Roman',
                fontSize: '190px',
                fontStyle: 'bold',
                color: '#8c40d3',
                stroke: '#311649c2',
                strokeThickness: 10
            }
        );

        button.setOrigin(0.5);

        button.setInteractive();


        this.input.keyboard.on('keydown-UP', () => {

            button.setScale(1.2);

        });


        this.input.keyboard.on('keydown-DOWN', () => {

            button.setScale(1);

        });


        this.input.keyboard.on('keydown-ENTER', () => {

            this.scene.start('DifficultyScene');

        });

    }
};