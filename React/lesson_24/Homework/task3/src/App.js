import React, {Component} from 'react';
import {Link} from 'react-router'
import './style/App.css';
import {users} from './data/users';


class App extends Component {

    constructor (props){
        super(props);
        this.state = {
            users:users
        }
    }


    render() {
        
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 24. Homework task2. Routes to users ListView or TableView animated switch</div>
                    <div className="panel-body">
                        <h3>This is the homepage!</h3>
                        <div className="btn-group">
                        <button className="btn btn-default"><Link to="/listView">ListView</Link></button>
                        <button className="btn btn-default"><Link to="/tableView">TableView</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
