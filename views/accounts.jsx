const React = require('react');
const Main = require('./layout/main');
const axios = require('axios');

const Accounts = ({accounts, users, accountTypes}) => {

    const handleDelete = (id) => {
        axios.delete(`/accounts/${id}`)
    }

    
    return(
        <Main>
            <h2 className="mb-4">Accounts</h2>

            <div className="card">
                <div className="card-body">
                    <h3 className="mt-3">Add an account</h3>
                    <form action="/accounts" method="POST">
                        <div className="mb-3 row">
                            <div className="col-sm-6">
                                <label htmlFor="account_no" className="form-label">Account Number</label>
                                <input name="account_no" type="text" className="form-control" id="account_no"/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="balance" className="form-label">Balance</label>
                                <input name="balance" type="text" className="form-control" id="balance"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-6">
                                <label htmlFor="owner" className="form-label">Owner</label>
                                <select name="client_id" type="text" className="form-select" id="owner">
                                    <option value=""></option>
                                    {users.map(user => <option key={user.id} value={user.id}>
                                                            {user.first_name} {user.last_name}
                                                        </option>)}
                                </select>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="accountType" className="form-label">Account Type</label>
                                <select name="type" type="text" className="form-select" id="accountType">
                                    <option value=""></option>
                                    {accountTypes.map(accountType => <option key={accountType.id} value={accountType.id}>
                                                                        {accountType.name}
                                                                    </option>)}
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Account No.</th>
                                <th>Balance</th>
                                <th>Owner</th>
                                <th>Account Type</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                        {accounts.map(account => {
                                return(
                                    <tr key={account.id}>
                                        <td>{account.id}</td>
                                        <td>{account.account_no}</td>
                                        <td>{account.balance}</td>
                                        <td>
                                            {account.Client ? 
                                                <a href="/users">{account.Client.first_name + " " + account.Client.last_name}</a>
                                                : 
                                                '-'}
                                        </td>
                                        <td>
                                            {account.AccountType ? 
                                                <a href="/account_types">{account.AccountType.name}</a>
                                                : 
                                                '-'}
                                        </td>
                                        <td>
                                            <button 
                                            onClick={() => handleDelete(account.id)}
                                            className="btn btn-danger mx-1">
                                                Delete
                                            </button>
                                            <a 
                                            href={`/accounts/update/${account.id}`} 
                                            className="btn btn-warning mx-1">
                                                Update
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Main>
    )
}
module.exports = Accounts;