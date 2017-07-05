import React, {Component} from 'react';
import './style/App.css';

class App extends Component {

    render() {
        let options = {
            title: "Menu",
            width: 100,
            height: 200
        };

        let {title,width,height}=options;

        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 22. Destructuring of options object</div>
                    <div className="panel-body">

                        <ul className="list-group">
                            <li className="list-group-item list-group-item-success">Title: {title}</li>
                            <li className="list-group-item list-group-item-info">Width: {width}</li>
                            <li className="list-group-item list-group-item-warning">Height: {height}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
