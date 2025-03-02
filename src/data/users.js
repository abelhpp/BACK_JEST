const users = [];


module.exports.getUsers = () => {
    return users;
}


module.exports.addUser = ({name, address, age, uid}) => {
    return users.push({name, address, age, uid})
}


module.exports.findUserByUid = ({uid}) => {
    return users.find(({uid: userUid}) => userUid === uid)
}


module.exports.updateUserByUid = ({ uid, name, address, age }) => {
    // Buscar el índice del usuario a actualizar
    const userIndex = users.findIndex((user) => user.uid === uid);

    // Si no se encuentra el usuario, lanzar un error
    if (userIndex === -1) {
        return {message: "id null"};
    }

    // Actualizar el usuario
    users[userIndex] = {
        ...users[userIndex], // Mantener los datos existentes
        name: name !== undefined ? name : users[userIndex].name, // Actualizar solo si se proporciona
        address: address !== undefined ? address : users[userIndex].address,
        age: age !== undefined ? age : users[userIndex].age,
    };

    return users[userIndex]; // Devolver el usuario actualizado
};


module.exports.removeUserByUid = ({uid}) => {
    return users.filter(({uid: userUid}) => userUid !== uid);
}

