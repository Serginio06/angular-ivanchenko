import React, {Component} from 'react';
import './style/App.css';
import ChildComponent from './ChildComponent'

class App extends Component {


    render() {

        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary"><h1>Parent and child component with h1 and h3 tags</h1></div>
                    <div className="panel-body">

<ChildComponent />

                    </div>
                </div>
            </div>
        );
    }
}

export default App;


