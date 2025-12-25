// Clase Alumno
class Alumno {
    constructor(nombre, edad, carrera) {
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Carrera: ${this.carrera}`);
    }
}

// Ejemplo de uso Clase Alumno
const alumno1 = new Alumno("Rosario Santos", 25, "Informática");
alumno1.mostrarInfo();


// Clase Banda Musical
class BandaMusical {
    constructor(nombre, genero, integrantes, discos) {
        this.nombre = nombre;
        this.genero = genero;
        this.integrantes = integrantes;
        this.discos = discos;
    }

    mostrarInfo() {
        console.log(`Banda: ${this.nombre}, Género: ${this.genero}, Integrantes: ${this.integrantes}`);
    }

    listarDiscos() {
        console.log("Discos:", this.discos.join(", "));
    }
}

// Ejemplo de uso Clase Banda Musical
const miBanda = new BandaMusical("Aerosmith", "Rock", ["Steven Tyler", "Joe Perry", "Tom Hamilton"], ["Get a Grip", "Rocks", "Toys in the Attic"]);
miBanda.mostrarInfo();
miBanda.listarDiscos();


// Clase Perro
class Perro {
    constructor(nombre, raza, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Raza: ${this.raza}, Edad: ${this.edad}`);
    }

    ladrar() {
        console.log("¡Guau guau!");
    }
}

// Ejemplo de uso Clase Perro
const miPerro = new Perro("Robin", "Quiltro", 7);
miPerro.mostrarInfo();
miPerro.ladrar();
