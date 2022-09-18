// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;       
    }
    attack(){
        return this.strength;
    }
    
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }       
    }

    battleCry(){
        return "Odin Owns You All!";
    }
   
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength)
    }

    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return `A Saxon has died in combat`;
        }       
    }    
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);    
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon); 
    }
    vikingAttack(){
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        let randomViking = this.vikingArmy[randomVikingIndex];

        randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex);
        };

    }
    saxonAttack(){
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        let randomViking = this.vikingArmy[randomVikingIndex];

        randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex);
        };
    }
    showStatus(){
        if (this.saxonArmy.length == 0){
            console.log("Vikings have won the war of the century!")
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length == 0){
            console.log("Saxons have fought for their lives and survived another day...")
            return "Saxons have fought for their lives and survived another day...";
        }
        else {
            console.log("Vikings and Saxons are still in the thick of battle.")
            return "Vikings and Saxons are still in the thick of battle.";
        };
    }
}


//TEST .......................................

let ragnar = new Viking ("ragnar", 100, 100);
let bjorn = new Viking ("bjorn", 80, 120);
let floki = new Viking ("floki", 35, 80);

let sirJoe = new Saxon (60, 48);
let sirTristan = new Saxon (150, 150);
let sirThomas = new Saxon (90, 100);

let sanguinaria = new War ();

sanguinaria.addViking(ragnar);
sanguinaria.addViking(bjorn);
sanguinaria.addViking(floki);

sanguinaria.addSaxon(sirJoe);
sanguinaria.addSaxon(sirTristan);
sanguinaria.addSaxon(sirThomas);

sanguinaria.vikingAttack();
//sanguinaria.saxonAttack();
//sanguinaria.vikingAttack();
//sanguinaria.saxonAttack();
//sanguinaria.saxonAttack();
//sanguinaria.vikingAttack();

sanguinaria.showStatus();

