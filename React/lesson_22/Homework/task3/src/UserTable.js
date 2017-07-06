import React, {Component} from 'react';
import './style/App.css';

class App extends Component {


    testHi(){
        alert('hello');
    }


    render() {

        return (

                        <table className="table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>User first name</th>
                                <th>User last name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>SignUpDate</th>
                                <th>Id</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.users.map ((item, index)=>

                                <tr key={index}>
                                    <td> {index + 1}</td>
                                    <td onClick={item.sayHi.bind(item)}> {item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.age}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.signUpDate}</td>
                                    <td>{item.id}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>


        );
    }
}

export default App;
