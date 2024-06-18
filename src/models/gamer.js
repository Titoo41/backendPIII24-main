const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gamerSchema = new mongoose.Schema({
  username: String,
  games: [String], 
  user: { type: Schema.Types.ObjectId, ref: 'User' } 
});

const gamerModel = mongoose.model("Gamer", gamerSchema);

module.exports = gamerModel;
