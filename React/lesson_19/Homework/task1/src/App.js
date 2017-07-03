import React, {Component} from 'react';
import './style/App.css';

class App extends Component {


    render() {
        // let sum = +this.props.summand1 + +this.props.summand2;

        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 19. Table of users</div>
                    <div className="panel-body">

                        <table className="table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>User name</th>
                                <th>Gender</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.users.map ((item, index)=>

                                <tr key={index}>
                                    <td> {index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.gender}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
