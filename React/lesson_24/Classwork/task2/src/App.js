import React, {Component} from 'react';
import {Link} from 'react-router'
import './style/App.css';

class App extends Component {


    render() {

        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 24. Classwork task2. Routes to view1 and view2 with App as homepage </div>
                    <div className="panel-body">
                        <h3>This is the homepage!</h3>
                        <div className="btn-group">
                        <button className="btn btn-default"><Link to="/view1">Go to View1</Link></button>
                        <button className="btn btn-default"><Link to="/view2">Go to View2</Link></button>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default App;
