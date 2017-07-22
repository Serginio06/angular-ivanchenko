import React, {Component} from 'react';
import './style/App.css';
import UserList from './UserList';
import UserTable from './UserTable';


class App extends Component {
    constructor(props) {
        super ();
        this.state = {
            switchName: 'Table'
        }

    }

    checkBoxToggle() {
        if (this.state.switchName == 'Table') {
            this.setState ({switchName: 'List'})
        } else {
            this.setState ({switchName: 'Table'})
        }

        console.log ('this.state.switchName  new value is :', this.state.switchName);
    }


    render() {

        let toDisplay;

        if ( this.state.switchName == 'Table') {
            toDisplay = <UserTable users={this.props.users}/>;
        } else {
            toDisplay = <UserList users={this.props.users}/>
        }

        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 20. List of users to display as table or list items </div>
                    <div className="panel-body">

                        <div className="well well-lg">
                            <div className="input-group">
                                <input type="checkbox" ref={(input)=>this.inputCheckbox = input}
                                       onChange={this.checkBoxToggle.bind (this)}/>
                                <h4><span className="label label-info">Switch
                            to {this.state.switchName}</span></h4>
                            </div>
                        </div>
                        {toDisplay}

                    </div>
                </div>
            </div>
        );
    }

}

export default App;

