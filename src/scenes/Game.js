import Phaser from 'phaser';
import gameState from '../model/gameState';
import levels from '../data/levels'; 
import Hero from '../entities/Hero';
import ScoreHUD from '../scenes/scoreHUD';
 

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
    this.load.tilemapTiledJSON('level-1', 'assets/tilemaps/level-01-greyBlue.json');
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
    this.load.tilemapTiledJSON('level-14', 'assets/tilemaps/level-14-as.json');
    this.load.tilemapTiledJSON('level-15', 'assets/tilemaps/level-15-sc.json');
    this.load.tilemapTiledJSON('level-16', 'assets/tilemaps/level-16-cian.json');
    this.load.tilemapTiledJSON('level-17', 'assets/tilemaps/level-17-dar.json');
    this.load.tilemapTiledJSON('level-18', 'assets/tilemaps/level-18-dar.json');
    //this.load.tilemapTiledJSON('level-19', 'assets/tilemaps/aa.json');
    //this.load.tilemapTiledJSON('level-20', 'assets/tilemaps/aa.json');
    //this.load.tilemapTiledJSON('level-1a', 'assets/tilemaps/level-1a.json');

    //this.load.image('world-1-sheet', 'assets/tilesets/world-1.png');
    this.load.spritesheet('world-1-sheet', 'assets/tilesets/world-1.png', {
      frameWidth: 32,
      frameHeight: 32,
      margin: 1,
      spacing: 2,
    });

    console.log('-- decide background');
    console.log(this.levelIndex);
    console.log(this.levelData);
    //this.decideBackground();

    //this.load.image('clouds-sheet', 'assets/tilesets/clouds.png');
    //this.load.image('clouds-sheet', 'assets/tilesets/pinkTrees.png');
    this.load.image('clouds-sheet', 'assets/tilesets/blueGrey.png');



    


    this.load.audio('jump1', ['assets/sound/jump1.wav']);
    this.load.audio('jump2', ['assets/sound/jump2.wav']);

    this.load.audio('coinChime', ['assets/sound/chime1.wav']);
    this.load.audio('deadSound', ['assets/sound/oh_no.wav']);

    this.load.spritesheet('hero-idle-sheet', 'assets/hero/idle.png', {
        frameWidth: 32,
        frameHeight: 64,
      });      
  
    //this.load.image('logo', 'assests/phase3-logo.png');
    this.load.spritesheet('hero-run-sheet', 'assets/hero/run.png', {
        frameWidth: 32,
        frameHeight: 64,      
    //endframe/startFrame are options here
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

    

   // const hero = this.add.sprite(26 + this.levelIndex * 70, 80, 'hero-run-sheet', 1);
   // hero.anims.play('hero-running');

    const loseButton = this.add.text(80, 400, 'Menu', { font: '30px Arial', fill: '#000000' });
    loseButton.setInteractive();
    loseButton.on('pointerup', this.failLevel, this);
    const winButton = this.add.text(900, 400, 'Win', { font: '30px Arial', fill: '#000000' });
    winButton.setInteractive();
    winButton.on('pointerup', this.completeLevel, this);

    // Game Code
    this.jump1 = this.sound.add('jump1', { loop: false });
    this.jump2 = this.sound.add('jump2', { loop: false }); 
    this.coinChime = this.sound.add('coinChime', { loop: false }); 
    //this.deadSound = this.sound.add('deadSound', { loop: false }); 
    this.deadSound = this.sound.add('deadSound'); 

    this.cursorKeys = this.input.keyboard.createCursorKeys();

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
    //this.cameras.main.startFollow(this.hero);   


  }

  addHero() {
    this.hero = new Hero(this, this.spawnPos.x, this.spawnPos.y);

    this.cameras.main.startFollow(this.hero);
    
    this.children.moveTo(this.hero, this.children.getIndex(this.map.getLayer('Foreground').tilemapLayer));

    const groundCollider = this.physics.add.collider(this.hero, this.map.getLayer('Ground').tilemapLayer);

    const spikesCollider = this.physics.add.overlap(this.hero, this.spikeGroup, () => {
      this.hero.kill();
    });
     
    /*
    const coinsCollider = this.physics.add.overlap(this.hero, this.coinGroup, () => { 
        console.log('--coinsCollider');  
        console.log(this.coinGroup); 
    });
    */

  const coinsCollider = this.physics.add.overlap(this.hero,  this.coinGroup, this.coinHandler, () => { 
    // this is the event handler for the overlap and it passes the two objects
    // hero and coin to coinHandler
    
    this.score += 10;
    console.log(this.score);
    this.text1.setText('Score: ' + this.score);
  });
 

    this.hero.on('died', () => {
      groundCollider.destroy();
      spikesCollider.destroy();
      this.hero.body.setCollideWorldBounds(false);
      this.cameras.main.stopFollow();
    });


  }
  
 
  
   coinHandler(hero, coin) { 
    console.log('coin.id = ' + coin.id);
    //console.log(coin)
    coin.visible = false; 
    coin.destroy();
    hero.coinChimeSound.play();
    //this.score = this.score + 10;
    console.log(this.score);
    //console.log(this.scene.score);
    //this.scoreHandler();
    
  };

 
  

  addMap() {
    console.log('this.levelIndex = ' + this.levelIndex);
    console.log('this.levelData = ' + this.levelData);
    console.log('level = ' + this.levelData.map);
    //this.map = this.make.tilemap({ key: 'level-1' });
    this.map = this.make.tilemap({ key: this.levelData.map }); 
    
    const groundTiles = this.map.addTilesetImage('world-1', 'world-1-sheet');
    const backgroundTiles = this.map.addTilesetImage('clouds', 'clouds-sheet');
    //const backgroundTiles = this.map.addTilesetImage('blueGrey', 'clouds-sheet');

    // Z-Depth occurs as the layers are created ... clouds at the back
    const backgroundLayer = this.map.createStaticLayer('Background', backgroundTiles);
    backgroundLayer.setScrollFactor(0.6);
    
    this.add.text(10, 10, this.levelData.name, { font: '48px Arial', fill: '#000000' });
    
   
    this.text1 = this.add.text(370,10, 'Score: ' + this.score, { font: '24px Arial', fill: '#000000' });
    this.text1.setScrollFactor(0);
    //text1.scrollFactor(0);
    //text1.scrollFactorY(0);

    const groundLayer = this.map.createStaticLayer('Ground', groundTiles);
    groundLayer.setCollision([1, 2, 4], true);

     //this.map.createStaticLayer('Ground', groundTiles);
     this.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
     this.physics.world.setBoundsCollision(true, true, false, true);

     this.spikeGroup = this.physics.add.group({ immovable: true, allowGravity: false });     

     this.map.getObjectLayer('Objects').objects.forEach(object => {
      if (object.name === 'Start') {
        this.spawnPos = { x: object.x, y: object.y };
      }
      if (object.gid === 7) {
        const spike = this.spikeGroup.create(object.x, object.y, 'world-1-sheet', object.gid - 1);
        spike.setOrigin(0, 1);
        spike.setSize(object.width - 10, object.height - 10);
        spike.setOffset(5, 10);
      }
    });

    this.coinGroup = this.physics.add.group({ immovable: true, allowGravity: false });
    
    let coinID = 0;
    this.map.getObjectLayer('ObjectsCoins').objects.forEach(object => {
      //console.log('--forEach');
      if (object.name === 'Start') {
        this.spawnPos = { x: object.x, y: object.y };
      }
      if (object.gid === 8) {
        const coin = this.coinGroup.create(object.x, object.y, 'world-1-sheet', object.gid - 1);
        coin.setOrigin(0, 1);
        coin.setSize(object.width - 10, object.height - 10);
        coin.setOffset(5, 10);
        // Coins are given a unique ID
        coin.id = coinID;
        coin.onOverlap = true;
        // /console.log(coin);
        console.log('coin.id = ' + coin.id); //coinID);
        coinID++;
      }
      
    });


    

   

    this.map.createStaticLayer('Foreground', groundTiles);

  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  decideBackground() {
    console.log('--decideBackground()');
    //this.load.image('clouds-sheet', 'assets/tilesets/blueGrey.png');
    var backgroundFlag = this.getRandomInt(3)
    console.log('backgroundFlag = ' + backgroundFlag);

    //if
    switch(backgroundFlag) {
        case 0:
          this.load.image('clouds-sheet', 'assets/tilesets/clouds.png');
          break;
        case 1:
          this.load.image('clouds-sheet', 'assets/tilesets/blueGrey.png');
          break;
        default:
          this.load.image('clouds-sheet', 'assets/tilesets/pinkTrees.png');
    }




  }

  failLevel() {
    this.scene.start('MenuScene');
  }
  
  completeLevel() {
    gameState.completeLevel(this.levelIndex);
    this.scene.start('MenuScene');
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