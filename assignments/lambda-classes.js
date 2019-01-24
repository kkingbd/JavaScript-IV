// CODE here for your Lambda Classes
function CharacterStats(character){
    GameObject.call(this, character);
    this.healthPoints = character.healthPoints;
    this.name = character.name;
  }
  CharacterStats.prototype = Object.create(GameObject.prototype);
  CharacterStats.prototype.takeDamage= function(){
    return `${this.name} took damage` ;
  };
  class CharacterStats{
      constructor(character){
        this.healthPoints = character.healthPoints;
        this.name = character.name;
      }
      takeDamage(){
        return `${this.name} took damage` ;
      }
  }
  function GameObject(item){
    this.createdAt = item.createdAt;
    this.dimensions = item.dimensions;
  }
  GameObject.prototype.destroy = function(){
    return `${this.name} was removed from the game.`;
  };
  class GameObject{
      constructor(item){
        this.createdAt = item.createdAt;
        this.dimensions = item.dimensions; 
      }
      destroy(){
        return `${this.name} was removed from the game.`;
      }
  }
  function Humanoid(humanoidChar){
    CharacterStats.call(this, humanoidChar);
    this.team = humanoidChar.team;
    this.weapons = humanoidChar.weapons;
    this.language = humanoidChar.language;
  }
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  Humanoid.prototype.greet= function(){
    return `${this.name} offers a greeting in ${this.language}`;
  };
  class Humanoid{
      constructor(humanoidChar){
        this.team = humanoidChar.team;
        this.weapons = humanoidChar.weapons;
        this.language = humanoidChar.language;
      }
      greet(){
        return `${this.name} offers a greeting in ${this.language}`;
      }
  }