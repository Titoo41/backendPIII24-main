

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: String, // Asegúrate de que esté escrito correctamente
  lastname: String,
  email: String,
  domicilio: String,
  celular: String,
  documento: String,
  rol: String,
  area: String,
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
