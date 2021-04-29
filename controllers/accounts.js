const {Clients, Accounts, AccountTypes} = require('../models');

const getAccounts = async (req, res) => {
        try{
            let accounts = await Accounts.findAll({include: [{model: Clients}, {model: AccountTypes}]});
            let clients = await Clients.findAll({raw: true});
            let accountTypes = await AccountTypes.findAll({raw: true});
            res.render('accounts', {accounts: accounts, users: clients, accountTypes: accountTypes});
        }catch(error) {
            console.log(error);
            res.status(400).send("Something's wrong");
        }
}
const setAccount = async (req, res) => {
    const {account_no, balance, client_id, type} = req.body
    try{
        await Accounts.create({account_no, client_id, balance, type});
        res.redirect('/accounts');
    }catch(error) {
        console.log(error);
        res.status(400).send("Something's wrong");
    }
}
const deleteAccount = async(req, res) => {
    try{
        await Accounts.destroy({where: {id: req.params.id}});
        res.redirect('/accounts');
    }catch(error) {
        console.log(error);
        res.status(400).send("Something's wrong");
    }
}
module.exports = {
    getAccounts,
    setAccount,
    deleteAccount
}