const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gamerSchema = new mongoose.Schema({
  username: String,
  games: [String], // Lista de juegos que el gamer juega
  user: { type: Schema.Types.ObjectId, ref: 'User' } // Relación con el usuario
});

const gamerModel = mongoose.model("Gamer", gamerSchema);

module.exports = gamerModel;
