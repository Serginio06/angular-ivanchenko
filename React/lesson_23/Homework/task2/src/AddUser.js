/**
 * Created by sergiiivanchenko on 07/07/2017.
 */

import React, {Component} from 'react';

class AddUser extends Component {

    buttonClick(e) {
        let gender;

        e.preventDefault ();

        if (this.userFirstName.value && this.userLastName.value && this.userEmail.value) {

            if (this.userGenderMale.checked || this.userGenderFemale.checked) {
                this.userGenderMale.checked ? gender = 'Male' : gender = 'Femail';
                this.props.onAddUserClick (this.userFirstName.value, this.userLastName.value, gender, this.userEmail.value);

                this.userFirstName.value = '';
                this.userLastName.value = '';
                this.userEmail.value = '';
                this.userGenderMale.checked = false;
                this.userGenderFemale.checked = false;

            } else {
                alert ('Please, choose gender');
                return
            }


        } else {
            alert ('Please, fill in all fields for user');
            return
        }

    }


    render() {
        return (
            <div className="panel panel-primary">
                <div className="well">

                    <form onSubmit={this.buttonClick.bind (this)}>

                        <h3>Add new user</h3>
                        {/*//user first name*/}
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-user fa-lg"
                                                                       aria-hidden="true"></i></span>
                                <input type="text" id="userFirstName"
                                       className="form-control" ref={(input)=>this.userFirstName = input}
                                       placeholder="First name"/>
                            </div>
                        </div>

                        {/*//user last name*/}
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-user-o fa-lg"
                                                                       aria-hidden="true"></i></span>
                                <input type="text"
                                       className="form-control" ref={(input)=>this.userLastName = input}
                                       placeholder="Last name"/>
                            </div>
                        </div>

                        {/*//user gender name*/}
                        <div className="form-group">
                            <div className="input-group">

                                <label className="radio">Gender:</label>
                                <label className="radio-inline">
                                    <input type="radio" name="radioGroup" ref={(input)=>this.userGenderMale = input}/>
                                    <i className="fa fa-male fa-lg" aria-hidden="true"> </i>
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="radioGroup" ref={(input)=>this.userGenderFemale = input}/>
                                    <i className="fa fa-female fa-lg" aria-hidden="true"> </i>
                                </label>
                            </div>
                        </div>

                        {/*//user email*/}
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-envelope fa-lg"
                                                                       aria-hidden="true"></i></span>
                                <input type="email"
                                       className="form-control" ref={(input)=>this.userEmail = input}
                                       placeholder="Email"/>
                            </div>
                        </div>


                        <button className="btn btn-primary">Add user</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddUser;
