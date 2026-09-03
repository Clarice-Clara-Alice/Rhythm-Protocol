window.SmackThatScene = class SmackThatScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'SmackThatScene',
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

        cutscene.id = 'cutscene-easy';
       
        cutscene.innerHTML = `
            <img src="assets/images/1-easy.png">
            <img src="assets/images/2-easy.png">
            <img src="assets/images/3-easy.png">
            <img src="assets/images/lets-play-easy.png">
            `;

        document
            .getElementById('game-container')
            .appendChild(cutscene);

       this.time.delayedCall(8000, () => {
            cutscene.remove();
            this.scene.start('SmackThatGameScene');
        });
    }
};