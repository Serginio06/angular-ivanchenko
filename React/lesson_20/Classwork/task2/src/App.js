import React, {Component} from 'react';
import './style/App.css';

class App extends Component {
    constructor(props) {
        super ();
        this.state = {
            summand1: props.summand1,
            summand2: props.summand2,
            mode: true,
            sum: props.summand1 + props.summand2,
        };
    }


    toggleMode() {

        this.setState ({mode: !this.state.mode});

        if (this.state.mode) {
            this.setState ({sum: +this.props.summand1 + +this.props.summand2});
        } else {
            this.setState ({sum: this.props.summand1 + this.props.summand2});
        }
    };

    render() {
        this.checkbox=true;


        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 19. Sum or concatination of two properties</div>
                    <div className="panel-body">

                        <h3>The sum of {this.state.summand1} and {this.state.summand2} is equal
                            to {this.state.sum}</h3>
                        <div className="well well-lg">
                            <input type="checkbox" onChange={this.toggleMode.bind (this)}
                            ref={(checkbox)=>{this.checkbox = checkbox}}
                            /> Change mode type to
                            see result sum or concatination
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
