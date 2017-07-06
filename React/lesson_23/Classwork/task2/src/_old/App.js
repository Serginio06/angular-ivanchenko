import React, {Component} from 'react';
import './style/App.css';
import UserTable from './UserTable';

class Person {
    constructor(firstName, lastName, age, gender) {
        [this.firstName = "John", this.lastName = "Doe", this.age = 0, this.gender = "Male"] = [...arguments];
    }

    get fullName() {return this.firstName + ' ' + this.lastName;}

    sayHi() {
        alert ('Hello, my name is ' + this.fullName);
    }
}


class User extends Person {
    constructor(signUpDate, id) {
        super ();
        [this.signUpDate = 0, this.id] = [...arguments];
    }
}


class App extends Component {


    createUsers() {

        let users = [];
        users[0] = new User ('12/08/2013', '12');
        users[1] = new User ('14/09/2014', '10');
        users[2] = new User ('16/10/2015', '8');
        users[3] = new User ('18/11/2016', '6');
        users[4] = new User ('20/12/2017', '4');


        Object.assign(users[0], {
            firstName: 'Sergii',
            lastName: 'Ivanchenko',
            age: '18',
            gender: 'male'
        });

        Object.assign(users[1], {
            firstName: 'Vasiliy',
            lastName: 'Odincov',
            age: '28',
            gender: 'male'

        });
        Object.assign(users[2], {
            firstName: 'Oleksandr',
            lastName: 'Krug',
            age: '23',
            gender: 'male'

        });
        Object.assign(users[3] , {
            firstName: 'Svetlana',
            lastName: 'Levchenko',
            age: '27',
            gender: 'female'

        });
        Object.assign(users[4] , {
            firstName: 'Viktoria',
            lastName: 'Nemets',
            age: '20',
            gender: 'female'

        });


        // console.log ('users', users);
        return users
    }

    componentWillMount() {
        this.users = this.createUsers ();
    }


    render() {

        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 22. Click on user name to see sayHi() result</div>
                    <div className="panel-body">

                        <UserTable users={this.users}/>


                    </div>
                </div>
            </div>
        );
    }
}

export default App;
