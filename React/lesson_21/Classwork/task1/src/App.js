import React, {Component} from 'react';
import './style/App.css';

class App extends Component {

    constructor(props) {
        super ();
        this.state = {
            divBackgroundStyle: 'colorfulDiv black'
        }

    }

    changeDivColor() {

        if (this.state.divBackgroundStyle === 'colorfulDiv black') {this.setState ({divBackgroundStyle: 'colorfulDiv red'})} else {
            this.setState ({divBackgroundStyle: 'colorfulDiv black'})
        }


    }


    render() {

        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 21. Switch class name of div on red/black</div>
                    <div className="panel-body">
                        <div className={this.state.divBackgroundStyle} >Change
                            background of this element by pressing button below
                        </div>
                        <button className="btn btn-success" onClick={this.changeDivColor.bind (this)}>Change
                            background
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
