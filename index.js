const { registrar, leer } = require("./operaciones");

const [operacion, nombre, edad, animal, color, enfermedad] =
  process.argv.slice(2);

if (operacion === "registrar") {
  if (
    nombre === undefined ||
    edad === undefined ||
    animal === undefined ||
    color === undefined ||
    enfermedad === undefined
  ) {
    console.log("Ingrese todos los datos");
    return;
  }
  registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === "leer") {
  read();
} else {
  console.log("La operación no es válida");
};