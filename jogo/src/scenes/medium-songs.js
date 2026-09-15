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

       // Chicago - Michael Jackson

       const Chicago = this.add.container(755, 440);
       const ChicagoBack = this.add.graphics();
       ChicagoBack.fillStyle(0xFFFFE0, 0.4);
       ChicagoBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

       const ChicagoText = this.add.text(
           0, 0, 'Chicago - Michael Jackson',
           {
               fontFamily: 'Times New Roman',
               fontSize: '25px',
               fontStyle: 'bold',
               color: '#ffeaae',
               stroke: '#9c7813',
               strokeThickness: 3
           }
       );

       ChicagoText.setOrigin(0.5);

       Chicago.add([
           ChicagoBack,
           ChicagoText
       ]);

       // We Will Rock You - Queen

       const WeWillRockYou = this.add.container(275, 540);
       const WeWillRockYouBack = this.add.graphics();
       WeWillRockYouBack.fillStyle(0xFFFFE0, 0.4);
       WeWillRockYouBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

       const RockYouText = this.add.text(
           0, 0, 'We Will Rock You - Queen',
           {
               fontFamily: 'Times New Roman',
               fontSize: '25px',
               fontStyle: 'bold',
               color: '#ffeaae',
               stroke: '#9c7813',
               strokeThickness: 3
           }
       );

       RockYouText.setOrigin(0.5);

       WeWillRockYou.add([
           WeWillRockYouBack,
           RockYouText
       ]);

       // Sexy Back - Justin Timberlake

       const SexyBack = this.add.container(755, 540);
       const SexyBackBack = this.add.graphics();
       SexyBackBack.fillStyle(0xFFFFE0, 0.4);
       SexyBackBack.fillRoundedRect(
           -205, -42.5, 410, 85, 40
       );

       const SexyBackText = this.add.text(
           0, 0, 'Sexy Back - Justin Timberlake',
           {
               fontFamily: 'Times New Roman',
               fontSize: '25px',
               fontStyle: 'bold',
               color: '#ffeaae',
               stroke: '#9c7813',
               strokeThickness: 3
           }
       );

       SexyBackText.setOrigin(0.5);

       SexyBack.add([
           SexyBackBack,
           SexyBackText
       ]);

       // Temperature - Sean

       const Temperature = this.add.container(275, 640);
       const TemperatureBack = this.add.graphics();
       TemperatureBack.fillStyle(0xFFFFE0, 0.4);
       TemperatureBack.fillRoundedRect(
           -205, -42.5, 410, 85, 40
       );

       const TemperatureText = this.add.text(
           0, 0, 'Temperature - Sean',
           {
               fontFamily: 'Times New Roman',
               fontSize: '25px',
               fontStyle: 'bold',
               color: '#ffeaae',
               stroke: '#9c7813',
               strokeThickness: 3
           }
       );

       TemperatureText.setOrigin(0.5);

       Temperature.add([
           TemperatureBack,
           TemperatureText
       ]);

       // Right Round - KeSha

       const RightRound = this.add.container(755, 640);
       const RightRoundBack = this.add.graphics();
       RightRoundBack.fillStyle(0xFFFFE0, 0.4);
       RightRoundBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

       const RightRoundText = this.add.text(
           0, 0, 'Right Round - KeSha',
           {
               fontFamily: 'Times New Roman',
               fontSize: '25px',
               fontStyle: 'bold',
               color: '#ffeaae',
               stroke: '#9c7813',
               strokeThickness: 3
           }
       );

       RightRoundText.setOrigin(0.5);

       RightRound.add([
           RightRoundBack,
           RightRoundText
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
               Chicago
           ],

           [
               WeWillRockYou,
               SexyBack
           ],

           [
               Temperature,
               RightRound
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
           ) {this.scene.start('DanzaKuduroScene');}
           else if (
               this.selectedRow === 2 &&
               this.selectedColumn === 0
           ) {this.scene.start('SmackThatScene');}
           else if (
               this.selectedRow === 2 &&
               this.selectedColumn === 1
           ) {this.scene.start('ChicagoScene');}
           else if (
               this.selectedRow === 3 &&
               this.selectedColumn === 0
           ) {this.scene.start('WeWillRockYouScene');}
           else if (
               this.selectedRow === 3 &&
               this.selectedColumn === 1
           ) {this.scene.start('SexyBackScene');}
           else if (
               this.selectedRow === 4 &&
               this.selectedColumn === 0
           ) {this.scene.start('InDaClubScene');}
           else if (
               this.selectedRow === 4 &&
               this.selectedColumn === 1
           ) {this.scene.start('RightRoundScene');}
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