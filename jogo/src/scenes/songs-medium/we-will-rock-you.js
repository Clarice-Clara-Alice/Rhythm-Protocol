window.WeWillRockYouScene = class WeWillRockYouScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'WeWillRockYouScene',
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

        cutscene.id = 'cutscene-medium';
       
        cutscene.innerHTML = `
            <img src="assets/images/1-medium.png">
            <img src="assets/images/2-medium.png">
            <img src="assets/images/3-medium.png">
            <img src="assets/images/lets-play-medium.png">
            `;

        document
            .getElementById('game-container')
            .appendChild(cutscene);

       this.time.delayedCall(8000, () => {
            cutscene.remove();
            this.scene.start('WeWillRockYouGameScene');
        });
    }
};