const express = require("express");
const gamerService = require("./gamer.service");

const router = express.Router();

// GET /api/gamer
router.get("/api/gamer", async (req, res) => {
  // #swagger.tags = ['Gamer']
  try {
    params = JSON.parse(req.headers['params'])

    let paginated = await gamerService.paginated(params)
    return res.status(200).send(paginated);

  } catch (error) {
    console.log(error)
    return res.status(500).send(error);
  }
});

// GET /api/gamer/:id
router.get("/api/gamer/:id",  async (req, res) => {
  // #swagger.tags = ['Gamer']
  try {
    const userId = req.params.id;
    const user = await gamerService.findOneById(userId);
    return res.status(200).send(user);

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// POST /api/gamer
router.post("/api/gamer", async (req, res) => {
  // #swagger.tags = ['Gamer']
  try {
    const newUser = req.body;
    console.log(newUser);
    const user = await gamerService.save(newUser);
    return res.status(201).send(user);

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// PUT /api/gamer/:id
router.put("/api/gamer/:id",  async (req, res) => {
  // #swagger.tags = ['Gamer']
  try {
    const userId = req.params.id;
    const updatedUser = req.body;
    const user = await gamerService.update(userId, updatedUser);
    return res.status(200).send(user);

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// DELETE /api/gamer/:id
router.delete("/api/gamer/:id", async (req, res) => {
  // #swagger.tags = ['Gamer']
  try {
    const userId = req.params.id;
    await gamerService.remove(userId);
    return res.status(200).send("Usuario eliminado correctamente.");

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;