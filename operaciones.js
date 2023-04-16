const fs = require("fs");

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  const datos = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  datos.push({ nombre, edad, tipo, color, enfermedad });

  fs.writeFileSync("citas.json", JSON.stringify(datos));
};

const leer = () => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  console.log(citas);
};

module.exports = { registrar, leer };