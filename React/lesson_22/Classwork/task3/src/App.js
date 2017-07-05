import React, {Component} from 'react';
import './style/App.css';
import UserList from './UserList'


class App extends Component {
    constructor(props) {
        super ();
        this.state = {
            listItemQuantity: 0,
            updated: 0,
            showComponent:'',
        }

    }
    
    showProperties(){

        this.setState({showComponent:<UserList Quantity='12' users={this.props.users}/>})
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 22. Show property (props) of component</div>
                    <div className="panel-body">

                        <button className="btn btn-primary" onClick={this.showProperties.bind(this)}>Show component properties</button>

                        {this.state.showComponent}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

