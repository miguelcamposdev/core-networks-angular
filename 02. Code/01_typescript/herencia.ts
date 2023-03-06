class Persona {
  protected nombre: string;

  constructor(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }

  imprimir() {
    console.log(`Nombre: ${this.nombre}`);
  }
}

class Empleado extends Persona {}

let p = new Persona("Miguel");
p.imprimir();

let p2 = new Persona("María");
p2.imprimir();
