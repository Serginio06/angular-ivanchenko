import React, {Component} from 'react';
// import {Link} from 'react-router'
import './style/App.css';
import appStore from './stores/appStore';
import * as AppActions from './actions/AppActions';

class App extends Component {

    startTimer() {
        AppActions.startTimer ();

    }

    stopTimer() {
        AppActions.stopTimer ();
    }

    resetTimer() {
        AppActions.restartTimer ();
    }

    componentWillMount() {
        this.setState ({counter: appStore.getCounterValue ()});

        appStore.on ('COUNTER-CHANGED', ()=> {
            this.setState ({counter: appStore.getCounterValue ()});
        })
    }


    render() {
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 25. Simple timer on flux</div>
                    <div className="panel-body">
                        <div className="well">

                            <h3>Page was opened {this.state.counter} seconds ago</h3>
                        </div>
                        <div className="btn btn-group">
                            <button className="btn btn-primary" onClick={this.startTimer.bind (this)}>Start</button>
                            <button className="btn btn-success" onClick={this.stopTimer.bind (this)}>Stop</button>
                            <button className="btn btn-info" onClick={this.resetTimer.bind (this)}>Reset</button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        AppActions.startTimer ();
    }


}

export default App;
