window.BadRomanceScene = class BadRomanceScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'BadRomanceScene',
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

        const cutscene = document.createElement('div');

        cutscene.id = 'cutscene-hard';
       
        cutscene.innerHTML = `
            <img src="assets/images/1-hard.png">
            <img src="assets/images/2-hard.png">
            <img src="assets/images/3-hard.png">
            <img src="assets/images/lets-play-hard.png">
            `;

        document
            .getElementById('game-container')
            .appendChild(cutscene);

       this.time.delayedCall(8000, () => {
            cutscene.remove();
            this.scene.start('BadRomanceGameScene');
        });
    }
};