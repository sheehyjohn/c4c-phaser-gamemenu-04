import Phaser from 'phaser';
import config from './config';
import BootScene from './scenes/Boot';
import PreloaderScene from './scenes/Preloader';
import MenuScene from './scenes/Menu';
import GameScene from './scenes/Game';
import ScoreHUD from './scenes/scoreHUD';

//const game = new Phaser.Game(Object.assign(config, {
new Phaser.Game(Object.assign(config, {
  scene: [BootScene, PreloaderScene, MenuScene, GameScene, ScoreHUD],
}));
