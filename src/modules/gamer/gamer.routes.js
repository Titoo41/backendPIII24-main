/*const express = require("express");
const gamerService = require("./gamer.service");

const router = express.Router();

// GET /api/gamer
router.get("/api/gamer", async (req, res) => {
  try {
    let params = JSON.parse(req.headers['params']);
    let paginated = await gamerService.paginated(params);
    return res.status(200).send(paginated);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// GET /api/gamer/:id
router.get("/api/gamer/:id", async (req, res) => {
  try {
    const gamerId = req.params.id;
    const gamer = await gamerService.findOneById(gamerId);
    return res.status(200).send(gamer);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// POST /api/gamer
router.post("/api/gamer", async (req, res) => {
  try {
    const newGamer = req.body;
    const gamer = await gamerService.save(newGamer);
    return res.status(201).send(gamer);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// PUT /api/gamer/:id
router.put("/api/gamer/:id", async (req, res) => {
  try {
    const gamerId = req.params.id;
    const updatedGamer = req.body;
    const gamer = await gamerService.update(gamerId, updatedGamer);
    return res.status(200).send(gamer);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// DELETE /api/gamer/:id
router.delete("/api/gamer/:id", async (req, res) => {
  try {
    const gamerId = req.params.id;
    await gamerService.remove(gamerId);
    return res.status(200).send("Gamer eliminado correctamente.");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;
*/

const express = require("express");
const gamerService = require("./gamer.service");

const router = express.Router();

// GET /api/gamer
router.get("/api/gamer", async (req, res) => {
  try {
    params = JSON.parse(req.headers['params']);
    let paginated = await gamerService.paginated(params);
    return res.status(200).send(paginated);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// GET /api/gamer/:id
router.get("/api/gamer/:id", async (req, res) => {
  try {
    const gamerId = req.params.id;
    const gamer = await gamerService.findOneById(gamerId);
    return res.status(200).send(gamer);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// POST /api/gamer
router.post("/api/gamer", async (req, res) => {
  try {
    const newGamer = req.body;
    const gamer = await gamerService.save(newGamer);
    return res.status(201).send(gamer);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// PUT /api/gamer/:id
router.put("/api/gamer/:id", async (req, res) => {
  try {
    const gamerId = req.params.id;
    const updatedGamer = req.body;
    const gamer = await gamerService.update(gamerId, updatedGamer);
    return res.status(200).send(gamer);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// DELETE /api/gamer/:id
router.delete("/api/gamer/:id", async (req, res) => {
  try {
    const gamerId = req.params.id;
    await gamerService.remove(gamerId);
    return res.status(200).send("Gamer eliminado correctamente.");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;
