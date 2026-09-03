window.DifficultyScene = class DifficultyScene extends Phaser.Scene {

   constructor() {
       super({
           key: 'DifficultyScene',
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
       const Facil = this.add.container(240, 360, [
           this.add.image(0, 0, 'Capsula'),
           this.add.image(0, 0, 'Homem'),
           this.add.image(5, 225, 'facil-diff')
       ]);
       const Medio = this.add.container(640, 360, [
           this.add.image(0, 0, 'Capsula'),
           this.add.image(0, 0, 'Menina'),
           this.add.image(5, 225, 'medio-diff')
       ]);
       const Dificil = this.add.container(1040, 360, [
           this.add.image(0, 0, 'Capsula'),
           this.add.image(0, 0, 'Mulher'),
           this.add.image(5, 225, 'dificil-diff')
       ]);
       this.buttons = [
           Facil,
           Medio,
           Dificil
       ];
       this.selectedButton = 0;

       this.buttons.forEach((button) => {
           button.setSize(300, 400);
           button.setInteractive();
       });

       this.updateSelection();

       this.input.keyboard.on('keydown-RIGHT', () => {
           this.selectedButton++;
           if (this.selectedButton >= this.buttons.length) {
               this.selectedButton = 0;}
           this.updateSelection();
       });

       this.input.keyboard.on('keydown-LEFT', () => {
           this.selectedButton--;
           if (this.selectedButton < 0) {
               this.selectedButton = this.buttons.length - 1;}
           this.updateSelection();
       });

       this.input.keyboard.on('keydown-ENTER', () => {
           if (this.selectedButton === 0) {
               this.scene.start('EasyScene');
           } else if (this.selectedButton === 1) {
               this.scene.start('MediumScene');
           } else if (this.selectedButton === 2) {
               this.scene.start('HardScene');
           }
       });
   }

   updateSelection() {
       this.buttons.forEach((button, index) => {
           if (index === this.selectedButton) {
               button.setScale(1.15);
           } else {
               button.setScale(1);
           }
       });
   }
};
