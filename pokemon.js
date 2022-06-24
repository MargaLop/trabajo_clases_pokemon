class Pokemon {
    name = ""; 
    type = ""
    evolutions = [];


    /*
        Toda "clase" consta del método constructor el cual
        es llamado al momento de crear una instancia de la "clase", 
        es utilizado para establecer las propiedades o llamar 
        métodos que preparen al objeto para su uso, Este método
        es opcional, por ejemplo, en los casos que no sea necesario
        iniciar o llamar a otros métodos.
        🔖 Nota: Al igual que cualquier funcion puede recibir parametros. 
    */
    constructor(name, type, evolutions) {
        /*
            Se utiliza "this" para hacer referencia al propietario
            de la función que la está invocando o en su defecto, al
            objeto donde dicha función es un método.
        */
        this.name = name;
        this.type = type;
        this.evolutions = evolutions;
    }

    /*
        Listado de  los mêtodos de la clase, dichos metodos constan
        de logica propia de la clase.
    */
    attack() {
        // mostramos un mensaje se utuliza ` para poder
        // utilizar literalString.
        return `${this.name}, esta atacando`;
    }

    evolve(evolution = 0) {
        // Validamos que la opción exista
        const EVOLVE = this.evolutions[evolution] || "";
        let message = "No puedo evolucionar";

        // Si EVOLVE es diferente a "" cambiamos el nombre
        // del pokemon y mostramos un mensaje indicando la
        // evolución.
        if (EVOLVE) {
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;
        }

        // mostramos un mensaje
        return message;
    }
}

// Creamos las instancias mostradas en el diagrama

// Creando instancia para charmander
const Charmander = new Pokemon("Charmander", "Fire", ["Charmeleon", "Charizar"]);

// Creando instancia para Squirtle
const Squirtle = new Pokemon("Squirtle", "Water", ["Wartortle", "Blastoise"]);

/*
    Para llamar a un atributo o metodo de la cual quiera de las 
    instancias creadas, se utilizan la sintaxis.
    [Nombre de la instancia].[Nombre del método](); 
    [Nombre de la instancia].[Nombre del atributo]; 
*/

// Charmander
console.log(`${Charmander.name} es de tipo ${Charmander.type}`);
console.log(Charmander.attack());
console.log(Charmander.evolve(0));

// output Charmander
// Charmander es de tipo Fire
// Charmander, esta atacando
// Charmander esta evolucionando a Charmeleon

// Squirtle
console.log(`${Squirtle.name} es de tipo ${Squirtle.type}`);
console.log(Squirtle.attack());
console.log(Squirtle.evolve(0));

// output Squirtle
// Squirtle es de tipo Water
// Squirtle, esta atacando
// Squirtle esta evolucionando a Wartortle