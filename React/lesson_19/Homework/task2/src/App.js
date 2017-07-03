import React, {Component} from 'react';
import './style/App.css';
import RegistrationForm from './RegistrationForm'

class App extends Component {


    render() {

        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 19. Sum of two numbers</div>
                    <div className="panel-body">

                        <RegistrationForm />

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
