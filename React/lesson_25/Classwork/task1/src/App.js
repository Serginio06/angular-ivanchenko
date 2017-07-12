import React, {Component} from 'react';
import './style/App.css';
import appStore from './stores/appStore';
import * as AppActions from './actions/AppActions';

class App extends Component {


    changeDivStyle() {
        // appStore.changeDivStyle ();
        AppActions.changeDivStyle();
    }

    componentWillMount() {
        this.setState (appStore.getDivStyle ());
        appStore.on ('styleChanged', ()=> {
            this.setState (appStore.getDivStyle ());
        })
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 25. Simple flux example to change div styles
                    </div>
                    <div className="panel-body">
                        <div className="well">

                            <div className="square" style={{backgroundColor: this.state.bkgColor}}><h3>Change div style</h3></div>
                        </div>
                        <div className="btn btn-group">

                            <button className="btn btn-primary" onClick={this.changeDivStyle.bind (this)}>Change style
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
