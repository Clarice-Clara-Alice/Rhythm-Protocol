window.InDaClubGameScene = class InDaClubGameScene extends Phaser.Scene {

constructor() {
   super({
       key: 'InDaClubGameScene'
   });
}
preload() {
   this.load.audio(
       'inDaClubMusic',
       'assets/music/in-da-club.mp3'
   );
   this.load.json(
       'inDaClubMap',
       'maps/in-da-club.json'
   );
}

create() {
   this.targetY = 150;
   this.spawnY = 850;
   this.travelTime = 2000;
  
   this.player1Lanes = {
   left: 130,
   down: 270,
   up: 410,
   right: 550
};
   this.player2Lanes = {
   left: 730,
   down: 870,
   up: 1010,
   right: 1150
};

   this.activeNotes = [];
   this.mapIndex = 0;
   this.player1Score = 0;
   this.player1Combo = 0;
   this.player2Score = 0;
   this.player2Combo = 0;

   const background = this.add.image(
       this.scale.width / 2,
       this.scale.height / 2,
       'background'
   );

   background.setDisplaySize(
       this.scale.width,
       this.scale.height
   );

   this.createLanes();
   this.player1ScoreText = this.add.text(
       30, 30, 'P1 SCORE: 0',
       {
           fontFamily: 'Times New Roman',
           fontSize: '24px',
           color: '#7de22ac0',
           fontStyle: 'bold'
       }
   );
   this.player1ComboText = this.add.text(
       30, 70, 'P1 COMBO: 0',
       {
           fontFamily: 'Times New Roman',
           fontSize: '24px',
           color: '#7de22ac0',
           fontStyle: 'bold'
       }
   );
   this.player2ScoreText = this.add.text(
       950, 30, 'P2 SCORE: 0',
       {
           fontFamily: 'Times New Roman',
           fontSize: '24px',
           color: '#7de22ac0',
           fontStyle: 'bold'
       }
   );
   this.player2ComboText = this.add.text(
       950, 70, 'P2 COMBO: 0',
       {
           fontFamily: 'Times New Roman',
           fontSize: '24px',
           color: '#7de22ac0',
           fontStyle: 'bold'
       }
   );
   this.judgementTextP1 = this.add.text(
       315, 300,'',
       {
           fontFamily: 'Times New Roman',
           fontSize: '40px',
           fontStyle: 'bold',
           color: '#7de22ac0'
       }
   )
   .setOrigin(0.5);
   this.judgementTextP2 = this.add.text(
       1005, 300, '',
       {
           fontFamily: 'Times New Roman',
           fontSize: '40px',
           fontStyle: 'bold',
           color: '#7de22ac0'
       }
   )
   .setOrigin(0.5);
   this.mapData = this.cache.json.get(
       'inDaClubMap'
   );
   if (!this.mapData) {
       console.error(
           'ERRO: Não foi possível carregar inDaClubMap.'
       );
       return;
   }
   this.events =
       this.mapData.eventos;
   this.input.keyboard.on('keydown-A',
       () => this.hitNote(
           'left', 1));
   this.input.keyboard.on('keydown-S',
       () => this.hitNote(
           'down', 1) );
   this.input.keyboard.on('keydown-W',
       () => this.hitNote(
           'up', 1) );
   this.input.keyboard.on('keydown-D',
       () => this.hitNote(
           'right', 1) );
   this.input.keyboard.on('keydown-LEFT',
       () => this.hitNote(
           'left', 2) );
   this.input.keyboard.on('keydown-DOWN',
       () => this.hitNote(
           'down', 2));
   this.input.keyboard.on('keydown-UP',
       () => this.hitNote(
           'up', 2));
   this.input.keyboard.on('keydown-RIGHT',
       () => this.hitNote(
           'right', 2));

   this.music = this.sound.add(
       'inDaClubMusic'
   );
   this.music.play();
   this.songStartTime =
       this.time.now;
}

createLanes() {
   const directions = [
       'left',
       'down',
       'up',
       'right'
   ];
   directions.forEach((direction) => {
       const x = this.player1Lanes[direction];
       console.log('P1', direction, x);
       this.add.rectangle(
           x,
           450,
           120,
           650,
           0x111111,
           0.65
       );

       const target = this.add.text(
           x,
           this.targetY,
           this.getArrow(direction),
           {
               fontFamily: 'Arial',
               fontSize: '58px',
               color: '#00ffff'
           }
       );
       target.setOrigin(0.5);
       target.setAlpha(0.85);
   });

   directions.forEach((direction) => {
       const x = this.player2Lanes[direction];
       console.log('P2', direction, x);
       this.add.rectangle(
           x,
           450,
           120,
           650,
           0x111111,
           0.65
       );

       const target = this.add.text(
           x,
           this.targetY,
           this.getArrow(direction),
           {
               fontFamily: 'Arial',
               fontSize: '58px',
               color: '#ff00ff'
           }
       );
       target.setOrigin(0.5);
       target.setAlpha(0.85);
   });
}


update() {
   if (!this.music.isPlaying) {
       return;
   }
   const songTime =
       (this.time.now -
       this.songStartTime) / 1000;
   while (
       this.mapIndex <
       this.events.length
   ) {
       const event =
           this.events[
               this.mapIndex
           ];
       const spawnTime =
           event.tempo -
           (
               this.travelTime / 1000
           );

       if (
           songTime >= spawnTime
       ) {
           this.spawnNote(
               event, 1);
           this.spawnNote(
               event, 2);
           this.mapIndex++;}
       else {break;}
   }
   [...this.activeNotes].forEach((note) => {
       if (!note.hit &&
           songTime >
           note.time + 0.25
       ) {
           this.missNote(
               note
           );
       }
   });
}

spawnNote(
   event,
   player
) {
   const lanes =
       player === 1
           ? this.player1Lanes
           : this.player2Lanes;
   const x =
       lanes[
           event.tecla
       ];
   const note = this.add.text(
       x,
       this.spawnY,
       this.getArrow(
           event.tecla
       ),
       {
           fontFamily: 'Arial',
           fontSize: '64px',
           color:
               player === 1
                   ? '#00ffff'
                   : '#ff00ff'
       }
   )
   .setOrigin(0.5);
   note.direction =
       event.tecla;
   note.time =
       event.tempo;
   note.player =
       player;
   note.hit =
       false;
   this.activeNotes.push(
       note
   );
   this.tweens.add({
       targets:
           note,
       y:
           this.targetY,
       duration:
           this.travelTime,
       ease:
           'Linear'
   });
}
hitNote(
   direction,
   player
) {
   if (!this.music.isPlaying) {return;}
   const songTime =
       (this.time.now -
       this.songStartTime) / 1000;
   let closestNote =
       null;
   let closestDifference =
       Infinity;
   this.activeNotes.forEach((note) => {
       if (
           note.direction !==
           direction
       ) {
           return;
       }
       if (
           note.player !==
           player
       ) {return;}
       if (note.hit) {return;}
       const difference =
           Math.abs(
               songTime -
               note.time
           );
       if (
           difference <
           closestDifference
       ) {
           closestDifference =
               difference;
           closestNote =
               note;
       }
   });
   if (!closestNote) {return;}
   if (
       closestDifference <=
       0.10
   ) {
       this.registerHit(
           closestNote,
           'PERFECT!',
           100,
           player
       );
   }
   else if (
       closestDifference <=
       0.25
   ) {
       this.registerHit(
           closestNote,
           'GOOD!',
           50,
           player
       );
   }
}
registerHit(
   note,
   judgement,
   points,
   player
) {
   note.hit =
       true;
   if (player === 1) {
       this.player1Combo++;
       this.player1Score +=
           points;
       this.player1ScoreText.setText(
           'P1 SCORE: ' +
           this.player1Score
       );
       this.player1ComboText.setText(
           'P1 COMBO: ' +
           this.player1Combo
       );
   }
   else {
       this.player2Combo++;
       this.player2Score +=
           points;
       this.player2ScoreText.setText(
           'P2 SCORE: ' +
           this.player2Score
       );
       this.player2ComboText.setText(
           'P2 COMBO: ' +
           this.player2Combo
       );
   }
   this.showJudgement(
       judgement,
       player
   );
   this.tweens.killTweensOf(
       note
   );
   note.destroy();

   const index =
       this.activeNotes.indexOf(note);
   if (index !== -1) {
       this.activeNotes.splice(
           index, 1
       );
   }
}


missNote(note) {
   note.hit =
       true;
   const player =
       note.player;
   if (player === 1) {
       this.player1Combo =
           0;
       this.player1ComboText.setText(
           'P1 COMBO: 0'
       );
   }
   else {
       this.player2Combo =
           0;
       this.player2ComboText.setText(
           'P2 COMBO: 0'
       );
   }
   this.showJudgement(
       'MISS',
       player
   );
   this.tweens.killTweensOf(
       note
   );
   note.destroy();
   const index =
       this.activeNotes.indexOf(
           note
       );
   if (index !== -1) {
       this.activeNotes.splice(
           index, 1
       );
   }
}

showJudgement(
   text,
   player
) {
   const judgementText =
       player === 1
           ? this.judgementTextP1
           : this.judgementTextP2;

   judgementText.setText(
       text
   );
   judgementText.setAlpha(
       1
   );
   this.tweens.killTweensOf(
       judgementText
   );
   this.tweens.add({
       targets: judgementText,
       alpha: 0,
       duration: 500,
       delay: 300
   });
}
getArrow(direction) {
   const arrows = {
       left: '←',
       down: '↓',
       up: '↑',
       right: '→'
   };
   return arrows[
       direction
   ];
}
};