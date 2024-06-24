const express = require('express');
const userService = require('./user.service');

const router = express.Router();

// GET /api/user
router.get('/', async (req, res) => {
  try {
    const params = JSON.parse(req.headers['params']);
    let paginated = await userService.paginated(params);
    return res.status(200).send(paginated);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});
// POST /api/user
router.post('/', async (req, res) => {
  try {
    const newUser = req.body;
    const user = await userService.save(newUser);
    return res.status(201).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// PUT /api/user/:id
router.put('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;
    const user = await userService.update(userId, updatedUser);
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// DELETE /api/user/:id
router.delete('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    await userService.remove(userId);
    return res.status(200).send('Usuario eliminado correctamente.');
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;
