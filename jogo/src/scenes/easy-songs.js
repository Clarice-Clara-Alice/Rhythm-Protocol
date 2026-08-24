window.EasyScene = class EasyScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'EasyScene',
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

        this.add.image(1100, 360, 'Homem');

        // Tokyo Drift - Teriyaki Boyz

        const TokyoDrift = this.add.container(275, 140);

        const TokyoDriftBack = this.add.graphics();

        TokyoDriftBack.fillStyle(0x66877d, 0.4);

        TokyoDriftBack.fillRoundedRect(
            -205,
            -42.5,
            410,
            85,
            40
        );

        const TK = this.add.text(
            0,
            0,
            'Tokyo Drift - Teriyaki Boyz',
            {
                fontFamily: 'Times New Roman',
                fontSize: '25px',
                fontStyle: 'bold',
                color: '#d8f5df',
                stroke: '#294916',
                strokeThickness: 3
            }
        );

        TK.setOrigin(0.5);

        TokyoDrift.add([
            TokyoDriftBack,
            TK
        ]);

        // Candy Shop - 50 Cent

        const CandyShop = this.add.container(755, 140);

        const CandyShopBack = this.add.graphics();

        CandyShopBack.fillStyle(0x66877d, 0.4);

        CandyShopBack.fillRoundedRect(
            -205,
            -42.5,
            410,
            85,
            40
        );

        const Candy = this.add.text(
            0,
            0,
            'Candy Shop - 50 Cent',
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

        // On the floor - JLO

        const OnTheFloor = this.add.container(275, 240);

        const OnTheFloorBack = this.add.graphics();

        OnTheFloorBack.fillStyle(0x66877d, 0.4);

        OnTheFloorBack.fillRoundedRect(
            -205,
            -42.5,
            410,
            85,
            40
        );

        const OTF = this.add.text(
            0,
            0,
            'On The Floor - JLO',
            {
                fontFamily: 'Times New Roman',
                fontSize: '25px',
                fontStyle: 'bold',
                color: '#d8f5df',
                stroke: '#294916',
                strokeThickness: 3
            }
        );

        OTF.setOrigin(0.5);

        OnTheFloor.add([
            OnTheFloorBack,
            OTF
        ]);

        // What Makes You Beautiful - 1D
        
        const MakesYouBeautiful = this.add.container(755, 240);

        const BeautifulBack = this.add.graphics();

        BeautifulBack.fillStyle(0x66877d, 0.4);

        BeautifulBack.fillRoundedRect(
            -205,
            -42.5,
            410,
            85,
            40
        );

        const Beautiful = this.add.text(
            0,
            0,
            'What Makes You Beautiful - 1D',
            {
                fontFamily: 'Times New Roman',
                fontSize: '25px',
                fontStyle: 'bold',
                color: '#d8f5df',
                stroke: '#294916',
                strokeThickness: 3
            }
        );

        Beautiful.setOrigin(0.5);

        MakesYouBeautiful.add([
            BeautifulBack,
            Beautiful
        ]);

        // Billie Jean - Michael Jackson

        const BillieJean = this.add.container(275, 340);

        const BillieJeanBack = this.add.graphics();

        BillieJeanBack.fillStyle(0x66877d, 0.4);

        BillieJeanBack.fillRoundedRect(
            -205,
            -42.5,
            410,
            85,
            40
        );

        const Billie = this.add.text(
            0,
            0,
            'Billie Jean - Michael Jackson',
            {
                fontFamily: 'Times New Roman',
                fontSize: '25px',
                fontStyle: 'bold',
                color: '#d8f5df',
                stroke: '#294916',
                strokeThickness: 3
            }
        );

        Billie.setOrigin(0.5);

        BillieJean.add([
            BillieJeanBack,
            Billie
        ]);


        // Rich Girl - Eve
        
        const RichGirl = this.add.container(755, 340);

        const RichGirlBack = this.add.graphics();

        RichGirlBack.fillStyle(0x66877d, 0.4);

        RichGirlBack.fillRoundedRect(
            -205,
            -42.5,
            410,
            85,
            40
        );

        const Rich = this.add.text(
            0,
            0,
            'Rich Girl - Eve',
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

        // Pump It Up - Endor

        const PumpItUp = this.add.container(275, 440);

        const PumpItUpBack = this.add.graphics();

        PumpItUpBack.fillStyle(0x66877d, 0.4);

        PumpItUpBack.fillRoundedRect(
            -205,
            -42.5,
            410,
            85,
            40
        );

        const PumpIt = this.add.text(
            0,
            0,
            'Pump It Up - Endor',
            {
                fontFamily: 'Times New Roman',
                fontSize: '25px',
                fontStyle: 'bold',
                color: '#d8f5df',
                stroke: '#294916',
                strokeThickness: 3
            }
        );

        PumpIt.setOrigin(0.5);

        PumpItUp.add([
            PumpItUpBack,
            PumpIt
        ]);

        // Dark Horse - Katy Perry

        const DarkHorse = this.add.container(275, 540);

        const DarkHorseBack = this.add.graphics();

        DarkHorseBack.fillStyle(0x66877d, 0.4);

        DarkHorseBack.fillRoundedRect(
            -205,
            -42.5,
            410,
            85,
            40
        );

        const Horse = this.add.text(
            0,
            0,
            'Dark Horse - Katy Perry',
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

        // In Da Club - 50 Cent
        const InDaClub = this.add.container(275, 640);

        const InDaClubBack = this.add.graphics();

        InDaClubBack.fillStyle(0x66877d, 0.4);

        InDaClubBack.fillRoundedRect(
            -205,
            -42.5,
            410,
            85,
            40
        );

        const Club = this.add.text(
            0,
            0,
            'In Da Club - 50 Cent',
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

        // botões

        this.buttons = [

            [
                TokyoDrift,
                CandyShop
            ],

            [
                OnTheFloor,
                MakesYouBeautiful
            ],

            [
                BillieJean,
                Rich
            ],

            [
                PumpItUp,
                null
            ],

            [
                DarkHorse,
                null
            ],

            [
                InDaClub,
                null
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

                this.selectedColumn = 1;

            }

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
            ) {

                this.scene.start('TokyoScene');

            }

            else if (
                this.selectedRow === 0 &&
                this.selectedColumn === 1
            ) {

                this.scene.start('CandyShopScene');

            }

            else if (
                this.selectedRow === 1 &&
                this.selectedColumn === 0
            ) {

                this.scene.start('OTFloorScene');

            }

            else if (
                this.selectedRow === 1 &&
                this.selectedColumn === 1
            ) {

                this.scene.start('BeautifulScene');

            }

            else if (
                this.selectedRow === 2 &&
                this.selectedColumn === 0
            ) {

                this.scene.start('BillieScene');

            }

            else if (
                this.selectedRow === 2 &&
                this.selectedColumn === 1
            ) {

                this.scene.start('RichGirlScene');

            }

            else if (
                this.selectedRow === 3 &&
                this.selectedColumn === 0
            ) {

                this.scene.start('PumpItScene');

            }

            else if (
                this.selectedRow === 4 &&
                this.selectedColumn === 0
            ) {

                this.scene.start('DarkHorseScene');

            }

            else if (
                this.selectedRow === 5 &&
                this.selectedColumn === 0
            ) {

                this.scene.start('InDaClubScene');

            }

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