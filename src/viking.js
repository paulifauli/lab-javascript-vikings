// Soldier
class Soldier {
constructor ( health, strength) { 
    this.health = health;
    this.strength= strength;
}
    attack () {
        return this.strength
    };
    receiveDamage (theDamage) {
    this.health -= theDamage
    }
}


// Viking
class Viking extends Soldier {
    constructor ( name, health, strength, ) {
        super(health, strength);
        this.name=name;
    }
    battleCry(){
        return "Odin Owns You All!"
    }

    recieveDamage(theDamage) {
      //  damageViking -= super.strength
      this.health -= theDamage;
      if (this.health >= 0) {
        return `${this.name} has received ${theDamage} of damage`
      }else{
       return `${this.name} has died in act of combat`
      }
    }

}

// Saxon
class Saxon extends Soldier{
    constructor (health, strength){
    super(health,strength)
    }
    
    recieveDamage(theDamage) {
        this.health -= theDamage;
        if (this.health > 0) {
          return `A Saxon has received ${theDamage} of damage`
        }else{
         return `A Saxon has died in combat`
        }
      }

}

// War
class War {
    constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
    };

    addViking(Viking){
     this.vikingArmy.push(Viking)
    };

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    };
   
    vikingAttack(){

        let randomSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 1));
        let randomViking = Math.floor(Math.random() * (this.vikingArmy.length - 1));

        let attackingViking = this.vikingArmy[randomViking].attack();
        let attackedSaxon = this.saxonArmy[randomSaxon].receiveDamage(attackingViking);

        if (this.vikingArmy[randomViking].attack() >= this.saxonArmy[randomSaxon].health) {
            this.saxonArmy.splice(randomSaxon, 1) // at position of randomSaxon, remove 1 item
        }

        return attackedSaxon
    }
    

    saxonAttack(){
        let randomSaxon = Math.floor(Math.random()* (this.saxonArmy.length - 1))
        let randomViking = Math.floor(Math.random()* (this.saxonArmy.length -1 ))

        let attackingSaxon = this.saxonArmy[randomSaxon].attack();
        let attackedViking = this.vikingArmy[randomViking].receiveDamage(attackingSaxon);

        if (this.saxonArmy[randomSaxon].attack() >= this.vikingArmy[randomViking].health) {
            this.vikingArmy.splice(randomViking, 1);

            return attackedViking
    }
    }

    
    showStatus() {
        if (this.saxonArmy.length <= 0) {
            return "Vikings have won the war of the century!"
        }
        if (this.vikingArmy.length <= 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        if (this.saxonArmy.length >= 0 && this.vikingArmy.length >= 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
    
}


