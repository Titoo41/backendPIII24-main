/*const express = require("express");
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

module.exports = router;*/
const express = require("express");
const gamerService = require("./gamer.service");

const router = express.Router();

// Routes
/**
 * @swagger
 * tags:
 *   name: Gamer
 *   description: Gamer management
 */

/**
 * @swagger
 * /api/gamer:
 *   get:
 *     summary: Get a paginated list of gamers
 *     tags: [Gamer]
 *     parameters:
 *       - in: header
 *         name: params
 *         schema:
 *           type: string
 *           example: '{"page": 1, "limit": 10}'
 *         required: true
 *         description: JSON string of pagination parameters
 *     responses:
 *       200:
 *         description: A list of gamers
 *       500:
 *         description: Internal server error
 */
router.get("/api/gamer", async (req, res) => {
  try {
    const params = JSON.parse(req.headers['params']);
    const paginated = await gamerService.paginated(params);
    return res.status(200).send(paginated);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

/**
 * @swagger
 * /api/gamer/{id}:
 *   get:
 *     summary: Get a gamer by ID
 *     tags: [Gamer]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The gamer ID
 *     responses:
 *       200:
 *         description: The gamer data
 *       500:
 *         description: Internal server error
 */
router.get("/api/gamer/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await gamerService.findOneById(userId);
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

/**
 * @swagger
 * /api/gamer:
 *   post:
 *     summary: Create a new gamer
 *     tags: [Gamer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example: { "name": "John", "email": "john@example.com" }
 *     responses:
 *       201:
 *         description: Gamer created successfully
 *       500:
 *         description: Internal server error
 */
router.post("/api/gamer", async (req, res) => {
  try {
    const newUser = req.body;
    const user = await gamerService.save(newUser);
    return res.status(201).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

/**
 * @swagger
 * /api/gamer/{id}:
 *   put:
 *     summary: Update a gamer by ID
 *     tags: [Gamer]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The gamer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example: { "name": "John", "email": "john@example.com" }
 *     responses:
 *       200:
 *         description: Gamer updated successfully
 *       500:
 *         description: Internal server error
 */
router.put("/api/gamer/:id", async (req, res) => {
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

/**
 * @swagger
 * /api/gamer/{id}:
 *   delete:
 *     summary: Delete a gamer by ID
 *     tags: [Gamer]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The gamer ID
 *     responses:
 *       200:
 *         description: Gamer deleted successfully
 *       500:
 *         description: Internal server error
 */
router.delete("/api/gamer/:id", async (req, res) => {
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
