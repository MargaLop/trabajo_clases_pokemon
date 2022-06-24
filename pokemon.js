class Pokemon {
    name = ""; 
    type = ""
    evolutions = [];


    constructor(name, type, evolutions,symbol) {
        this.name = name;
        this.type = type;
        this.evolutions = evolutions;
        this.symbol = symbol
    }


    attack() {

        return `${this.name}, esta atacando ${this.symbol}`;

    }

    evolve(evolution = 0) {
        const EVOLVE = this.evolutions[evolution] || "";
        let message = "No puedo evolucionar";

        if (EVOLVE) {
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;
        }
        return message;
    }
}


// Creando instancia para charmander
const Charmander = new Pokemon("Charmander", "Fire", ["Charmeleon", "Charizar"],"🔥");

// Creando instancia para Squirtle
const Squirtle = new Pokemon("Squirtle", "Water", ["Wartortle", "Blastoise"],"💧");

// Charmander
console.log(`${Charmander.name} es de tipo ${Charmander.type}`);
console.log(Charmander.attack());
console.log(Charmander.evolve(0));


// Squirtle
console.log(`${Squirtle.name} es de tipo ${Squirtle.type}`);
console.log(Squirtle.attack());
console.log(Squirtle.evolve(0));
