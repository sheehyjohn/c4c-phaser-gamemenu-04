import Phaser from 'phaser'

const Defaults = {
  MaxUnlockedLevel: 0,
  timeLevel01 : 101,
  timeLevel02 : 101,
  timeLevel03 : 101,
  timeLevel04 : 101,
  timeLevel05 : 101,
  timeLevel06 : 101,
  timeLevel07 : 101,
  timeLevel08 : 101,
  timeLevel09 : 101,
  timeLevel11 : 101,
  timeLevel12 : 101,
  timeLevel13 : 101,
  timeLevel14 : 101,
  timeLevel15 : 101,
  timeLevel16 : 101,
  timeLevel17 : 101,
  timeLevel18 : 101  
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
      timeLevel05 : Defaults.timeLevel05,
      timeLevel06 : Defaults.timeLevel06,
      timeLevel07 : Defaults.timeLevel07,
      timeLevel08 : Defaults.timeLevel08,
      timeLevel09 : Defaults.timeLevel09,
      timeLevel10 : Defaults.timeLevel10,
      timeLevel11 : Defaults.timeLevel11,
      timeLevel12 : Defaults.timeLevel12,
      timeLevel13 : Defaults.timeLevel13,
      timeLevel14 : Defaults.timeLevel14,
      timeLevel15 : Defaults.timeLevel15,
      timeLevel16 : Defaults.timeLevel16,
      timeLevel17 : Defaults.timeLevel17,
      timeLevel18 : Defaults.timeLevel18,
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

    timeLevel05() {
        return this._data.timeLevel05;
    }

    timeLevel06() {
        return this._data.timeLevel06;
    }

    timeLevel07() {
        return this._data.timeLevel07;
    }

    timeLevel08() {
        return this._data.timeLevel08;
    }

    timeLevel09() {
        return this._data.timeLevel09;
    }

    timeLevel10() {
        return this._data.timeLevel10;
    }

    timeLevel10() {
        return this._data.timeLevel10;
    }
    
    timeLevel11() {
        return this._data.timeLevel11;
    }

    timeLevel12() {
        return this._data.timeLevel12;
    }

    timeLevel13() {
        return this._data.timeLevel13;
    }

    timeLevel14() {
        return this._data.timeLevel14;
    }

    timeLevel15() {
        return this._data.timeLevel15;
    }

    timeLevel16() {
        return this._data.timeLevel16;
    }

    timeLevel17() {
        return this._data.timeLevel17;
    }

    timeLevel18() {
        return this._data.timeLevel18;
    }

     
 

  completeLevel(levelIndex, time, keysTwo) {
    console.log('--completeLevel');
    console.log(levelIndex);
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
                if (time < this._data.timeLevel02 ) {
                    console.log('---level2 time ');
                    console.log(time);
                    console.log(this._data.timeLevel02);
                    this._data.timeLevel02 = time;
                }
                break;
            case 2: 
                if (time < this._data.timeLevel03 )    
                this._data.timeLevel03 = time;
                break;
            case 3: 
                console.log('---level4 time ');
                console.log(time);
                console.log(this._data.timeLevel04);
                if (time < this._data.timeLevel04 ) {
                    
                    console.log(time);
                    console.log(this._data.timeLevel04);
                this._data.timeLevel04 = time;
            }
                break;
            case 4: 
                if (time < this._data.timeLevel05 )
                this._data.timeLevel05 = time;
                break;
            case 5: 
                if (time < this._data.timeLevel06 )
                this._data.timeLevel06 = time;
                break;
            case 6: 
                if (time < this._data.timeLevel07 )
                this._data.timeLevel07 = time;
                break;
            case 7: 
                if (time < this._data.timeLevel08 )
                this._data.timeLevel08 = time;
                break;
            case 8: 
                if (time < this._data.timeLevel09 )
                this._data.timeLevel09 = time;
                break;
            case 9: 
                if (time < this._data.timeLevel10 ) {
                this._data.timeLevel10 = time;
            }
                break;
            case 10: 
                if (time < this._data.timeLevel11 )
                this._data.timeLevel11 = time;
                break;
            case 11: 
                if (time < this._data.timeLevel12 )
                this._data.timeLevel12 = time;
                break;
            case 12: 
                if (time < this._data.timeLevel13 )
                this._data.timeLevel13 = time;
                break;
            case 13: 
                if (time < this._data.timeLevel14 )
                this._data.timeLevel14 = time;
                break;
            case 14: 
                if (time < this._data.timeLevel15 )
                this._data.timeLevel15 = time;
                break;
            case 15: 
                if (time < this._data.timeLevel16 )
                this._data.timeLevel15 = time;
                break;
            case 16: 
                if (time < this._data.timeLevel17 )
                this._data.timeLevel17 = time;
                break;
            case 17: 
                if (time < this._data.timeLevel18 )
                this._data.timeLevel18 = time;
                break;
            case 18: 
                if (time < this._data.timeLevel19 )
                this._data.timeLevel19 = time;
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
