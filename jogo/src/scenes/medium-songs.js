window.MediumScene = class MediumScene extends Phaser.Scene {

   constructor() {
       super({
           key: 'MediumScene',
       });
   }

   create() {

    console.log('background:', this.textures.exists('background'));
    console.log('Menina:', this.textures.exists('Menina'));
    console.log('Medio:', this.textures.exists('Medio'));
    
       const background = this.add.image(
           this.scale.width / 2,
           this.scale.height / 2,
           'background'
       );

       background.setDisplaySize(
           this.scale.width,
           this.scale.height
       );

       this.add.image(1100, 390, 'Menina');
       this.add.image(515, 120, 'Medio');

       // Low - Train

       const Low = this.add.container(275, 240);
       const LowBack = this.add.graphics();
       LowBack.fillStyle(0xFFFFE0, 0.4);
       LowBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

       const Train = this.add.text(
           0, 0, 'Low - Train',
           {
               fontFamily: 'Times New Roman',
               fontSize: '25px',
               fontStyle: 'bold',
               color: '#ffeaae',
               stroke: '#9c7813',
               strokeThickness: 3
           }
       );

       Train.setOrigin(0.5);

       Low.add([
           LowBack,
           Train
       ]);

       // Highway to Hell - AC/DC
      
       const HighwayToHell = this.add.container(755, 240);
       const HighwayToHellBack = this.add.graphics();
       HighwayToHellBack.fillStyle(0xFFFFE0, 0.4);
       HighwayToHellBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

       const HighwayToHellText = this.add.text(
           0, 0, 'Highway to Hell - AC/DC',
           {
               fontFamily: 'Times New Roman',
               fontSize: '25px',
               fontStyle: 'bold',
               color: '#ffeaae',
               stroke: '#9c7813',
               strokeThickness: 3
           }
       );

       HighwayToHellText.setOrigin(0.5);

       HighwayToHell.add([
           HighwayToHellBack,
           HighwayToHellText
       ]);

       // Tik Tok - KeSha

       const TikTok = this.add.container(275, 340);
       const TikTokBack = this.add.graphics();
       TikTokBack.fillStyle(0xFFFFE0, 0.4);
       TikTokBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

       const TikTokText = this.add.text(
           0, 0, 'Tik Tok - KeSha',
           {
               fontFamily: 'Times New Roman',
               fontSize: '25px',
               fontStyle: 'bold',
               color: '#ffeaae',
               stroke: '#9c7813',
               strokeThickness: 3
           }
       );

       TikTokText.setOrigin(0.5);

       TikTok.add([
           TikTokBack,
           TikTokText
       ]);

       // Danza Kuduro - Don Omar
      
       const DanzaKuduro = this.add.container(755, 340);
       const DanzaKuduroBack = this.add.graphics();
       DanzaKuduroBack.fillStyle(0xFFFFE0, 0.4);
       DanzaKuduroBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

       const Kuduro = this.add.text(
           0, 0, 'Danza Kuduro - Don Omar',
           {
               fontFamily: 'Times New Roman',
               fontSize: '25px',
               fontStyle: 'bold',
               color: '#ffeaae',
               stroke: '#9c7813',
               strokeThickness: 3
           }
       );

       Kuduro.setOrigin(0.5);

       DanzaKuduro.add([
           DanzaKuduroBack,
           Kuduro
       ]);

       // Back In Black - AC/DC

       const BackInBlack = this.add.container(275, 440);
       const BackInBlackBack = this.add.graphics();
       BackInBlackBack.fillStyle(0xFFFFE0, 0.4);
       BackInBlackBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

       const BackInBlackText = this.add.text(
           0, 0, 'Back In Black - AC/DC',
           {
               fontFamily: 'Times New Roman',
               fontSize: '25px',
               fontStyle: 'bold',
               color: '#ffeaae',
               stroke: '#9c7813',
               strokeThickness: 3
           }
       );

       BackInBlackText.setOrigin(0.5);

       BackInBlack.add([
           BackInBlackBack,
           BackInBlackText
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
               Low,
               HighwayToHell
           ],

           [
               TikTok,
               DanzaKuduro
           ],

           [
               BackInBlack,
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
           ) {this.scene.start('LowScene');}
           else if (
               this.selectedRow === 0 &&
               this.selectedColumn === 1
           ) {this.scene.start('BeautifulScene');}
           else if (
               this.selectedRow === 1 &&
               this.selectedColumn === 0
           ) {this.scene.start('BillieScene');}
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