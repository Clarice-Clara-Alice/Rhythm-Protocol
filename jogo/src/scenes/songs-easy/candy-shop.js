window.CandyShopScene = class CandyShopScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'CandyShopScene',
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

        this.add.text(
            this.scale.width / 2,
            this.scale.height / 2,
            'Candy Shop',
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