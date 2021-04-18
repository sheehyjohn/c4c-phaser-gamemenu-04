import Phaser from 'phaser';
import gameState from '../model/gameState';
import levels from '../data/levels'; 
import Hero from '../entities/Hero'; 
 

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  init(data) {
    this.levelIndex = data.levelIndex;
    this.levelData = levels[this.levelIndex];
    console.log('--game.js');
    
    
    //console.log(this.levelIndex);
    //console.log(this.levelData);
  }

  preload() {

    //this.load.tilemapTiledJSON('level-1', 'assets/tilemaps/level-1.json');
    //this.load.tilemapTiledJSON('level-1', 'assets/tilemaps/level-01-js.json');
    this.load.tilemapTiledJSON('level-1', 'assets/tilemaps/level-01-js.json');
    this.load.tilemapTiledJSON('level-2', 'assets/tilemaps/level-02-js.json');
    this.load.tilemapTiledJSON('level-3', 'assets/tilemaps/level-03-js.json');
    this.load.tilemapTiledJSON('level-4', 'assets/tilemaps/level-04-js.json');
    
    
    this.load.tilemapTiledJSON('level-5', 'assets/tilemaps/level-05-hl.json');
    this.load.tilemapTiledJSON('level-6', 'assets/tilemaps/level-06-sc.json');
    this.load.tilemapTiledJSON('level-7', 'assets/tilemaps/level-07-roc.json');
    this.load.tilemapTiledJSON('level-8', 'assets/tilemaps/level-08-cos.json');
    this.load.tilemapTiledJSON('level-9', 'assets/tilemaps/level-09-joey-01.json');
    this.load.tilemapTiledJSON('level-10', 'assets/tilemaps/level-10-joey-02.json');
    this.load.tilemapTiledJSON('level-11', 'assets/tilemaps/level-11-alise.json');
    this.load.tilemapTiledJSON('level-12', 'assets/tilemaps/level-12-alise.json');
    this.load.tilemapTiledJSON('level-13', 'assets/tilemaps/level-13-as.json');
    //this.load.tilemapTiledJSON('level-13', 'assets/tilemaps/level-12-alise.json');
    /*
    
    
    
    
    
    
    
    
    this.load.tilemapTiledJSON('level-14', 'assets/tilemaps/level-14-as.json');
    this.load.tilemapTiledJSON('level-15', 'assets/tilemaps/level-15-sc.json');
    this.load.tilemapTiledJSON('level-16', 'assets/tilemaps/level-16-cian.json');
    this.load.tilemapTiledJSON('level-17', 'assets/tilemaps/level-17-dar.json');
    this.load.tilemapTiledJSON('level-18', 'assets/tilemaps/level-18-dar.json');
    //this.load.tilemapTiledJSON('level-19', 'assets/tilemaps/aa.json');
    //this.load.tilemapTiledJSON('level-20', 'assets/tilemaps/aa.json');
    //this.load.tilemapTiledJSON('level-1a', 'assets/tilemaps/level-1a.json');
*/
    //this.load.image('world-1-sheet', 'assets/tilesets/world-1.png');

    //////////////////// Sprite Sheets /////////////////////////////////
    /*
    this.load.spritesheet('world-1-sheet', 'assets/tilesets/world-1.png', {
        frameWidth: 32,
        frameHeight: 32,
        margin: 1,
        spacing: 2,
    });
    */
    let frameWidth = 32;
    let frameHeight = 32;
    let margin = 1;
    let spacing = 2;

    console.log('--------load sprite sheets------------');
    this.load.spritesheet('world-1-sheet', 'assets/tilesets/world-1.png', 
        {frameWidth: frameWidth,frameHeight: frameHeight,margin: margin,spacing: spacing,});
    this.load.spritesheet('c4c-game-scans-01-world', 'assets/tilesets/c4c-game-scans-01-world.png', 
        {frameWidth: frameWidth,frameHeight: frameHeight,margin: margin,spacing: spacing,});
    this.load.spritesheet('c4c-game-scans-02a-world', 'assets/tilesets/c4c-game-scans-02a-world.png', 
        {frameWidth: frameWidth,frameHeight: frameHeight,margin: margin,spacing: spacing,});
    this.load.spritesheet('c4c-game-scans-02b-world', 'assets/tilesets/c4c-game-scans-02b-world.png', 
        {frameWidth: frameWidth,frameHeight: frameHeight,margin: margin,spacing: spacing,}) 
    this.load.spritesheet('c4c-game-scans-03-world', 'assets/tilesets/c4c-game-scans-03-world.png', 
        {frameWidth: frameWidth,frameHeight: frameHeight,margin: margin,spacing: spacing,}) 
    
        
    

    /*
    console.log('--------------------');
    console.log('---select Background');
    
    console.log(this.levelIndex);
    switch(this.levelIndex) {
        case 0: 
            console.log('---here - level 1');
            this.load.spritesheet('world-1-sheet', 'assets/tilesets/c4c-game-scans-01-world.png', 
                {frameWidth: frameWidth,frameHeight: frameHeight,margin: margin,spacing: spacing,});
            break;
        case 1: 
            console.log('---here - level 2');
            this.load.spritesheet('world-1-sheet', 'assets/tilesets/c4c-game-scans-02-world.png', 
                {frameWidth: frameWidth,frameHeight: frameHeight,margin: margin,spacing: spacing,});
            break; 
        case 1: 
            this.load.spritesheet('world-1-sheet', 'assets/tilesets/world-1.png', 
                {frameWidth: frameWidth,frameHeight: frameHeight,margin: margin,spacing: spacing,});
            break; 
        default: 
            this.load.spritesheet('world-1-sheet', 'assets/tilesets/world-1.png', 
                {frameWidth: frameWidth,frameHeight: frameHeight,margin: margin,spacing: spacing,});    
    } 
 */

   


    ////////////////// Background /////////////////////
    this.load.image('backgroundImage01', 'assets/backgrounds/blueGrey.png'); 
    this.load.image('backgroundImage02', 'assets/backgrounds/pinkTrees.png');
    this.load.image('backgroundImage03', 'assets/backgrounds/clouds.png'); 
    
    /*
    console.log('--------------------');
    console.log('-- decide background'); 
 
    switch(this.levelIndex) {
      case 0: 
        this.load.image('backgroundImage', 'assets/tilesets/blueGrey.png'); 
        break;
      case 1: 
        this.load.image('backgroundImage', 'assets/tilesets/pinkTrees.png');
        break;
      default: 
        this.load.image('backgroundImage', 'assets/tilesets/blueGrey.png'); 
    } 
    */
 

    this.load.audio('jump1', ['assets/sound/jump1.wav']);
    this.load.audio('jump2', ['assets/sound/jump2.wav']);

    this.load.audio('coinChime', ['assets/sound/chime1.wav']);
    this.load.audio('keySound', ['assets/sound/plus_sfx.wav']);
    this.load.audio('deadSound', ['assets/sound/oh_no.wav']);

    this.load.spritesheet('hero-idle-sheet', 'assets/hero/idle.png', {
        frameWidth: 32,
        frameHeight: 64,
      });      
   
    this.load.spritesheet('hero-run-sheet', 'assets/hero/run.png', {
        frameWidth: 32,
        frameHeight: 64,       
    });

    this.load.spritesheet('hero-pivot-sheet', 'assets/hero/pivot.png', {
        frameWidth: 32,
        frameHeight: 64,
    });
  
    this.load.spritesheet('hero-jump-sheet', 'assets/hero/jump.png', {
        frameWidth: 32,
        frameHeight: 64,
    });
  
    this.load.spritesheet('hero-flip-sheet', 'assets/hero/spinjump.png', {
        frameWidth: 32,
        frameHeight: 64,
    });
  
    this.load.spritesheet('hero-fall-sheet', 'assets/hero/fall.png', {
        frameWidth: 32,
        frameHeight: 64,
    }); 
    this.load.spritesheet('hero-die-sheet', 'assets/hero/bonk.png', {
      frameWidth: 32,
      frameHeight: 64,
    });
}

  create(data) {

    this.score = 0;
    this.keyCount = 0;
    this.coinsCollected = 0;
    this.coinsTotal = 0;
    this.timerGame = 0;

    this.gameTimer = this.time.addEvent({
        delay: 1000,
        callback: function(){
          console.log('timer');
          this.timerGame++;
          this.timerText.setText('Time: ' + this.timerGame + ' s')
        },
        callbackScope: this,
        loop: true
    });
    ///////////////////// Background ///////////////////////
    switch(this.levelIndex) {
        case 0: 
            console.log('---Background - level 1');
            this.backGroundLevel = 'backgroundImage01';
            break;
        case 1: 
            console.log('---Background - level 2');
            this.backGroundLevel = 'backgroundImage02';
            break; 
        case 2: 
            this.backGroundLevel = 'backgroundImage03';
            break; 
        default: 
            this.backGroundLevel = 'backgroundImage03';
    }
    //Add Background
    this.add.tileSprite(400, 300, 1300, 600, this.backGroundLevel );  

    // Game Code
    this.jump1 = this.sound.add('jump1', { loop: false });
    this.jump2 = this.sound.add('jump2', { loop: false }); 
    this.coinChime = this.sound.add('coinChime', { loop: false });  
    this.deadSound = this.sound.add('deadSound'); 
    this.keySound = this.sound.add('keySound', { loop: false }); 

    // Enable the Keyboard Cursor Keys
    this.cursorKeys = this.input.keyboard.createCursorKeys();

    //////////////// Animation Sheets /////////////////////////////////
    this.anims.create({
        key: 'hero-idle',
        frames: this.anims.generateFrameNumbers('hero-idle-sheet'),
    }); 

    this.anims.create({
        key: 'hero-running',
        frames: this.anims.generateFrameNumbers('hero-run-sheet'),
        frameRate: 30,      // 10 times per second - Demo 100 & 1
        repeat: -1,
    });

    this.anims.create({
        key: 'hero-pivoting',
        frames: this.anims.generateFrameNumbers('hero-pivot-sheet'),
    });
  
    this.anims.create({
        key: 'hero-jumping',
        frames: this.anims.generateFrameNumbers('hero-jump-sheet'),
        frameRate: 10,
        repeat: -1,
    });
  
    this.anims.create({
        key: 'hero-flipping',
        frames: this.anims.generateFrameNumbers('hero-flip-sheet'),
        frameRate: 30,
        repeat: 0,
    });
  
    this.anims.create({
        key: 'hero-falling',
        frames: this.anims.generateFrameNumbers('hero-fall-sheet'),
        frameRate: 10,
        repeat: -1,
    });

    this.anims.create({
      key: 'hero-dead',
      frames: this.anims.generateFrameNumbers('hero-die-sheet'),
    });

    this.addMap(); 
    this.addHero();

    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels); 
 
  }

  addHero() {
    this.hero = new Hero(this, this.spawnPos.x, this.spawnPos.y);

    this.cameras.main.startFollow(this.hero);
    
    this.children.moveTo(this.hero, this.children.getIndex(this.map.getLayer('Foreground').tilemapLayer));

    const groundCollider = this.physics.add.collider(this.hero, this.map.getLayer('Ground').tilemapLayer);

    const spikesCollider = this.physics.add.overlap(this.hero, this.spikeGroup, () => {
      this.hero.kill();
    }); 

    const coinsCollider = this.physics.add.overlap(this.hero,  this.coinGroup, this.coinHandler, () => { 
        // this is the event handler for the overlap and it passes the two objects
        // hero and coin to coinHandler 
        this.score += 10;
        this.coinsCollected++; 
        console.log(this.coinsCollected + ' of ' + this.coinsTotal);
        console.log(this.score);
        this.text1.setText('Score: ' + this.score);
        let coinsPercent = Math.round((this.coinsCollected/this.coinsTotal)*100);
        this.coinsPercentText.setText('Coins: '+ coinsPercent +'%')
    });

  const keyCollider = this.physics.add.overlap(this.hero, this.keyGroup, this.keyHandler, () => {
    this.keyCount++;
    //console.log
    this.keyText.setText('Key: ' + this.keyCount + ' of 2 ');
    if (this.keyCount == 2) {
      console.log('--two keys - next Level');
      this.completeLevel();  
    }
  });
 

    this.hero.on('died', () => {
      groundCollider.destroy();
      spikesCollider.destroy();
      coinsCollider.destroy();
      keyCollider.destroy();
      this.hero.body.setCollideWorldBounds(false);
      this.cameras.main.stopFollow();
    });


  }
  
 
  
   coinHandler(hero, coin) { 
    console.log('coin.id = ' + coin.id); 
    coin.visible = false; 
    coin.destroy();
    hero.coinChimeSound.play(); 
    
  };

  keyHandler(hero, key) {
    console.log('key.id = ' + key.id);
    hero.keySoundSound.play();
    key.destroy();
    //hero.coinChimeSound.play(); 
  }

 
  

  addMap() {
    console.log('this.levelIndex = ' + this.levelIndex);
    //console.log('this.levelData = ' + this.levelData);
    //console.log('level = ' + this.levelData.map); 

    this.map = this.make.tilemap({ key: this.levelData.map });  

    /////////////////// SpriteSheet Based on Levels ///////////////
    switch(this.levelIndex) {
        case 0: 
            console.log('---here - level 1');
            this.levelSpriteSheet = 'c4c-game-scans-01-world';
            break;
        case 1: 
            console.log('---here - level 2');
            this.levelSpriteSheet = 'c4c-game-scans-02a-world';
            break; 
        case 2: 
            this.levelSpriteSheet = 'c4c-game-scans-02b-world';    
            break; 
        case 3: 
            this.levelSpriteSheet = 'c4c-game-scans-03-world';    
            break; 
        default: 
            this.levelSpriteSheet = 'world-1-sheet';
    }
    
    const groundTiles = this.map.addTilesetImage('world-1', this.levelSpriteSheet);  
    const groundLayer = this.map.createStaticLayer('Ground', groundTiles);
    groundLayer.setCollision([1, 2, 4], true);

    // Level Name in the Top Left Hand Corner
    this.add.text(10, 10, this.levelData.name, { font: '48px Arial', fill: '#000000' }); 
    
    this.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    this.physics.world.setBoundsCollision(true, true, false, true);

    this.spikeGroup = this.physics.add.group({ immovable: true, allowGravity: false });     

    this.map.getObjectLayer('Traps').objects.forEach(object => {
          if (object.name === 'Start') {
            this.spawnPos = { x: object.x, y: object.y };
        }
        if (object.gid === 7) {
            const spike = this.spikeGroup.create(object.x, object.y, this.levelSpriteSheet, object.gid - 1);
            spike.setOrigin(0, 1);
            spike.setSize(object.width - 10, object.height - 10);
            spike.setOffset(5, 10);
        }
    });

    this.coinGroup = this.physics.add.group({ immovable: true, allowGravity: false });
    
    let coinID = 0;
    this.map.getObjectLayer('Coins').objects.forEach(object => {
      //console.log('--forEach');
      if (object.name === 'Start') {
        this.spawnPos = { x: object.x, y: object.y };
      }
      if (object.gid === 8) {
        const coin = this.coinGroup.create(object.x, object.y, this.levelSpriteSheet, object.gid - 1);
        coin.setOrigin(0, 1);
        coin.setSize(object.width - 10, object.height - 10);
        coin.setOffset(5, 10);
        // Coins are given a unique ID
        coin.id = coinID;
        coin.onOverlap = true;
        this.coinsTotal++;
        // /console.log(coin);
       // console.log('coin.id = ' + coin.id); //coinID);
        coinID++;
      }
      
    });

    ///////////////// Keys //////////////
    this.keyGroup = this.physics.add.group({ immovable: true, allowGravity: false });
    let keyID = 0;
    this.map.getObjectLayer('Keys').objects.forEach(object => {
      console.log('--forEach-Keys');
      if (object.name === 'Start') {
        this.spawnPos = { x: object.x, y: object.y };
      }
      if (object.gid === 9) {
        const key = this.keyGroup.create(object.x, object.y, this.levelSpriteSheet, object.gid - 1);
        key.setOrigin(0, 1);
        key.setSize(object.width - 10, object.height - 10);
        key.setOffset(5, 10);
        // Coins are given a unique ID
        key.id = keyID;
        key.onOverlap = true;
        // /console.log(coin);
       // console.log('key.id = ' + key.id); //);
        keyID++;
      }
      
    });


    

    this.text1 = this.add.text(420,5, 'Score: ' + this.score, { font: '15px Arial', fill: '#000000' });
    this.text1.setScrollFactor(0);
    this.coinsPercentText = this.add.text(420,20, 'Coins: 0%', { font: '15px Arial', fill: '#000000' });
    this.coinsPercentText.setScrollFactor(0);
    this.keyText = this.add.text(420,35, 'Key: ' + this.keyCount + ' of 2 ', { font: '15px Arial', fill: '#000000' });
    this.keyText.setScrollFactor(0);
    this.timerText = this.add.text(420,50, 'Time: ' + this.timerGame + ' sec', { font: '15px Arial', fill: '#000000' });
    this.timerText.setScrollFactor(0);

    const skipButton = this.add.text(10, 10, 'Skip', { font: '15px Arial', fill: '#000000' });
    skipButton.setInteractive();
    skipButton.on('pointerup', this.completeLevel, this);
    skipButton.setScrollFactor(0);

    this.map.createStaticLayer('Foreground', groundTiles);

  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

   
  updateTimer(){
      console.log('--timer');
  }

 

  failLevel() {
    this.scene.start('MenuScene');
  }
  
  completeLevel() {
    gameState.completeLevel(this.levelIndex, this.timerGame, this.keyCount);
    //this.scene.start('MenuScene');
    this.scene.start('MenuScene', 
        {  
            dummy: "dummyText", 
            score : this.score,
            coinsCollected :this.coinsCollected,
            coinsTotal : this.coinsTotal,
            time : this.timerGame
        });
  }

  update(time, delta) {
    const cameraBottom = this.cameras.main.getWorldPoint(0, this.cameras.main.height).y;

    if (this.hero.isDead() && this.hero.getBounds().top > cameraBottom + 100) {
      this.hero.destroy();
      this.addHero()
    }
  }
}
 
export default Game;