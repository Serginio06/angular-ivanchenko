import React, {Component} from 'react';
import './style/App.css';

class App extends Component {


    render() {

        return (

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


        );
    }
}

export default App;
