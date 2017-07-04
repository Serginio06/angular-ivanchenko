import React, {Component} from 'react';
import './style/App.css';

class App extends Component {
    constructor(props) {
        super ();
        this.state = {
            // style: {
            //     backgroundColor:green;
            // },
            mode: true,
            backgroundColor:'white'

        };
    }



    toggleMode() {

        if (this.state.mode) {
            this.setState({backgroundColor:'green'});
        } else {
            this.setState({backgroundColor:'white'});
        }

        this.setState ({mode: !this.state.mode});
    };

    render() {
        this.checkbox=true;
        let style = {
            backgroundColor:this.state.backgroundColor};


        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 19. Div shoudl chage style based on checkbox</div>
                    <div className="panel-body">

                        <div style={style} className="panel panel-primary">This div should change color</div>

                        <div className="well well-lg">
                            <input type="checkbox" onChange={this.toggleMode.bind (this)}
                            ref={(checkbox)=>{this.checkbox = checkbox}}
                            /> Change div color on green
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
