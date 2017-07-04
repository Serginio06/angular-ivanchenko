import React, {Component} from 'react';
import './style/App.css';
import UserList from './UserList'


class App extends Component {
    constructor(props) {
        super ();
        this.state = {
            listItemQuantity: 0,
            // listItemQuantityChanged:0,
            updated: 0
        }

    }


    onButtonClick() {

        this.setState ({listItemQuantity: this.numberItemsInputEl.value});

    }


    render() {


        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 20. List of users wiht filter</div>
                    <div className="panel-body">


                        <div className="form-group">
                            <label>Please enter number of users you want to display (0 to see all)</label>
                            <div className="input-group">

                                <input type="number" defaultValue={this.state.listItemQuantity}
                                       ref={(input)=>this.numberItemsInputEl = input}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <buton className="btn btn-success" onClick={this.onButtonClick.bind (this)}>Change list
                                items number
                            </buton>
                        </div>
                        <UserList listItemQuantity={this.state.listItemQuantity} users={this.props.users}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;

