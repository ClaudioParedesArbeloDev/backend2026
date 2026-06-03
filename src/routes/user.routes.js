import { Router } from 'express';


const router = Router();

const users = [
    { id: 1, name: 'Alice', lastName: 'Smith'},
    { id: 2, name: 'Bob', lastName: 'Johnson'},
    { id: 3, name: 'Charlie', lastName: 'Brown'},
    { id: 4, name: 'David', lastName: 'Wilson'},
    { id: 5, name: 'Eve', lastName: 'Davis'},
];

// esta ruta llama a todos los usuarios
router.get('/', (req, res) => {
    res.send( users );
});


//esta ruta crea un nuevo usuario
router.post('/', (req, res) => {
    const { name, lastName } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
        lastName
    };
    users.push(newUser);
    res.status(201).send(newUser);
});

//esta ruta actualiza un usuario existente
router.put("/:id", (req, res) => {
  let { id } = req.params;
  let update = req.body;

  const index = users.findIndex((u) => u.id == id);

  if (index === -1) {
    return res.status(404).json({ message: `User with id ${id} not found` });
  }

  users[index] = { ...users[index], ...update };
  console.log(users[index])

  res.status(200).json(users[index]);
});


//esta ruta elimina un usuario existente
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  

  const index = users.findIndex((user) => user.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ message: `User with id ${id} not found` });
    }
  
    const deletedUser = users.splice(index, 1)[0];

    res.json({
      status: "success",
      message: "User deleted successfully",
      deletedUser,
    });


   

});

export default router;