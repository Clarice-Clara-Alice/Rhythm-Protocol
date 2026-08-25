window.BillieGameScene = class BillieGameScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'BillieGameScene',
        });
    }

    preload() {

        this.load.audio(
            'billieMusic',
            'assets/music/billie-jean-michael-jackson-youtube_mT4mmhRr.mp3'
        );

        this.load.json(
            'billieMap',
            'maps/billie-jean.json'
        );

    }

    create() {

        this.targetY = 150;
        this.spawnY = 850;
        this.travelTime = 2000;

        this.player1Lanes = {
            left: 150,
            down: 300,
            up: 450,
            right: 600
        };

        this.player2Lanes = {
            left: 680,
            down: 830,
            up: 980,
            right: 1130
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
        this.createLanes();

        this.player1ScoreText = this.add.text(
            30,
            30,
            'P1 SCORE: 0',
            {
                fontFamily: 'Arial',
                fontSize: '24px',
                color: '#ffffff'
            }
        );

        this.player1ComboText = this.add.text(
            30,
            70,
            'P1 COMBO: 0',
            {
                fontFamily: 'Arial',
                fontSize: '24px',
                color: '#ffffff'
            }
        );

        this.player2ScoreText = this.add.text(
            950,
            30,
            'P2 SCORE: 0',
            {
                fontFamily: 'Arial',
                fontSize: '24px',
                color: '#ffffff'
            }
        );


        this.player2ComboText = this.add.text(
            950,
            70,
            'P2 COMBO: 0',
            {
                fontFamily: 'Arial',
                fontSize: '24px',
                color: '#ffffff'
            }
        );

        this.judgementText = this.add.text(
            640,
            250,
            '',
            {
                fontFamily: 'Arial',
                fontSize: '40px',
                fontStyle: 'bold',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5);

        this.mapData = this.cache.json.get(
            'billieMap'
        );

        this.events = this.mapData.eventos;

        this.input.keyboard.on('keydown-A', () => this.hitNote('left', 1));
        this.input.keyboard.on('keydown-S', () => this.hitNote('down', 1));
        this.input.keyboard.on('keydown-W', () => this.hitNote('up', 1));
        this.input.keyboard.on('keydown-D', () => this.hitNote('right', 1));

        this.input.keyboard.on('keydown-LEFT', () => this.hitNote('left', 2));
        this.input.keyboard.on('keydown-DOWN', () => this.hitNote('down', 2));
        this.input.keyboard.on('keydown-UP', () => this.hitNote('up', 2));
        this.input.keyboard.on('keydown-RIGHT', () => this.hitNote('right', 2));

        this.music = this.sound.add('billieMusic');
        this.music.play();
        this.songStartTime = this.time.now;

    }

    createLanes() {

        const directions = [
            'left',
            'down',
            'up',
            'right'
        ];

        directions.forEach((direction) => {

            const x =
                this.player1Lanes[direction];

            this.add.rectangle(
                x,
                430,
                140,
                720,
                0x222222,
                0.7
            );

            const target =
                this.add.text(
                    x,
                    this.targetY,
                    this.getArrow(direction),
                    {
                        fontFamily: 'Arial',
                        fontSize: '64px',
                        color: '#ffffff'
                    }
                )
                .setOrigin(0.5);


            target.setAlpha(0.7);

        });

        directions.forEach((direction) => {

            const x =
                this.player2Lanes[direction];

            this.add.rectangle(
                x,
                430,
                140,
                720,
                0x222222,
                0.7
            );

            const target =
                this.add.text(
                    x,
                    this.targetY,
                    this.getArrow(direction),
                    {
                        fontFamily: 'Arial',
                        fontSize: '64px',
                        color: '#ffffff'
                    }
                )
                .setOrigin(0.5);

            target.setAlpha(0.7);

        });

    }

    update() {

        if (!this.music.isPlaying) {return;}

        const songTime = (this.time.now - this.songStartTime) / 1000;

        while (
            this.mapIndex <
            this.events.length
        ) {

            const event =
                this.events[this.mapIndex];

            const spawnTime =
                event.tempo -
                (this.travelTime / 1000);

            if (songTime >= spawnTime) {

                this.spawnNote(event);
                this.mapIndex++;

            }

            else {

                break;

            }

        }

        this.activeNotes.forEach((note) => {

            if (
                !note.hit &&
                songTime >
                note.time + 0.25
            ) {

                this.missNote(note);

            }

        });

    }

    spawnNote(event) {
        const x1 =
            this.player1Lanes[event.tecla];

        const note1 =
            this.add.text(
                x1,
                this.spawnY,
                this.getArrow(event.tecla),
                {
                    fontFamily: 'Arial',
                    fontSize: '64px',
                    color: '#00ffff'
                }
            )
            .setOrigin(0.5);

        note1.direction = event.tecla;
        note1.time = event.tempo;
        note1.player = 1;
        note1.hit = false;
        this.activeNotes.push(note1);

        this.tweens.add({
            targets: note1,
            y: this.targetY,
            duration: this.travelTime,
            ease: 'Linear'
        });

        const x2 =
            this.player2Lanes[event.tecla];


        const note2 =
            this.add.text(
                x2,
                this.spawnY,
                this.getArrow(event.tecla),
                {
                    fontFamily: 'Arial',
                    fontSize: '64px',
                    color: '#ff00ff'
                }
            )
            .setOrigin(0.5);

        note2.direction = event.tecla;
        note2.time = event.tempo;
        note2.player = 2;
        note2.hit = false;
        this.activeNotes.push(note2);

        this.tweens.add({
            targets: note2,
            y: this.targetY,
            duration: this.travelTime,
            ease: 'Linear'
        });

    }

    hitNote(
        direction,
        player
    ) {

        if (!this.music.isPlaying) {

            return;

        }

        const songTime =
            (this.time.now - this.songStartTime) / 1000;

        let closestNote =
            null;

        let closestDifference =
            Infinity;

        this.activeNotes.forEach((note) => {

            if (
                note.direction !==
                direction
            ) {return;}

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
                'GOOD',
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
        note.hit = true;

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
            judgement
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
                index,
                1
            );

        }

    }

    missNote(note) {note.hit =
            true;

        if (
            note.player === 1
        ) {
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
            'MISS'
        );
        this.tweens.killTweensOf(
            note
        );
        note.destroy();
        const index =
            this.activeNotes.indexOf(note);
        if (index !== -1) {
            this.activeNotes.splice(
                index,
                1 );
        }
    }

    showJudgement(text) {
        this.judgementText.setText(
            text
        );
        this.judgementText.setAlpha(
            1
        );
        this.tweens.killTweensOf(
            this.judgementText
        );
        this.tweens.add({
            targets:
                this.judgementText,
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
        return arrows[direction];
    }
};