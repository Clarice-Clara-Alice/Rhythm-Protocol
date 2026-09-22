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

        let player1Image;
        let player2Image;

        if (player1Score > player2Score) {
            player1Image = 'P1Ganha';
            player2Image = 'P2Perde';
        }

        else if (player2Score > player1Score) {
            player1Image = 'P1Perde';
            player2Image = 'P2Ganha';
        }

        else {
            player1Image = 'P1Empate';
            player2Image = 'P2Empate';
        }

        this.add.image(
            320,
            390,
            player1Image
        ).setOrigin(0.5).setScale(0.65);

        this.add.image(
            960,
            390,
            player2Image
        ).setOrigin(0.5).setScale(0.65);

        this.add.text( 
            this.scale.width / 2, 
            90, 
            'RESULTADO', 
            { 
                fontFamily: 'Audiowide', 
                fontSize: '80px', 
                fontStyle: 'bold', 
                color: '#e6e0e0' 
            } 
        ).setOrigin(0.5);

        this.add.text(
            320,
            510,
            player1Score.toString(),
            {
                fontFamily: 'Audiowide',
                fontSize: '60px',
                fontStyle: 'bold',
                color: '#e6e0e0'
            }
        ).setOrigin(0.5);

        this.add.text(
            960,
            510,
            player2Score.toString(),
            {
                fontFamily: 'Audiowide',
                fontSize: '60px',
                fontStyle: 'bold',
                color: '#e6e0e0'
            }
        ).setOrigin(0.5);
    }
};