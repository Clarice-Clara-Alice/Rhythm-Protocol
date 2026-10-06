// Configuration
import config from "./config.js";

// First scenes
import PreloadScene from "./preload.js";
import GamepadInput from "./gamepadInput.js";
import PlayScene from "./scenes/play.js";
import DifficultyScene from "./scenes/difficulty.js";

// Easy, Medium and Hard Scenes
import EasyScene from "./scenes/easy-songs.js";
import EasyResultScene from "./scenes/results/easy-results.js";
import MediumScene from "./scenes/medium-songs.js";
import HardScene from "./scenes/hard-songs.js";

// On the floor - JLO
import OTFloorScene from "./scenes/songs-easy/on-the-floor.js";
import TheFloorGameScene from "./scenes/songs-easy/gameplay/floor-game.js";

// Billie Jean - MJ
import BillieScene from "./scenes/songs-easy/billie-jean.js";
import BillieGameScene from "./scenes/songs-easy/gameplay/billie-game.js";

// Smack That - Akon
import SmackThatScene from "./scenes/songs-easy/smack-that.js";
import SmackThatGameScene from "./scenes/songs-easy/gameplay/smack-game.js";

// Dark Horse - Katy Perry
import DarkHorseScene from "./scenes/songs-easy/dark-horse.js";
import DarkHorseGameScene from "./scenes/songs-easy/gameplay/darkhorse-game.js";

// In Da Club - 50 Cent
import InDaClubScene from "./scenes/songs-easy/in-da-club.js";
import InDaClubGameScene from "./scenes/songs-easy/gameplay/club-game.js";

// What Makes You Beautiful - ID
import BeautifulScene from "./scenes/songs-easy/what-makes-you-beautiful.js";
import BeautifulGameScene from "./scenes/songs-easy/gameplay/beautiful-game.js";

// Rich Girl - Eve
import RichGirlScene from "./scenes/songs-easy/rich-girl.js";
import RichGirlGameScene from "./scenes/songs-easy/gameplay/rich-game.js";

// Candy Shop - 50 Cent
import CandyShopScene from "./scenes/songs-easy/candy-shop.js";
import CandyShopGameScene from "./scenes/songs-easy/gameplay/candy-shop-game.js";

// Just Dance - Lady Gaga
import JustDanceScene from "./scenes/songs-easy/just-dance.js";
import JustDanceGameScene from "./scenes/songs-easy/gameplay/just-dance-game.js";

// Sexy and I Know It - LMFAO
import SexyKnowItScene from "./scenes/songs-easy/sexy-and-i-know-it.js";
import SexyKnowItGameScene from "./scenes/songs-easy/gameplay/sexy-game.js";

class Game extends Phaser.Game {
  constructor() {
    super(config);

    // Gamepad input
    this.gamepadInput = new GamepadInput();
    this.gamepadInput.start();

    // First scenes
    this.scene.add("PreloadScene", PreloadScene);
    this.scene.add("PlayScene", PlayScene);
    this.scene.add("DifficultyScene", DifficultyScene);
    this.scene.add("EasyScene", EasyScene);
    this.scene.add("EasyResultScene", EasyResultScene);
    this.scene.add("MediumScene", MediumScene);
    this.scene.add("HardScene", HardScene);

    // On the floor - JLO
    this.scene.add("OTFloorScene", OTFloorScene);
    this.scene.add("TheFloorGameScene", TheFloorGameScene);

    // Billie Jean - MJ
    this.scene.add("BillieScene", BillieScene);
    this.scene.add("BillieGameScene", BillieGameScene);

    // Smack That - Akon
    this.scene.add("SmackThatScene", SmackThatScene);
    this.scene.add("SmackThatGameScene", SmackThatGameScene);

    // Dark Horse - Katy Perry
    this.scene.add("DarkHorseScene", DarkHorseScene);
    this.scene.add("DarkHorseGameScene", DarkHorseGameScene);

    // In Da Club - 50 Cent
    this.scene.add("InDaClubScene", InDaClubScene);

    // What Makes You Beautiful - ID
    this.scene.add("BeautifulScene", BeautifulScene);

    // Rich Girl - Eve
    this.scene.add("RichGirlScene", RichGirlScene);
    this.scene.add("RichGirlGameScene", RichGirlGameScene);

    // Candy Shop - 50 Cent
    this.scene.add("CandyShopScene", CandyShopScene);
    this.scene.add("CandyShopGameScene", CandyShopGameScene);

    // Just Dance - Lady Gaga
    this.scene.add("JustDanceScene", JustDanceScene);
    this.scene.add("JustDanceGameScene", JustDanceGameScene);

    // Sexy and I Know It - LMFAO
    this.scene.add("SexyKnowItScene", SexyKnowItScene);
    this.scene.add("SexyKnowItGameScene", SexyKnowItGameScene);

    this.scene.start("PreloadScene");
  }
}

window.onload = () => {
  const game = new Game();
};

/*
game.scene.add("BeautifulScene", BeautifulScene);
game.scene.add("TheFloorGameScene", TheFloorGameScene);
game.scene.add("BillieGameScene", BillieGameScene);
game.scene.add("LowScene", LowScene);
game.scene.add("HighwayScene", HighwayScene);
game.scene.add("DanzaKuduroScene", DanzaKuduroScene);
game.scene.add("BackInBlackScene", BackInBlackScene);
game.scene.add("TemperatureScene", TemperatureScene);
game.scene.add("ChicagoScene", ChicagoScene);
game.scene.add("WeWillRockYouScene", WeWillRockYouScene);
game.scene.add("SexyBackScene", SexyBackScene);
game.scene.add("RightRoundScene", RightRoundScene);
game.scene.add("TiktokScene", TiktokScene);
game.scene.add("LowGameScene", LowGameScene);
game.scene.add("HighwayGameScene", HighwayGameScene);
game.scene.add("DanzaKuduroGameScene", DanzaKuduroGameScene);
game.scene.add("BackInBlackGameScene", BackInBlackGameScene);
game.scene.add("TemperatureGameScene", TemperatureGameScene);
game.scene.add("ChicagoGameScene", ChicagoGameScene);
game.scene.add("WeWillRockYouGameScene", WeWillRockYouGameScene);
game.scene.add("SexyBackGameScene", SexyBackGameScene);
game.scene.add("RightRoundGameScene", RightRoundGameScene);
game.scene.add("TiktokGameScene", TiktokGameScene);

// Músicas - difícil

game.scene.add("BadRomanceScene", BadRomanceScene);
game.scene.add("BeatItScene", BeatItScene);
game.scene.add("YeahScene", YeahScene);
game.scene.add("BohemianRhapsodyScene", BohemianRhapsodyScene);
game.scene.add("CherryPieScene", CherryPieScene);
game.scene.add("CrazyInLoveScene", CrazyInLoveScene);
game.scene.add("LovinYouScene", LovinYouScene);
game.scene.add("PokerFaceScene", PokerFaceScene);
game.scene.add("SMScene", SMScene);
game.scene.add("HotelRoomScene", HotelRoomScene);

// Gameplay - Difícil

game.scene.add("BeatItGameScene", BeatItGameScene);
game.scene.add("BadRomanceGameScene", BadRomanceGameScene);
game.scene.add("YeahGameScene", YeahGameScene);
game.scene.add("BohemianRhapsodyGameScene", BohemianRhapsodyGameScene);
game.scene.add("CherryPieGameScene", CherryPieGameScene);
game.scene.add("CrazyInLoveGameScene", CrazyInLoveGameScene);
game.scene.add("LovinYouGameScene", LovinYouGameScene);
game.scene.add("PokerFaceGameScene", PokerFaceGameScene);
game.scene.add("SMGameScene", SMGameScene);
game.scene.add("HotelRoomGameScene", HotelRoomGameScene);

// Resultado


*/
