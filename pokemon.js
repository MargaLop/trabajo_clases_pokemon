class Pokemon {
  #name = "";
  #type = "";
  #evolutions = [];
  #symbol =""
  #stamina = 0;
  #evolutionState = 0;
  #healthPoints = 0;


  constructor(name, type, evolutions,symbol) {
    this.#name = name;
    this.#type = type;
    this.#evolutions = evolutions;
    this.#symbol = symbol;
    this.#stamina = 5;
    this.#evolutionState = 0;
    this.#healthPoints = 100;

  }
  description(){
    return `${this.#name} es de tipo ${this.#type} y le queda ${this.#stamina} energia`
  }
 
  
  attack() {
    let atk;

    if (this.#stamina <= 0) {
        atk = `${this.#name} esta cansado y no puede atacar`;
        this.#recibirDano()

    } else {
        this.#stamina -= 1;

        if (this.#stamina == 1) {
            this.#evolve();
        }

        if (this.#stamina == 0) {
            this.#cansarse();
        }

        atk = `${this.#name} esta atacando`;
        if (this.#symbol !== null) {
            atk += ` con ${this.#symbol}`;
        }
        atk += ` queda ${this.#stamina} energia`;
    }

    return atk;
}
 
  #evolve(evolution = 0) {
  this.#evolutionState += evolution;
  this.#evolutionState += 1;

  if (this.#evolutionState >= this.#evolutions.length) {
      this.#evolutionState = this.#evolutions.length;
  }

  const EVOLVE = this.#evolutions[this.#evolutionState - 1] || "";
  let message = "No puedo evolucionar";

  if (EVOLVE) {
    this.#healthPoints += 100;
    message = `${this.#name} esta evolucionando a ${EVOLVE} su vida aaumentando 100hp. VIDA ACTAUAL:${this.#healthPoints}hp`;
    this.#name = EVOLVE;

  }
  console.log(message);
  }

  #recibirDano(){
    //si su estamina es baja baja la vida
    if (this.#stamina == 0){
        this.#healthPoints -=10
        console.log(`${this.#name} esta cansado y su vida est bajando VIDA ACTAUAL:${this.#healthPoints}hp`);
    
    } else if(this.#stamina == 0 && this.#healthPoints == 70){
        this.#healthPoints -=15
        console.log(`${this.#name} esta MUY MUY cansado y su vida esta bajando MUY MUY rapido. VIDA ACTAUAL:${this.#healthPoints}hp`);
    }
  }
  #cansarse() {
      console.log(`${this.#name} esta cansado este es su ultimo ataque`);
  }
  }
  
  // instacias
  let pokelist = [
      new Pokemon("Charmander", "Fire", ["Charmeleon", "Charizar"],"🔥"),
      new Pokemon("Squirtle", "Water", ["Wartortle", "Blastoise"],"💧"),
      new Pokemon("Pichu", "Electric", ["Pikachu", "Raichu"],"⚡"),
      new Pokemon("Bulbasaur","Plant",["Ivysaur","Venusaur"],"🌿")
  ];
  
  console.log("\n");
  //for(let i in pokelist)
//   {
//     let pokemon = pokelist[i];
//     console.log(pokemon.description());
//     console.log(pokemon.attack());
//     console.log("\n");
//   };
  
console.log(pokelist[1].attack());
console.log(pokelist[1].attack());
console.log(pokelist[1].attack());
console.log(pokelist[1].attack());
console.log(pokelist[1].attack());
console.log(pokelist[1].attack());
console.log(pokelist[1].attack());
