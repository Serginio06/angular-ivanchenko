/**
 * Created by sergiiivanchenko on 03/07/2017.
 */

import React from 'react';

// class RegistrationForm extends Component {
let  message, userNameEl, userLoginEl, formMessageEl;
const RegistrationForm = function () {


    const onSubmit = function (event) {
        event.preventDefault ();
        // if (userName && userEmail) {
            message = "Form submitted with user name " + userNameEl.value + " and user login " + userLoginEl.value;
            formMessageEl.innerHTML = message;
        // }

    };

    return (
        <div>
            <form onSubmit={onSubmit}>

                <div className="form-group">
                    <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><span
                        className="glyphicon glyphicon-user"></span></span>
                        <input type="text"
                               className="form-control"
                               placeholder="Name"
                               ref={(input)=> {userNameEl = input}}
                               required
                               aria-describedby="userName"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><span
                        className="glyphicon glyphicon-pencil"></span></span>
                        <input type="text"
                               className="form-control"
                               placeholder="Login"
                               ref={(input)=> {userLoginEl = input}}
                               required
                               aria-describedby="userName"/>
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Send</button>
                </div>
            </form>

            <div className="well well-lg"
                 ref={(div)=> {formMessageEl = div}}></div>
        </div>

    );

};

export default RegistrationForm;