const buildUser = ({name="facker", address= "facker 222", age=18, uid="99"} = {})=> ({
    name, address, age, uid    
})

const {addUser, getUsers, findUserByUid, removeUserByUid} = require('./users');

describe('Test de los datos',()=>{
    it('should add new user', () =>{
        const user = buildUser();
        addUser(user);
        expect(getUsers()).toEqual([user]);
    })

    it('findUserByUid - should return undefined when there not users', ()=>{
        const user = findUserByUid({uid:''});
        expect(user).toBe(undefined);
    });

    it('findUserByUid - should return valid user', ()=>{
        const user = buildUser();
        const userFound = findUserByUid(user);
        expect(user).toEqual(userFound);
    });

    it('findUserByUid - should return valid user', ()=>{
        const user = buildUser();
        const userFound = findUserByUid(user);
        expect(user).toEqual(userFound);
    });

    it('removeUserByUid - should remove a valid user ', () =>{
        const user = buildUser();
        addUser(user);

        const usersUpdated = removeUserByUid({uid: user.uid});
        expect(usersUpdated).toEqual([]);
    })

})
