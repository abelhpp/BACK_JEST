const request = require('supertest');

const app = require('./app.js');


const {getUsers, addUser, findUserByUid, updateUserByUid, removeUserByUid} =require('./data/users.js')
jest.mock('./data/users.js');

beforeEach( ()=>{
    addUser.mockReset()
    getUsers.mockReset()
    updateUserByUid.mockReset()
} )

const buildUser = ({name="facker", address= "facker 222", age=18, uid="99"} = {})=> ({
    name, address, age, uid    
})


describe('users POST', () => {
    it('should store a user', async () => {
        const user = buildUser();
        const result = await request(app)
            .post('/users')  
            .send(user)
            .expect(201);

        expect(result.body).toEqual({message: 'success'});  // Corrected the typo and the expected value
    });

    it('should get all users', async () => {
        const user = buildUser();
        getUsers.mockReturnValue(user)
        
        const result = await request(app)
            .get('/users')
            .expect(200);
        expect(result.body).toEqual(user);
    })

    it('should get empty users when there are no users', async() => {
        getUsers.mockReturnValue([])

        const result = await request(app)
            .get('/users')
            .expect(200);
        expect(result.body).toEqual([]);
    });

    it('should update an user', async () => {
        const user = buildUser();
        addUser(user);
        updateUserByUid.mockReset(user);

        const result = await request(app)
            .put(`/users/:${user.uid}`)
            .send(user)
            .expect(200);
        expect(result.body).toEqual(user);
    })



});


