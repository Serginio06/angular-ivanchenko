import React, {Component} from 'react';
import './style/App.css';

class App extends Component {


    render() {
        let sum = this.props.summand1 + this.props.summand2;

        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 19. Sum of two numbers</div>
                    <div className="panel-body">

                        <h3 className="">The sum of {this.props.summand1} and {this.props.summand2} is equal
                            to {sum}</h3>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
