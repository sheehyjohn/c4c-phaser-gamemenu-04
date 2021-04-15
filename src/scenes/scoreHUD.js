import Phaser from 'phaser';
  
class ScoreHUD extends Phaser.Scene{

    constructor ()
    {
        super({ key: 'ScoreHUD', active: true });
  
        this.score = 0;
    }
  
    create ()
    {
        //  Our Text object to display the Score
        let info = this.add.text(410, 10, 'Score: 0', { font: '18px Arial', fill: '#000000' });
  
        //  Grab a reference to the Game Scene
        let ourGame = this.scene.get('GameScene');
  
        //  Listen for events from it
        ourGame.events.on('addScore', function () {
  
            this.score += 10;
  
            info.setText('Score: ' + this.score);
  
        }, this);
    }
  }

  export default ScoreHUD;