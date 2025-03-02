const express = require("express");
const app = express();
const {getUsers, addUser, findUserByUid, updateUserByUid, removeUserByUid} =require('./data/users.js')


app.use(express.json());
const router = express.Router();


// Definir la ruta POST /users
router.get("/users", (req, res) => {
    const users = getUsers();    
    return res.status(200).send(users);
});

// Definir la ruta POST /users
router.get("/users/:uid", (req, res) => {    
    const {uid} = req.params;
    const user = findUserByUid({uid});
    return res.status(201).send(user);
});



// Definir la ruta POST /users
router.post("/users", (req, res) => {
    const {uid, name, address, age} = req.body;
    
    addUser({uid, name, address, age});
    return res.status(201).send({message: 'success'});
});


// actualizar
router.put("/users/:uid", (req, res) => {
    const { name, address, age} = req.body;
    const {uid} = req.params;
    console.log({ name, address, age, uid});
    
    const userUpdate = updateUserByUid({ name, address, age, uid});
    

    return res.status(200).send(userUpdate);
});



// Eliminar
router.delete("/users/:uid", (req, res) => {
    const {uid} = req.params;
    const userUpdate = removeUserByUid({uid})

    return res.status(200).send(userUpdate);
});



app.use(router);


module.exports = app;