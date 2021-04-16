import Phaser from 'phaser';
import gameState from '../model/gameState';
import levels from '../data/levels';

class Menu extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

    init(data) {
        this.dummy = data.dummy;  
        this.previousScore = data.score; 
        this.coinsCollected = data.coinsCollected;
        this.coinsTotal = data.coinsTotal;
        this.time = data.time;
    }

  preload() {}

  create(data) {
      console.log(this.dummy);
      console.log(this.previousScore);
    console.log('--menu.js - start');
    this.add.text(10, 10, `Please Select a Level`, { font: '25px Arial', fill: '#000000' });

    if (data.score > 0) {
        this.add.text(390, 10, `Previous Level`, { font: '15px Arial', fill: '#000000' });
        this.add.text(420, 25, `Score: ` + data.score, { font: '15px Arial', fill: '#000000' });
        let coinsPercent = Math.round((this.coinsCollected/this.coinsTotal)*100);
        this.add.text(420, 40, `Coins: ` + coinsPercent + '%', { font: '15px Arial', fill: '#000000' });
        this.add.text(420, 55, `Coins: ` + this.time + 's', { font: '15px Arial', fill: '#000000' });
    }

    // Add level menu buttons.
    const itemsPerRow = 5;
    for (let i = 0; i < levels.length; i ++) {
      const unlocked = i <= gameState.maxUnlockedLevel();
      const button = this.add.text(
        10 + (i % itemsPerRow) * 100, 
        75 + Math.floor(i / itemsPerRow) * 65, 
        levels[i].name, 
        {
          font: '15px Arial',
          fill: '#000000',
        }
      );
      button.alpha = unlocked ? 1 : 0.5;
      //Unlocking all levels from the start
      if (unlocked) {
        button.setInteractive();
        // When menu button is clicked, switch to game scene and pass along the index for the selected level. 
        
        button.on('pointerup', () => this.scene.start('GameScene', { levelIndex: i }));
      }
    }

  }

  update(time, delta) {}
}

export default Menu;