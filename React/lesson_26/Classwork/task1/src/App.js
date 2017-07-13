import React, {Component} from 'react';
import './style/App.css';
import {connect} from 'react-redux';

class App extends Component {

    onClick(){
        console.log('this.input=', this.input.value);
        this.props.onShowUsers(this.input.value);
    }

    inputChangeHandler(e){
        this.props.onShowUsers(e.key);
    }

    render() {
        
        // console.log('this.props.usersStore= ', this.props.usersStore);
        
        return (
            <div className="container">
                <dikjv className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 25. Simple redux example to reflect text from input to h1
                    </div>
                    <div className="panel-body">
                        <div className="well">

                            {/*<div className="form-group">*/}
                                {/*<div className="input-group">*/}
                                    {/*<input type="text" className="form-control" ref={(input)=>this.input=input} onKeyUp={this.inputChangeHandler.bind(this)}/>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            <button className="btn btn-primary" onClick={this.onClick.bind(this)}>Add</button>
                        </div>
                        <h1>{this.props.usersStore}</h1>
                    </div>
                </dikjv>
            </div>
        );
    }
}

// export default App;
export default connect(
    users => ({
        usersStore:users
    }),
    dispatch => ({
        onShowUsers:(inputValue)=>{
            dispatch({type:"ADD-KEY", newCharacter:inputValue})
        }
    })
)(App);


