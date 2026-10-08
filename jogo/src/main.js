// Configuration
import config from "./config.js";

// First scenes
import PreloadScene from "./preload.js";
import GamepadInput from "./gamepadInput.js";
import PlayScene from "./scenes/play.js";
import DifficultyScene from "./scenes/difficulty.js";

// Easy, Medium and Hard Scenes
import EasyScene from "./scenes/easy-songs.js";
import ResultScene from "./scenes/results/results.js";
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

// Low - Train
import LowScene from "./scenes/songs-medium/low.js";
import LowGameScene from "./scenes/songs-medium/gameplay/low-game.js";

// Tiktok - Kesha
import TiktokScene from "./scenes/songs-medium/tiktok.js";
import TiktokGameScene from "./scenes/songs-medium/gameplay/tiktok-game.js";

// Back In Black - AC/DC
import BackInBlackScene from "./scenes/songs-medium/back-in-black.js";
import BackInBlackGameScene from "./scenes/songs-medium/gameplay/back-in-black-game.js";

// We Will Rock You - Queen
import WeWillRockYouScene from "./scenes/songs-medium/we-will-rock-you.js";
import WeWillRockYouGameScene from "./scenes/songs-medium/gameplay/we-will-rock-you-game.js";

// Temperature - Sean
import TemperatureScene from "./scenes/songs-medium/temperature.js";
import TemperatureGameScene from "./scenes/songs-medium/gameplay/temperature-game.js";

// Highway to Hell - AC/DC
import HighwayScene from "./scenes/songs-medium/highway-to-hell.js";
import HighwayGameScene from "./scenes/songs-medium/gameplay/highway-to-hell-game.js";

// Danza Kuduro - Don Omar
import DanzaKuduroScene from "./scenes/songs-medium/danza-kuduro.js";
import DanzaKuduroGameScene from "./scenes/songs-medium/gameplay/danza-kuduro-game.js";

// Chicago - Michael Jackson
import ChicagoScene from "./scenes/songs-medium/chicago.js";
import ChicagoGameScene from "./scenes/songs-medium/gameplay/chicago-game.js";

// Sexy Back - Justin Timberlake
import SexyBackScene from "./scenes/songs-medium/sexy-back.js";
import SexyBackGameScene from "./scenes/songs-medium/gameplay/sexy-back-game.js";

// Right Round - Kesha
import RightRoundScene from "./scenes/songs-medium/right-round.js";
import RightRoundGameScene from "./scenes/songs-medium/gameplay/right-round-game.js";

// Yeah - Usher
import YeahScene from "./scenes/songs-hard/yeah.js";
import YeahGameScene from "./scenes/songs-hard/gameplay/yeah-game.js";

// Beat It - Michael Jackson
import BeatItScene from "./scenes/songs-hard/beat-it.js";
import BeatItGameScene from "./scenes/songs-hard/gameplay/beat-it-game.js";

// I Was Made for Lovin You - Kiss
import LovinYouScene from "./scenes/songs-hard/lovin-you.js";
import LovinYouGameScene from "./scenes/songs-hard/gameplay/lovin-you-game.js";

// Poker Face - Lady Gaga
import PokerFaceScene from "./scenes/songs-hard/poker-face.js";
import PokerFaceGameScene from "./scenes/songs-hard/gameplay/poker-face-game.js";

// Crazy In Love - Beyoncé
import CrazyInLoveScene from "./scenes/songs-hard/crazy-in-love.js";
import CrazyInLoveGameScene from "./scenes/songs-hard/gameplay/crazy-in-love-game.js";

// Bad Romance - Lady Gaga
import BadRomanceScene from "./scenes/songs-hard/bad-romance.js";
import BadRomanceGameScene from "./scenes/songs-hard/gameplay/bad-rom-game.js";

// S&M - Rihanna
import SMScene from "./scenes/songs-hard/sm.js";
import SMGameScene from "./scenes/songs-hard/gameplay/sm-game.js";

// Bohemian Rhapsody - Queen
import BohemianRhapsodyScene from "./scenes/songs-hard/bohemian-rhapsody.js";
import BohemianRhapsodyGameScene from "./scenes/songs-hard/gameplay/bohemian-rhapsody-game.js";

// Cherry Pie - Warrant
import CherryPieScene from "./scenes/songs-hard/cherry-pie.js";
import CherryPieGameScene from "./scenes/songs-hard/gameplay/cherry-pie-game.js";

// Hotel Room - Pitbull
import HotelRoomScene from "./scenes/songs-hard/hotel-room.js";
import HotelRoomGameScene from "./scenes/songs-hard/gameplay/hotel-room-game.js";

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
    this.scene.add("ResultScene", ResultScene);
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

    // Low - Train
    this.scene.add("LowScene", LowScene);
    this.scene.add("LowGameScene", LowGameScene);

    // Tiktok - Kesha
    this.scene.add("TiktokScene", TiktokScene);
    this.scene.add("TiktokGameScene", TiktokGameScene);

    // Back In Black - AC/DC
    this.scene.add("BackInBlackScene", BackInBlackScene);
    this.scene.add("BackInBlackGameScene", BackInBlackGameScene);

    // We Will Rock You - Queen
    this.scene.add("WeWillRockYouScene", WeWillRockYouScene);
    this.scene.add("WeWillRockYouGameScene", WeWillRockYouGameScene);

    // Temperature - Sean
    this.scene.add("TemperatureScene", TemperatureScene);
    this.scene.add("TemperatureGameScene", TemperatureGameScene);

    // Highway to Hell - AC/DC
    this.scene.add("HighwayScene", HighwayScene);
    this.scene.add("HighwayGameScene", HighwayGameScene);

    // Danza Kuduro - Don Omar
    this.scene.add("DanzaKuduroScene", DanzaKuduroScene);
    this.scene.add("DanzaKuduroGameScene", DanzaKuduroGameScene);

    // Chicago - Michael Jackson
    this.scene.add("ChicagoScene", ChicagoScene);
    this.scene.add("ChicagoGameScene", ChicagoGameScene);

    // Sexy Back - Justin Timberlake
    this.scene.add("SexyBackScene", SexyBackScene);
    this.scene.add("SexyBackGameScene", SexyBackGameScene);

    // Right Round - Kesha
    this.scene.add("RightRoundScene", RightRoundScene);
    this.scene.add("RightRoundGameScene", RightRoundGameScene);

    // Yeah - Usher
    this.scene.add("YeahScene", YeahScene);
    this.scene.add("YeahGameScene", YeahGameScene);

    // Beat It - Michael Jackson
    this.scene.add("BeatItScene", BeatItScene);
    this.scene.add("BeatItGameScene", BeatItGameScene);

    // I Was Made for Lovin You - Kiss
    this.scene.add("LovinYouScene", LovinYouScene);
    this.scene.add("LovinYouGameScene", LovinYouGameScene);

    // Poker Face - Lady Gaga
    this.scene.add("PokerFaceScene", PokerFaceScene);
    this.scene.add("PokerFaceGameScene", PokerFaceGameScene);

    // Crazy In Love - Beyoncé
    this.scene.add("CrazyInLoveScene", CrazyInLoveScene);
    this.scene.add("CrazyInLoveGameScene", CrazyInLoveGameScene);

    // Bad Romance - Lady Gaga
    this.scene.add("BadRomanceScene", BadRomanceScene);
    this.scene.add("BadRomanceGameScene", BadRomanceGameScene);

    // S&M - Rihanna
    this.scene.add("SMScene", SMScene);
    this.scene.add("SMGameScene", SMGameScene);

    // Bohemian Rhapsody - Queen
    this.scene.add("BohemianRhapsodyScene", BohemianRhapsodyScene);
    this.scene.add("BohemianRhapsodyGameScene", BohemianRhapsodyGameScene);

    // Cherry Pie - Warrant
    this.scene.add("CherryPieScene", CherryPieScene);
    this.scene.add("CherryPieGameScene", CherryPieGameScene);

    // Hotel Room - Pitbull
    this.scene.add("HotelRoomScene", HotelRoomScene);
    this.scene.add("HotelRoomGameScene", HotelRoomGameScene);

    this.scene.start("PreloadScene");
  }
}

window.onload = () => {
  const game = new Game();
};
