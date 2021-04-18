import Phaser from 'phaser'

const Defaults = {
  MaxUnlockedLevel: 0,
  timeLevel01 : 101,
  timeLevel02 : 101,
  timeLevel03 : 101,
  timeLevel04 : 101,
  
};

class GameState extends Phaser.Events.EventEmitter {
  
  constructor () {
    super()
    this.Defaults = Defaults;
    this._data = {
      maxUnlockedLevel: Defaults.MaxUnlockedLevel,
      timeLevel01 : Defaults.timeLevel01,
      timeLevel02 : Defaults.timeLevel02,
      timeLevel03 : Defaults.timeLevel03,
      timeLevel04 : Defaults.timeLevel04,
      timeArray : Defaults.timeArray
    };
    this.load();
  }

  // Loads previously saved game state from local storage.
  load() {
    const saveData = JSON.parse(localStorage.getItem('save-data'));
    if (saveData) {
      this._data = saveData;
    }
  }

  // Saves current game state to local storage.
  save() {
    localStorage.setItem('save-data', JSON.stringify(this._data));
  }

  // Clears previously saved game state from local storage
  clearSavedData() {
    localStorage.clear();
  }

  maxUnlockedLevel() {
    return this._data.maxUnlockedLevel;
  }

    timeLevel01() {
        return this._data.timeLevel01;
    }

    timeLevel02() {
        return this._data.timeLevel02;
    }

    timeLevel03() {
        return this._data.timeLevel03;
    }

    timeLevel04() {
        return this._data.timeLevel04;
    }

  completeLevel(levelIndex, time, keysTwo) {
    console.log('--completeLevel');
    console.log(time);
    this._data.maxUnlockedLevel = Math.max(this._data.maxUnlockedLevel, levelIndex + 1);
    
    //Check Keys if 2 (not skip) then record time
    if (keysTwo == 2) {
    switch(levelIndex) {
            case 0:   
                if (time < this._data.timeLevel01 )  
                    this._data.timeLevel01 = time; 
                break;
            case 1: 
                if (time < this._data.timeLevel02 )
                this._data.timeLevel02 = time;
                break;
            case 2: 
                if (time < this._data.timeLevel03 )    
                this._data.timeLevel03 = time;
                break;
            case 3: 
                if (time < this._data.timeLevel04 )
                this._data.timeLevel04 = time;
                break;
            default: 
                this._data.timeLevel01 = time;
        } 
    }
    

    this.save();
    console.log(this);
  }

}

const gameState = new GameState();

export default gameState;
