const gamerModel = require("../../models/gamer");
const pager = require("../../utils/pager");

async function findOneById(_id) {
  return await gamerModel.findById(_id).populate('user').exec();
}

async function save(gamer) {
  let _gamer = new gamerModel(gamer);
  return await _gamer.save();
}

async function paginated(params) {
  let perPage = params.perPage ? parseInt(params.perPage) : 10;
  let page = Math.max(0, params.page ? parseInt(params.page) : 0);
  let filter = params.filter ? params.filter : {};
  let sort = params.sort ? params.sort : {};
  
  let count = await gamerModel.countDocuments(filter);
  let data = await gamerModel.find(filter)
    .limit(perPage)
    .skip(perPage * page)
    .sort(sort)
    .populate('user') 
    .exec();
  
  return pager.createPager(page, data, count, perPage);
}

async function update(id, updatedGamer) {
  return await gamerModel.findByIdAndUpdate(id, updatedGamer, { new: true }).populate('user').exec();
}

async function remove(id) {
  return await gamerModel.findOneAndDelete({ _id: id }).exec();
}

module.exports = { findOneById, save, paginated, update, remove };
