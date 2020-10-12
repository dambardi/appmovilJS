class Persona {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarme() {
        return "Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años";
    }
}

class Estudiante extends Persona {
    
    constructor(nombre, edad) {
        super(nombre, edad);
    }

    estudiando() {
        return "y estoy estudiando con " + this.profesor;
    }

    setProfesor(profesor) {
        this.profesor = profesor
    }
}

var alumno = new Estudiante("Damian Bardi", 33);
alumno.setProfesor("Christian")
console.log(alumno.presentarme());
console.log(alumno.estudiando());