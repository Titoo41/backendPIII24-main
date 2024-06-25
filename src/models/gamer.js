const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gamerSchema = new Schema({
  username: String,
  games: [String],
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Gamer = mongoose.model("Gamer", gamerSchema);

module.exports = Gamer;
