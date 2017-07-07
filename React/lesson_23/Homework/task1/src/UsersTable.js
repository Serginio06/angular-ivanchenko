/**
 * Created by sergiiivanchenko on 07/07/2017.
 */
// {"id":2,"first_name":"Renaldo","last_name":"Blunden","email":"rblunden1@hubpages.com","gender":"Male","ip_address":"55.78.9.116"},


import React, {Component} from 'react';

class UsersTable extends Component {

    render() {
        return (
            <div>
                {this.props.users[0].first_name}
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Gender</th>
                        <th>Email</th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.props.users.map ((item, index)=>

                        <tr key={index}>
                            <td>{index}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.gender}</td>
                            <td>{item.email}</td>

                        </tr>

                    )}

                    </tbody>
                </table>


            </div>
        )
    }
}

export default UsersTable;

