"use Strictly"

class Propietario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }

  datosPropietario() {
    console.log(
      `Los datos del propietario son: Nombre: ${this.nombre} -
      Direccion: ${this.direccion} - Telefono: ${this.telefono}`

    );
  }
}
class Animal extends Propietario {
  constructor(nombreDelPropietario,
    direccionDelPropietario,
    telefonoDelPropietario,
    tipo) {
    super(
      nombreDelPropietario,
      direccionDelPropietario,
      telefonoDelPropietario
    );
    this._tipo = tipo;
  }

  get tipo() {
    return this._tipo;
  }
}

class Mascota {
  constructor(nombreDelPropietario,
    direccionDelPropietario,
    telefonoDelPropietario,
    tipoDeAnimal,
    nombre,
    enfermedad) {
    super(nombreDelPropietario,
      direccionDelPropietario,
      telefonoDelPropietario,
      tipoDeAnimal);
    this._nombre = nombre;
    this._enfermedad = enfermedad;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre() {
    this._nombre = nuevoNombre;
  }
  get enfermedad() {
    return this._enfermedad;
  }
  set enfermedad(nuevaEnfermedad) {
    this._enfermedad = nuevaEnfermedad;

  }
}
//const Perrito = new Animal("Luis", "Av Victoria 186", "+56934123772", "Perro");

const propietarioElement = document.querySelector("#propietario");
const telefonoElement = document.getElementById("telefono");
const direccionElement = document.getElementById("direccion");
const nombreMascotaElement = document.getElementById("nombreMascota");
const tipoElement = document.getElementById("tipo");
const enfermedadElement = document.getElementById("enfermedad");
const btnElement = document.querySelector(".btn");

btnElement.addEventListener("click", (event) => {
  event.preventDefault();
  const nombreDelPropietario = propietarioElement.value;
  const telefonoDelPropietario = tipoElement.value;
  const direccionDelPropietario = direccionElement.value;
  const nombreDeLaMascota = nombreMascotaElement.value;
  const tipoDeMascota = tipoElement.value;
  const enfermedadDeLaMascota = enfermedadElement.value;
  
  const mascota = new Mascota(nombreDelPropietario,
    direccionDelPropietario, 
    telefonoDelPropietario,
    tipoDeMascota,
    nombreDeLaMascota, 
    enfermedadDeLaMascota
    );

    console.log(mascota);
});
