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
router.put("/:name", (req, res) => {
  let { name } = req.params;
  let update = req.body;

  const index = users.findIndex((u) => u.name === name);

  if (index === -1) {
    return res.status(404).json({ message: `User ${name} not found` });
  }

  users[index] = { ...users[index], ...update };

  res.status(200).json(users[index]);
});


//esta ruta elimina un usuario existente
router.delete("/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);

  const index = users.findIndex((user) => user.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ message: `User with id ${id} not found` });
    }
  
    users.splice(index, 1);
  res.send({ status: "success", message: "User deleted" });
});

export default router;