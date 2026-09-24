window.HardScene = class HardScene extends Phaser.Scene {

   constructor() {
       super({
           key: 'HardScene',
       });
   }

   create() {

    console.log('background:', this.textures.exists('background'));
    console.log('Mulher:', this.textures.exists('Mulher'));
    console.log('Dificil:', this.textures.exists('Dificil'));
    
       const background = this.add.image(
           this.scale.width / 2,
           this.scale.height / 2,
           'background'
       );

       background.setDisplaySize(
           this.scale.width,
           this.scale.height
       );

       this.add.image(1100, 390, 'Mulher');
       this.add.image(515, 120, 'Dificil');

       // On the floor - JLO

       const OnTheFloor = this.add.container(275, 240);
       const OnTheFloorBack = this.add.graphics();
       OnTheFloorBack.fillStyle(0x66877d, 0.4);
       OnTheFloorBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

       const OTF = this.add.text(
           0, 0, 'On The Floor - JLO',
           {
               fontFamily: 'Times New Roman',
               fontSize: '25px',
               fontStyle: 'bold',
               color: '#f5dcd8',
               stroke: '#491616',
               strokeThickness: 3
           }
       );

       OTF.setOrigin(0.5);

       OnTheFloor.add([
           OnTheFloorBack,
           OTF
       ]);

       // Bad Romance - Lady Gaga
      
       const BadRomance = this.add.container(755, 240);
       const BadRomanceBack = this.add.graphics();
       BadRomanceBack.fillStyle(0x876670, 0.4);
       BadRomanceBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

       const Bad = this.add.text(
           0, 0, 'Bad Romance - Lady Gaga',
           {
               fontFamily: 'Times New Roman',
               fontSize: '25px',
               fontStyle: 'bold',
               color: '#f5d8d8',
               stroke: '#491616',
               strokeThickness: 3
           }
       );

       Bad.setOrigin(0.5);

       BadRomance.add([
           BadRomanceBack,
           Bad
       ]);

       // Beat it - Michael Jackson

       const BeatIt = this.add.container(275, 340);
       const BeatItBack = this.add.graphics();
       BeatItBack.fillStyle(0x876670, 0.4);
       BeatItBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

       const Beat = this.add.text(
           0, 0, 'Beat It - Michael Jackson',
           {
               fontFamily: 'Times New Roman',
               fontSize: '25px',
               fontStyle: 'bold',
               color: '#f5d8d8',
               stroke: '#491616',
               strokeThickness: 3
           }
       );

       Beat.setOrigin(0.5);

       BeatIt.add([
           BeatItBack,
           Beat
       ]);

       // Rich Girl - Eve
      
       const RichGirl = this.add.container(755, 340);
       const RichGirlBack = this.add.graphics();
       RichGirlBack.fillStyle(0x66877d, 0.4);
       RichGirlBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

       const Rich = this.add.text(
           0, 0, 'Rich Girl - Eve',
           {
               fontFamily: 'Times New Roman',
               fontSize: '25px',
               fontStyle: 'bold',
               color: '#d8f5df',
               stroke: '#294916',
               strokeThickness: 3
           }
       );

       Rich.setOrigin(0.5);

       RichGirl.add([
           RichGirlBack,
           Rich
       ]);

       // Smack That - Akon

       const SmackThat = this.add.container(275, 440);
       const SmackThatBack = this.add.graphics();
       SmackThatBack.fillStyle(0x66877d, 0.4);
       SmackThatBack.fillRoundedRect(
           -205, -42.5, 410, 85, 40
       );

       const Smack = this.add.text(
           0,
           0,
           'Smack That - Akon',
           {
               fontFamily: 'Times New Roman',
               fontSize: '25px',
               fontStyle: 'bold',
               color: '#d8f5df',
               stroke: '#294916',
               strokeThickness: 3
           }
       );

       Smack.setOrigin(0.5);

       SmackThat.add([
           SmackThatBack,
           Smack
       ]);

       // Candy Shop - 50 Cent

       const CandyShop = this.add.container(755, 440);
       const CandyShopBack = this.add.graphics();
       CandyShopBack.fillStyle(0x66877d, 0.4);
       CandyShopBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

       const Candy = this.add.text(
           0, 0, 'Candy Shop - 50 Cent',
           {
               fontFamily: 'Times New Roman',
               fontSize: '25px',
               fontStyle: 'bold',
               color: '#d8f5df',
               stroke: '#294916',
               strokeThickness: 3
           }
       );

       Candy.setOrigin(0.5);

       CandyShop.add([
           CandyShopBack,
           Candy
       ]);

       // Dark Horse - Katy Perry

       const DarkHorse = this.add.container(275, 540);
       const DarkHorseBack = this.add.graphics();
       DarkHorseBack.fillStyle(0x66877d, 0.4);

       DarkHorseBack.fillRoundedRect(
           -205, -42.5, 410, 85, 40
       );

       const Horse = this.add.text(
           0, 0, 'Dark Horse - Katy Perry',
           {
               fontFamily: 'Times New Roman',
               fontSize: '25px',
               fontStyle: 'bold',
               color: '#d8f5df',
               stroke: '#294916',
               strokeThickness: 3
           }
       );

       Horse.setOrigin(0.5);

       DarkHorse.add([
           DarkHorseBack,
           Horse
       ]);

       // Just Dance - Lady Gaga

       const JustDance = this.add.container(755, 540);
       const JustDanceBack = this.add.graphics();
       JustDanceBack.fillStyle(0x66877d, 0.4);
       JustDanceBack.fillRoundedRect(
           -205, -42.5, 410, 85, 40
       );

       const Dance = this.add.text(
           0, 0, 'Just Dance - Lady Gaga',
           {
               fontFamily: 'Times New Roman',
               fontSize: '25px',
               fontStyle: 'bold',
               color: '#d8f5df',
               stroke: '#294916',
               strokeThickness: 3
           }
       );

       Dance.setOrigin(0.5);

       JustDance.add([
           JustDanceBack,
           Dance
       ]);

       // In Da Club - 50 Cent

       const InDaClub = this.add.container(275, 640);
       const InDaClubBack = this.add.graphics();
       InDaClubBack.fillStyle(0x66877d, 0.4);
       InDaClubBack.fillRoundedRect(
           -205, -42.5, 410, 85, 40
       );

       const Club = this.add.text(
           0, 0, 'In Da Club - 50 Cent',
           {
               fontFamily: 'Times New Roman',
               fontSize: '25px',
               fontStyle: 'bold',
               color: '#d8f5df',
               stroke: '#294916',
               strokeThickness: 3
           }
       );

       Club.setOrigin(0.5);

       InDaClub.add([
           InDaClubBack,
           Club
       ]);

       // Sexy and I know it - LMFAO

       const SexyKnowIt = this.add.container(755, 640);
       const SexyKnowItBack = this.add.graphics();
       SexyKnowItBack.fillStyle(0x66877d, 0.4);

       SexyKnowItBack.fillRoundedRect(
           -205, -42.5, 410, 85, 40
       );

       const KnowIt = this.add.text(
           0, 0, 'Sexy and I know it - LMFAO',
           {
               fontFamily: 'Times New Roman',
               fontSize: '25px',
               fontStyle: 'bold',
               color: '#d8f5df',
               stroke: '#294916',
               strokeThickness: 3
           }
       );

       KnowIt.setOrigin(0.5);

       SexyKnowIt.add([
           SexyKnowItBack,
           KnowIt
       ]);

       // botões
       this.buttons = [

           [
               OnTheFloor,
               BadRomance
           ],

           [
               BeatIt,
               RichGirl
           ],

           [
               SmackThat,
               CandyShop
           ],

           [
               DarkHorse,
               JustDance
           ],

           [
               InDaClub,
               SexyKnowIt
           ]
       ];

       this.selectedRow = 0;
       this.selectedColumn = 0;

       this.updateSelection();

       this.input.keyboard.on('keydown-DOWN', () => {
           this.selectedRow++;
           if (this.selectedRow >= this.buttons.length) {
               this.selectedRow = 0;
           }
           this.updateSelection();
       });
       this.input.keyboard.on('keydown-UP', () => {
           this.selectedRow--;
           if (this.selectedRow < 0) {
               this.selectedRow = this.buttons.length - 1;
           }

           this.updateSelection();

       });

       this.input.keyboard.on('keydown-RIGHT', () => {

           if (this.buttons[this.selectedRow][1] !== null) {
           this.selectedColumn = 1;}
           this.updateSelection();
       });

       this.input.keyboard.on('keydown-LEFT', () => {
           this.selectedColumn = 0;
           this.updateSelection();
       });

       this.input.keyboard.on('keydown-ENTER', () => {

           if (
               this.selectedRow === 0 &&
               this.selectedColumn === 0
           ) {this.scene.start('OTFloorHardScene');}
           else if (
               this.selectedRow === 0 &&
               this.selectedColumn === 1
           ) {this.scene.start('BadRomanceScene');}
           else if (
               this.selectedRow === 1 &&
               this.selectedColumn === 0
           ) {this.scene.start('BeatItScene');}
           else if (
               this.selectedRow === 1 &&
               this.selectedColumn === 1
           ) {this.scene.start('RichGirlScene');}
           else if (
               this.selectedRow === 2 &&
               this.selectedColumn === 0
           ) {this.scene.start('SmackThatScene');}
           else if (
               this.selectedRow === 2 &&
               this.selectedColumn === 1
           ) {this.scene.start('CandyShopScene');}
           else if (
               this.selectedRow === 3 &&
               this.selectedColumn === 0
           ) {this.scene.start('DarkHorseScene');}
           else if (
               this.selectedRow === 3 &&
               this.selectedColumn === 1
           ) {this.scene.start('JustDanceScene');}
           else if (
               this.selectedRow === 4 &&
               this.selectedColumn === 0
           ) {this.scene.start('InDaClubScene');}
           else if (
               this.selectedRow === 4 &&
               this.selectedColumn === 1
           ) {this.scene.start('SexyKnowItScene');}
       });
   }

   updateSelection() {

   this.buttons.forEach((row) => {
       row.forEach((button) => {
           if (button !== null) {
               button.setScale(1);
           }
       });
   });

   const selectedButton =
       this.buttons[this.selectedRow][this.selectedColumn];
   if (selectedButton !== null) {
       selectedButton.setScale(1.15);
   }
}
};