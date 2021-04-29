const {Clients, Accounts} = require('../models');

const getUsers = async (req, res) => {
    try{
        let clients = await Clients.findAll({include: [{model: Accounts}]});
        res.render('users', {users: clients});
    }catch(error) {
        console.log(error);
        res.status(400).send("Something's wrong");
    }
}
module.exports = {
    getUsers
}