export default class HardScene extends Phaser.Scene {
  constructor() {
    super("HardScene");
  }

  create() {
    console.log("background:", this.textures.exists("background"));
    console.log("Mulher:", this.textures.exists("Mulher"));
    console.log("Dificil:", this.textures.exists("Dificil"));

    const background = this.add.image(
      this.scale.width / 2,
      this.scale.height / 2,
      "background",
    );

    background.setDisplaySize(this.scale.width, this.scale.height);

    this.add.image(1100, 390, "Mulher");
    this.add.image(515, 120, "Dificil");

    // Yeah - Usher

    const Yeah = this.add.container(275, 240);
    const YeahBack = this.add.graphics();
    YeahBack.fillStyle(0x876670, 0.4);
    YeahBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

    const YeahUsher = this.add.text(0, 0, "Yeah - Usher", {
      fontFamily: "Times New Roman",
      fontSize: "25px",
      fontStyle: "bold",
      color: "#f5d8d8",
      stroke: "#491616",
      strokeThickness: 3,
    });

    YeahUsher.setOrigin(0.5);

    Yeah.add([YeahBack, YeahUsher]);

    // Bad Romance - Lady Gaga

    const BadRomance = this.add.container(755, 240);
    const BadRomanceBack = this.add.graphics();
    BadRomanceBack.fillStyle(0x876670, 0.4);
    BadRomanceBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

    const Bad = this.add.text(0, 0, "Bad Romance - Lady Gaga", {
      fontFamily: "Times New Roman",
      fontSize: "25px",
      fontStyle: "bold",
      color: "#f5d8d8",
      stroke: "#491616",
      strokeThickness: 3,
    });

    Bad.setOrigin(0.5);

    BadRomance.add([BadRomanceBack, Bad]);

    // Beat it - Michael Jackson

    const BeatIt = this.add.container(275, 340);
    const BeatItBack = this.add.graphics();
    BeatItBack.fillStyle(0x876670, 0.4);
    BeatItBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

    const Beat = this.add.text(0, 0, "Beat It - Michael Jackson", {
      fontFamily: "Times New Roman",
      fontSize: "25px",
      fontStyle: "bold",
      color: "#f5d8d8",
      stroke: "#491616",
      strokeThickness: 3,
    });

    Beat.setOrigin(0.5);

    BeatIt.add([BeatItBack, Beat]);

    // S&M

    const SM = this.add.container(755, 340);
    const SMBack = this.add.graphics();
    SMBack.fillStyle(0x876670, 0.4);
    SMBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

    const SMText = this.add.text(0, 0, "S&M - Rihanna", {
      fontFamily: "Times New Roman",
      fontSize: "25px",
      fontStyle: "bold",
      color: "#f5d8d8",
      stroke: "#491616",
      strokeThickness: 3,
    });

    SMText.setOrigin(0.5);

    SM.add([SMBack, SMText]);

    // I was made for lovin' you

    const LovinYou = this.add.container(275, 440);
    const LovinYouBack = this.add.graphics();
    LovinYouBack.fillStyle(0x876670, 0.4);
    LovinYouBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

    const Lovin = this.add.text(0, 0, "I Was Made For Lovin You - Kiss", {
      fontFamily: "Times New Roman",
      fontSize: "25px",
      fontStyle: "bold",
      color: "#f5d8d8",
      stroke: "#491616",
      strokeThickness: 3,
    });

    Lovin.setOrigin(0.5);

    LovinYou.add([LovinYouBack, Lovin]);

    // Candy Shop - 50 Cent

    const BohemianRhapsody = this.add.container(755, 440);
    const BohemianRhapsodyBack = this.add.graphics();
    BohemianRhapsodyBack.fillStyle(0x876670, 0.4);
    BohemianRhapsodyBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

    const Bohemian = this.add.text(0, 0, "Bohemian Rhapsody - Queen", {
      fontFamily: "Times New Roman",
      fontSize: "25px",
      fontStyle: "bold",
      color: "#f5d8d8",
      stroke: "#491616",
      strokeThickness: 3,
    });

    Bohemian.setOrigin(0.5);

    BohemianRhapsody.add([BohemianRhapsodyBack, Bohemian]);

    // Poker Face - Katy Perry

    const PokerFace = this.add.container(275, 540);
    const PokerFaceBack = this.add.graphics();
    PokerFaceBack.fillStyle(0x876670, 0.4);

    PokerFaceBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

    const Poker = this.add.text(0, 0, "Poker Face - Katy Perry", {
      fontFamily: "Times New Roman",
      fontSize: "25px",
      fontStyle: "bold",
      color: "#f5d8d8",
      stroke: "#491616",
      strokeThickness: 3,
    });

    Poker.setOrigin(0.5);

    PokerFace.add([PokerFaceBack, Poker]);

    // Cherry Pie - Warrant

    const CherryPie = this.add.container(755, 540);
    const CherryPieBack = this.add.graphics();
    CherryPieBack.fillStyle(0x876670, 0.4);
    CherryPieBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

    const Cherry = this.add.text(0, 0, "Cherry Pie - Warrant", {
      fontFamily: "Times New Roman",
      fontSize: "25px",
      fontStyle: "bold",
      color: "#f5d8d8",
      stroke: "#491616",
      strokeThickness: 3,
    });

    Cherry.setOrigin(0.5);

    CherryPie.add([CherryPieBack, Cherry]);

    // Crazy In Love - Beyonce

    const CrazyInLove = this.add.container(275, 640);
    const CrazyInLoveBack = this.add.graphics();
    CrazyInLoveBack.fillStyle(0x876670, 0.4);
    CrazyInLoveBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

    const Crazy = this.add.text(0, 0, "Crazy in Love - Beyonce", {
      fontFamily: "Times New Roman",
      fontSize: "25px",
      fontStyle: "bold",
      color: "#f5d8d8",
      stroke: "#491616",
      strokeThickness: 3,
    });

    Crazy.setOrigin(0.5);

    CrazyInLove.add([CrazyInLoveBack, Crazy]);

    // Hotel Room - Pitbull

    const HotelRoom = this.add.container(755, 640);
    const HotelRoomBack = this.add.graphics();
    HotelRoomBack.fillStyle(0x876670, 0.4);

    HotelRoomBack.fillRoundedRect(-205, -42.5, 410, 85, 40);

    const Hotel = this.add.text(0, 0, "Hotel Room - Pitbull", {
      fontFamily: "Times New Roman",
      fontSize: "25px",
      fontStyle: "bold",
      color: "#f5d8d8",
      stroke: "#491616",
      strokeThickness: 3,
    });

    Hotel.setOrigin(0.5);

    HotelRoom.add([HotelRoomBack, Hotel]);

    // botões
    this.buttons = [
      [Yeah, BadRomance],

      [BeatIt, SM],

      [LovinYou, BohemianRhapsody],

      [PokerFace, CherryPie],

      [CrazyInLove, HotelRoom],
    ];

    this.selectedRow = 0;
    this.selectedColumn = 0;

    this.updateSelection();

    this.input.keyboard.on("keydown-S", () => {
      this.selectedRow++;
      if (this.selectedRow >= this.buttons.length) {
        this.selectedRow = 0;
      }
      this.updateSelection();
    });
    this.input.keyboard.on("keydown-DOWN", () => {
      this.selectedRow++;
      if (this.selectedRow >= this.buttons.length) {
        this.selectedRow = 0;
      }
      this.updateSelection();
    });

    this.input.keyboard.on("keydown-W", () => {
      this.selectedRow--;
      if (this.selectedRow < 0) {
        this.selectedRow = this.buttons.length - 1;
      }
      this.updateSelection();
    });
    this.input.keyboard.on("keydown-UP", () => {
      this.selectedRow--;
      if (this.selectedRow < 0) {
        this.selectedRow = this.buttons.length - 1;
      }
      this.updateSelection();
    });

    this.input.keyboard.on("keydown-D", () => {
      if (this.buttons[this.selectedRow][1] !== null) {
        this.selectedColumn = 1;
      }
      this.updateSelection();
    });
    this.input.keyboard.on("keydown-RIGHT", () => {
      if (this.buttons[this.selectedRow][1] !== null) {
        this.selectedColumn = 1;
      }
      this.updateSelection();
    });

    this.input.keyboard.on("keydown-A", () => {
      this.selectedColumn = 0;
      this.updateSelection();
    });
    this.input.keyboard.on("keydown-LEFT", () => {
      this.selectedColumn = 0;
      this.updateSelection();
    });

    this.input.keyboard.on("keydown-ENTER", () => {
      console.log(
        "ENTER:",
        "row =",
        this.selectedRow,
        "column =",
        this.selectedColumn,
      );

      if (this.selectedRow === 0 && this.selectedColumn === 0) {
        this.scene.start("YeahScene");
      } else if (this.selectedRow === 0 && this.selectedColumn === 1) {
        this.scene.start("BadRomanceScene");
      } else if (this.selectedRow === 1 && this.selectedColumn === 0) {
        this.scene.start("BeatItScene");
      } else if (this.selectedRow === 1 && this.selectedColumn === 1) {
        this.scene.start("SMScene");
      } else if (this.selectedRow === 2 && this.selectedColumn === 0) {
        this.scene.start("LovinYouScene");
      } else if (this.selectedRow === 2 && this.selectedColumn === 1) {
        this.scene.start("BohemianRhapsodyScene");
      } else if (this.selectedRow === 3 && this.selectedColumn === 0) {
        this.scene.start("PokerFaceScene");
      } else if (this.selectedRow === 3 && this.selectedColumn === 1) {
        this.scene.start("CherryPieScene");
      } else if (this.selectedRow === 4 && this.selectedColumn === 0) {
        this.scene.start("CrazyInLoveScene");
      } else if (this.selectedRow === 4 && this.selectedColumn === 1) {
        this.scene.start("HotelRoomScene");
      }
    });

    this.input.keyboard.on("keydown-ESC", () => {
      this.scene.start("DifficultyScene");
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

    const selectedButton = this.buttons[this.selectedRow][this.selectedColumn];
    if (selectedButton !== null) {
      selectedButton.setScale(1.15);
    }
  }
}
