class Persona {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;

    }

    presentarse() {
        return "Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.";
    }
}


var persona = new Persona("Damian Bardi", 33);
console.log(persona.presentarse());


