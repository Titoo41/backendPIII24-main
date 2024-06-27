const express = require("express");
const userService = require("./user.service");

const router = express.Router();

// GET /api/user
router.get("/api/user", async (req, res) => {
  // #swagger.tags = ['Usuario']
  try {
    params = JSON.parse(req.headers['params'])

    let paginated = await userService.paginated(params)
    return res.status(200).send(paginated);

  } catch (error) {
    console.log(error)
    return res.status(500).send(error);
  }
});

// GET /api/user/:id
router.get("/api/user/:id",  async (req, res) => {
  // #swagger.tags = ['Usuario']
  try {
    const userId = req.params.id;
    const user = await userService.findOneById(userId);
    return res.status(200).send(user);

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// prueba



// POST /api/user
router.post("/api/user", async (req, res) => {
  // #swagger.tags = ['Usuario']
  const { firstname, lastname, email, domicilio, celular, documento, rol, area } = req.body;
  // const newUser = req.body;

  try {

    const existingUser = await userService.findOne({ email:email });
    if (existingUser) {
      return res.status(400).send({ error: 'El email ya está registrado.' });
    }


    const newUser = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      domicilio: domicilio,
      celular: celular,
      documento: documento,
      rol: rol,
      area: area,
    }

    // Guardar el nuevo usuario
    const user = await userservice.save(newUser);

    console.log(user)
    if(!user){
      return res.status(400).send({error: "Campos incompletos"})
    }

    return res.status(201).send(user);


  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      res.status(400).send({ error: 'El email ya está registrado.' });
    } else {
      res.status(500).send({ error: 'Error interno del servidor' });
    }
  }
});

// PUT /api/user/:id
/*router.put("/api/user/:id",  async (req, res) => {
  // #swagger.tags = ['Usuario']
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
*/


// PUT /api/user/:id
router.put("/api/user/:id", async (req, res) => {
  // #swagger.tags = ['Usuario']
  try {
    const userId = req.params.id;
    // const updatedUser = req.body;
    const { firstname, lastname, email, domicilio, celular, documento, rol, area } = req.body

    const updatedUser = {
      firstname,
      lastname,
      email,
      domicilio,
      celular,
      documento,
      rol,
      area,
    }

    
   
    // Actualizar usuario por ID
    const user = await userService.update(userId, updatedUser);

   

    return res.status(200).send(user);
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    return res.status(500).send({ error: "Error interno del servidor" });
  }
});
// DELETE /api/user/:id
router.delete("/api/user/:id", async (req, res) => {
  // #swagger.tags = ['Usuario']
  try {
    const userId = req.params.id;
    await userService.remove(userId);
    return res.status(200).send("Usuario eliminado correctamente.");

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;




// SIN TAGSS 








