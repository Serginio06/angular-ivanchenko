import React, {Component} from 'react';
import './style/App.css';
// import MixinTest from './MixinsTest'

var counterMixin = function () {
    var self = this;
    this.counter=0;

    this.incrementCount = function () {
        self.setState ({seconds: self.state.seconds + 1})
    };

    this.stopCounter = function () {
        clearInterval (self.counter);
        self.counter = 0;
        // console.log('self.counter after stop ',self.counter);
    };

    this.startCounter = function () {
        if ( self.counter === 0 ) {
            self.counter = setInterval (self.incrementCount, 1000);
        }

    };

    this.resetCounter = function () {
        if ( self.counter ) {
            clearInterval (self.counter);
            self.counter = 0;
            self.setState ({seconds: 0});
        }

    }

};

class App extends Component {

    constructor(props) {
        super (props);
        counterMixin.call (this);
        this.state = {
            seconds: 0
        }
    }


    render() {

        return (
            <div className="container">
                <div className="panel panel-primary">

                    <div className="panel-heading panel-primary">Lesson 21. Timer on component creation</div>
                    <div className="panel-body">
                        <h3 onClick={this.startCounter}>This page has been created {this.state.seconds} seconds ago</h3>
                        <div className="btn-group">
                            {/*<button onClick={this.startCounter} className="btn btn-success">Start counter</button>*/}
                            <button onClick={this.stopCounter} className="btn btn-info">Stop counter</button>
                            {/*<button onClick={this.resetCounter} className="btn btn-danger">Reset counter</button>*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    componentDidMount() {
        this.startCounter();

    }


}


export default App;
