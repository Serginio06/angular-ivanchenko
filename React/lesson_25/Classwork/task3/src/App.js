import React, {Component} from 'react';
// import {Link} from 'react-router'
import './style/App.css';
import appStore from './stores/appStore';
import * as AppActions from './actions/AppActions';
import ErrorBlock from './ErrorBlock'

class App extends Component {


    constructor(props) {
        super (props);
        this.state = {
            errMsg: '',
        }
    }


    getSum() {
        if (this.arg1.value && this.arg2.value) {
            AppActions.sum (this.arg1.value, this.arg2.value);
            this.cleanError ();
        } else {
            this.noValuesError ();
        }
    }

    getSubsract() {
        if (this.arg1.value && this.arg2.value) {
            AppActions.substract (this.arg1.value, this.arg2.value);
            this.cleanError ();
        } else {
            this.noValuesError ();
        }
    }

    getMultiplication() {
        if (this.arg1.value && this.arg2.value) {
            AppActions.multiplication (this.arg1.value, this.arg2.value);
            this.cleanError ();
        } else {
            this.noValuesError ();
        }
    }

    getDividing() {
        if (this.arg1.value && this.arg2.value) {
            if (+this.arg2.value === 0) {
                this.divOnZeroError ();

            } else {
                AppActions.dividing (this.arg1.value, this.arg2.value);
                this.cleanError ();
            }

        } else {
            this.noValuesError ();
        }
    }


    noValuesError() {
        this.setState ({errMsg: 'Please enter first and second values before execute an operation'});
    };

    divOnZeroError() {
        this.setState ({errMsg: 'You cannot divide on zero. Please check your second value and repeat operation'});
    };

    cleanError() {
        this.setState ({errMsg: ''});
    };


    componentWillMount() {
        this.setState ({result: appStore.getResult ()});
        appStore.on ('RESULT-RECEIVED', ()=> {
            this.setState ({result: appStore.getResult ()});
        })
    }

    render() {
        let msgBlock;

        if (this.state.errMsg) {
            msgBlock = <ErrorBlock msg={this.state.errMsg}/>;
        }

        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 25. Simple flux example to change div styles
                    </div>
                    <div className="panel-body">
                        <div className="well">
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon">Argument 1</span>
                                    <input type="number" className="form-control" ref={(input)=>this.arg1 = input}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon">Argument 2</span>
                                    <input type="number" className="form-control" ref={(input)=>this.arg2 = input}/>
                                </div>
                            </div>
                        </div>
                        <div className="btn btn-group">
                            <button className="btn btn-primary" onClick={this.getSum.bind (this)}>+</button>
                            <button className="btn btn-primary" onClick={this.getSubsract.bind (this)}>-</button>
                            <button className="btn btn-primary" onClick={this.getMultiplication.bind (this)}>*</button>
                            <button className="btn btn-primary" onClick={this.getDividing.bind (this)}>/</button>

                        </div>
                        <br/>
                        {msgBlock}
                        <br/>
                        <div className="alert alert-info"><h3>Result: {this.state.result}</h3></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
