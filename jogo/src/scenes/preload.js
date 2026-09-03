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
   }

   create() {
       this.scene.start('PlayScene');
   }
};
