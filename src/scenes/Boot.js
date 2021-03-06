import Phaser from 'phaser';

class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  init(data) {}

  preload() {
    // Preload splash logo to be displayed in the preloader scene.
    //this.load.image('logo', 'assets/phaser3-logo.png');
    this.load.image('logo', 'assets/c4c-2104-logo-03.png');
  }

  create(data) {
    // Start the preloader
    this.scene.start('PreloaderScene');
  }

}

export default Boot;