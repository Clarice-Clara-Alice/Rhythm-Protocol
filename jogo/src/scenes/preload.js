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
       this.load.image('facil-diff', 'assets/images/facil-diff.png');
       this.load.image('medio-diff', 'assets/images/medio-diff.png');
       this.load.image('dificil-diff', 'assets/images/dificil-diff.png');
       this.load.image('Facil', 'assets/images/Facil.png');
       this.load.image('Medio', 'assets/images/Medio.png');
       this.load.image('Dificil', 'assets/images/Dificil.png');
       this.load.image('SetaUp', 'assets/images/setaUp.png');
       this.load.image('SetaDown', 'assets/images/setaDown.png');
       this.load.image('SetaLeft', 'assets/images/setaLeft.png');
       this.load.image('SetaRight', 'assets/images/setaRight.png');
       this.load.image('P1Ganha', 'assets/images/P1Ganha.png');
       this.load.image('P2Ganha', 'assets/images/P2Ganha.png');
       this.load.image('P1Perde', 'assets/images/P1Perde.png');
       this.load.image('P2Perde', 'assets/images/P2Perde.png');
       this.load.image('P1Empate', 'assets/images/P1Empate.png');
       this.load.image('P2Empate', 'assets/images/P2Empate.png');
   }

   create() {
       this.scene.start('PlayScene');
   }
};
