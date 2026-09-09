window.EasyResultScene = class EasyResultScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'EasyResultScene'
        });
    }

    create(data) {

        const player1Score =
            data.player1Score || 0;

        const player2Score =
            data.player2Score || 0;

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
            90,
            'RESULTADO',
            {
                fontFamily: 'Times New Roman',
                fontSize: '80px',
                fontStyle: 'bold',
                color: '#6ec71ba8'
            }
        ).setOrigin(0.5);

        let player1Result;
        let player2Result;

        if (player1Score > player2Score) {

            player1Result = 'GANHADOR';
            player2Result = 'PERDEDOR';

        }
        else if (player2Score > player1Score) {

            player1Result = 'PERDEDOR';
            player2Result = 'GANHADOR';

        }
        else {

            player1Result = 'EMPATE';
            player2Result = 'EMPATE';

        }

        this.add.rectangle(320, 390, 500, 430, 0x111111, 0.85);

        this.add.text(
            320, 230, 'PLAYER 1',
            {
                fontFamily: 'Times New Roman',
                fontSize: '42px',
                fontStyle: 'bold',
                color: '#00ffff'
            }
        ).setOrigin(0.5);

        this.add.text(
            320, 330, player1Result,
            {
                fontFamily: 'Times New Roman',
                fontSize: '48px',
                fontStyle: 'bold',
                color: '#00ffff'
            }
        ).setOrigin(0.5);

        this.add.text(
            320, 450, 'PONTUAÇÃO',
            {
                fontFamily: 'Times New Roman',
                fontSize: '28px',
                color: '#00ffff'
            }
        ).setOrigin(0.5);

        this.add.text(
            320, 510, player1Score.toString(),
            {
                fontFamily: 'Arial',
                fontSize: '60px',
                fontStyle: 'bold',
                color: '#00ffff'
            }
        ).setOrigin(0.5);

        this.add.rectangle(960, 390, 500, 430, 0x111111, 0.85);

        this.add.text(
            960, 230, 'PLAYER 2',
            {
                fontFamily: 'Times New Roman',
                fontSize: '42px',
                fontStyle: 'bold',
                color: '#ff00ff'
            }
        ).setOrigin(0.5);

        this.add.text(
            960, 330, player2Result,
            {
                fontFamily: 'Times New Roman',
                fontSize: '48px',
                fontStyle: 'bold',
                color: '#ff00ff'
            }
        ).setOrigin(0.5);

        this.add.text(
            960, 450, 'PONTUAÇÃO',
            {
                fontFamily: 'Times New Roman',
                fontSize: '28px',
                color: '#ff00ff'
            }
        ).setOrigin(0.5);

        this.add.text(
            960, 510,  player2Score.toString(),
            {
                fontFamily: 'Arial',
                fontSize: '60px',
                fontStyle: 'bold',
                color: '#ff00ff'
            }
        ).setOrigin(0.5);
    }
};