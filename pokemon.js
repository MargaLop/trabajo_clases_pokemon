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

        return `${this.name} esta atacando ${this.symbol}`;

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


let pokeList = [
    new Pokemon("Charmander", "Fire", ["Charmeleon", "Charizar"],"🔥"),
    new Pokemon("Squirtle", "Water", ["Wartortle", "Blastoise"],"💧"),
    new Pokemon("Pichu", "Electric", ["Pikachu", "Raichu"],"⚡"),
    new Pokemon("Bulbasaur","Plant",["Ivysaur","Venusaur"],"🌿"),
];

console.log("\n");
for(let i in pokeList)
{
    let pokemon = pokeList[i]
    console.log(`${pokemon.name} es de tipo ${pokemon.type}`);
    console.log(pokemon.attack());
    console.log(pokemon.evolve(0));
    console.log("\n");
};