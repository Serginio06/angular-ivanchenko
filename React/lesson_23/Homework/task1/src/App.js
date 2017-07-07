/**
 * Created by sergiiivanchenko on 07/07/2017.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import UsersTable from './UsersTable';
import AddUser from './AddUser';
import users from './Users';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            users:this.props.users,
            addUser:this.addUser
        }
    }

    addUser(first_name,last_name,gender,email) {
        // console.log ('adding user wiht first_name = ', first_name);
        // console.log ('adding user wiht last_name = ', last_name);
        // console.log ('adding user wiht gender = ', gender);
        // console.log ('adding user wiht email = ', email);

        let newUserObj = {
            "id": 15,
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
            "gender": gender,
            "ip_address": "16.124.88.91"
        };

        let users = this.state.users;
        users.push (newUserObj);
        // console.log ('updated users= ', this.state.users);

        this.setState({users:users});


    }


    render() {
        return (
            <div>
                <UsersTable users={this.state.users}  />
                <AddUser onAddUserClick={this.state.addUser.bind(this)}/>
            </div>
        )
    }
}

ReactDOM.render (<App users={users} />, document.getElementById ('container'));
