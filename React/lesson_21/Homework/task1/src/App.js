import React, {Component} from 'react';
import './style/App.css';
// import MixinTest from './MixinsTest'

var counterMixin = function () {
    var self = this;
    this.counter=0;

    this.incrementCount = function () {
        self.setState ({seconds: self.state.seconds + 1})
    };

    // this.stopCounter = function () {
    //     clearInterval (self.counter);
    //     self.counter = 0;
    //     // console.log('self.counter after stop ',self.counter);
    // };
    //
    // this.startCounter = function () {
    //     if ( self.counter === 0 ) {
    //         self.counter = setInterval (self.incrementCount, 1000);
    //     }
    //
    // };
    //
    // this.resetCounter = function () {
    //     // console.log('self.counter= ',self.counter);
    //     if ( self.counter || self.state.seconds >0 ) {
    //         clearInterval (self.counter);
    //         self.counter = 0;
    //         self.setState ({seconds: 0});
    //     }
    //
    // };

    this.decrementCount = function(){
        if ( self.state.seconds>0 ) self.setState ({seconds: self.state.seconds - 1});
        // self.state.seconds>0 ? self.setState ({seconds: self.state.seconds - 1}):self.state.seconds;
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

                    <div className="panel-heading panel-primary">Lesson 21. Counter with possiblity to increment and decrement count</div>
                    <div className="panel-body">
                        <h1 onClick={this.startCounter}>Current count {this.state.seconds}</h1>

                        <div className="btn-group change-counter-btn">
                            <button onClick={this.incrementCount} className="btn btn-primary">+</button>
                            <button onClick={this.decrementCount} className="btn btn-primary">-</button>
                        </div>

                        {/*<br/>*/}
                        {/*<div className="btn-group">*/}
                            {/*<button onClick={this.startCounter} className="btn btn-success">Start counter</button>*/}
                            {/*<button onClick={this.stopCounter} className="btn btn-info">Stop counter</button>*/}
                            {/*<button onClick={this.resetCounter} className="btn btn-danger">Reset counter</button>*/}
                        {/*</div>*/}

                    </div>
                </div>
            </div>
        );
    }


    // componentDidMount() {
    //     // this.startCounter();
    //
    // }


}


export default App;
