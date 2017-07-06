import React, {Component} from 'react';
import './style/App.css';

class Person {
    constructor(firstName, lastName, age, gender){
        [this.firstName="John", this.lastName="Doe", this.age=0, this.gender="Male"] =  [...arguments];
    }

    get fullName() {return  this.firstName +' '+ this.lastName;}

    sayHi() {
        alert ('Hello, my name is '+ this.fullName);
    }

}



class App extends Component {
    
    
    render() {

        let userJohn = new Person();
        let {firstName, lastName, age, gender}=userJohn;
        // console.log('userJohn.fullName= ',userJohn.fullName);
        userJohn.sayHi();

        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 22. Create Person class</div>
                    <div className="panel-body">

                        <ul className="list-group">
                            <li className="list-group-item list-group-item-success">FirstName: {firstName}</li>
                            <li className="list-group-item list-group-item-info">LastName: {lastName}</li>
                            <li className="list-group-item list-group-item-warning">Age: {age}</li>
                            <li className="list-group-item list-group-item-warning">Gender: {gender}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
