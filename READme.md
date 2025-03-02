const request = require('supertest');

const app = require('./app');


describe('supertest example', () => {
    it('demo', async () => {
        const result = await request(app)
            .get('/user')  // Corrected the route to match the app's route
            .expect('Content-Type', /json/)
            .expect('Content-Length', '15')
            .expect(200);

        expect(result.body).toEqual({ name: 'john' });  // Corrected the typo and the expected value
    });
});



#como queda en original copiado del video

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



module.exports.updateUserByUid = ({uid, name, address, age}) => {
    const usersUpdated = users.map( (user) => {
        if(user.uid === uid) {
            return {...user, name, address, age}
        }
        return {...user, name, address, age}
    })
    return usersUpdated;
}