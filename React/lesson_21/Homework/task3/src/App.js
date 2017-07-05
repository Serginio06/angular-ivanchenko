import React, {Component} from 'react';
import './style/App.css';
// import ErrorBlock from './ErrorBlock'
import RegistrationForm from './RegistrationForm'

var counterMixin = function () {
    var self = this;
    this.counter = 0;

    this.noValuesError = function () {
        self.setState ({errMsg: 'Please enter first and second values before execute an operation'});
    };

    this.divOnZeroError = function () {
        self.setState ({errMsg: 'You cannot divide on zero. Please check your second value and repeat operation'});
    };

    this.cleanError = function () {
        self.setState ({errMsg: ''});
    };

};

class App extends Component {

    constructor(props) {
        super (props);
        counterMixin.call (this);
        this.state = {
            result: 0,
        }
    }


    sum() {

        if (this.input1El.value && this.input2El.value) {
            let result = +this.input1El.value + +this.input2El.value;
            this.setState ({result: result});
            this.cleanError ();
        } else {
            this.noValuesError ();
        }


    }

    substract() {

        if (this.input1El.value && this.input2El.value) {
            let result = +this.input1El.value - +this.input2El.value;
            this.setState ({result: result});
            this.cleanError ();
        } else {
            this.noValuesError ();
        }
    }

    multiplication() {
        if (this.input1El.value && this.input2El.value) {
            let result = +this.input1El.value * +this.input2El.value;
            this.setState ({result: result});
            this.cleanError ();
        } else {
            this.noValuesError ();
        }
    }

    dividing() {

        if (this.input1El.value && this.input2El.value) {
            if ( +this.input2El.value !== 0 ) {
                let result = +this.input1El.value / +this.input2El.value;
                this.setState ({result: result});
                this.cleanError ();
            } else {
                this.divOnZeroError();
            }

        } else {
            this.noValuesError ();
        }

    }


    render() {
        // let msgBlock;
        //
        // if (this.state.errMsg) {
        //     msgBlock = <ErrorBlock msg={this.state.errMsg}/>;
        // }


        return (
            <div className="container">
                <div className="panel panel-primary">

                    <div className="panel-heading panel-primary">Lesson 21. Registration form</div>
                    <div className="panel-body">

                        <RegistrationForm />



                        {/*<h3>Please enter values below and choose operation to execute</h3>*/}

                        {/*<div className="input-group">*/}
                            {/*<label htmlFor="value1">Enter first value</label>*/}
                            {/*<input type="number" className="form-control" id="value1"*/}
                                   {/*ref={(input1)=>this.input1El = input1}/>*/}

                        {/*</div>*/}

                        {/*<div className="input-group">*/}
                            {/*<label htmlFor="value2">Enter second value</label>*/}
                            {/*<input type="number" className="form-control" id="value2"*/}
                                   {/*ref={(input2)=>this.input2El = input2}/>*/}
                        {/*</div>*/}

                        {/*<br/>*/}
                        {/*<div className="col-md-4 text-center">*/}
                            {/*<div className="btn-group ">*/}
                                {/*<button onClick={this.sum.bind (this)} className="btn btn-primary">+</button>*/}
                                {/*<button onClick={this.substract.bind (this)} className="btn btn-info">-</button>*/}
                                {/*<button onClick={this.multiplication.bind (this)} className="btn btn-success">*</button>*/}
                                {/*<button onClick={this.dividing.bind (this)} className="btn btn-danger">/</button>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<br/>*/}
                        {/*{msgBlock}*/}
                        {/*<br/>*/}
                        {/*/!*<div className="well well-lg">*!/*/}
                        {/*<div className="alert alert-success">*/}
                            {/*<h4>Result of operation {this.state.result}</h4>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }

}


export default App;
