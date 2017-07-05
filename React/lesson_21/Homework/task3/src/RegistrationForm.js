/**
 * Created by sergiiivanchenko on 04/07/2017.
 */

import React, {Component} from 'react';
import ErrorBlock from './ErrorBlock'

class RegistrationForm extends Component {

    constructor(props) {
        super (props);
        this.state = {
            errMsg: '',
            errNameMsg: '',
            errEmailMsg: '',
            errPhoneMsg: '',
            errMsgMsg: ''
        }
    }

    formSubmit(e) {
        e.preventDefault ();


        // console.log ('validateData(0, this.userName)= ', this.validateData (0, this.userName));

        if (this.validateData (0, this.userName) && this.validateData (1, this.userEmail) && this.validateData (2, this.userPhone) && this.validateData (3, this.userMsg)) {
            console.log ('form valide');
            alert('Your message was successfully saved');
            this.userName.value='';
            this.userPhone ='';
            this.userEmail='';
            this.userMsg='';




        } else {
            // console.log ('form invalide');
        }


        // console.log('this.userName.value=',this.userName.value);
        // if (!this.userName.value || !this.userEmail.value || !this.userPhone.value || !this.userMsg.value) {
        //     this.setState ({errMsg: "Please, fill in all fields"});
        //     console.log ('Form invalide');
        //     console.log('this.userName.style',this.userName.style);
        //
        //
        //
        //     !this.userName.value ? this.userName.style.backgroundColor = '#f2dede' :
        // this.userName.style.backgroundColor = ''; !this.userEmail.value ? this.userEmail.style.backgroundColor =
        // '#f2dede' : this.userEmail.style.backgroundColor = ''; !this.userPhone.value ?
        // this.userPhone.style.backgroundColor = '#f2dede' : this.userPhone.style.backgroundColor = '';
        // !this.userMsg.value ? this.userMsg.style.backgroundColor = '#f2dede' : this.userMsg.style.backgroundColor =
        // '';  } else { this.setState ({errMsg: ""});  // console.log ('Form valide'); }
    }

    validateData(filedType, e) {



// console.log('filedType=',filedType);
        let RegEx;
        let isValid;
        let elementToValidate;

        switch (filedType) {
            //check user name
            case 0:
                RegEx = /(.*[a-z]){3,}/i;
                elementToValidate = this.userName;
                isValid = RegEx.test (elementToValidate.value);
                !isValid ? this.setState ({errNameMsg: 'User name should have at least 3 characters'}) : this.setState ({errNameMsg: ''});
                break;
            //check user email
            case 1:
                RegEx = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                elementToValidate = this.userEmail;
                isValid = RegEx.test (elementToValidate.value);
                !isValid ? this.setState ({errEmailMsg: 'Please, enter valid email'}) : this.setState ({errEmailMsg: ''});
                break;
            //check user phone
            case 2:
                RegEx = /[0-9]{4,}/;
                elementToValidate = this.userPhone;
                isValid = RegEx.test (elementToValidate.value);
                !isValid ? this.setState ({errPhoneMsg: 'Phone number should have at least 4 digits'}) : this.setState ({errPhoneMsg: ''});
                break;
            //check user msg
            case 3:
                RegEx = /(.*[a-z0-9._]){10,}/i;
                elementToValidate = this.userMsg;
                isValid = RegEx.test (elementToValidate.value);
                !isValid ? this.setState ({errMsgMsg: 'Message should have at least 10 characters'}) : this.setState ({errMsgMsg: ''});
                break;
            default:
                // this.setState ({errNameMsg: ''});
                // e.target.style.backgroundColor = '';
                // return true;
                console.log ('WTF-1');
        }

// console.log('isValide= ',isValid);
        // let RegEx = /(.*[a-z]){3,}/i;
        // let isValid = RegEx.test (e.target.value);

        if (!isValid) {
            elementToValidate.style.backgroundColor = '#f2dede';
            // e.target.style.backgroundColor = '#f2dede';
            // this.setState ({errNameMsg: 'User name should have at least 3 characters'});
            return false;
        } else {
            // this.setState ({errNameMsg: ''});
            elementToValidate.style.backgroundColor = '';
            // e.target.style.backgroundColor = '';
            return true;
        }
    }


    // $scope.nameRegEx = /(.*[a-z]){3,}/i;
    // $scope.emailRegEx = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    // $scope.messageRegEx = /(.*[a-z0-9._]){20,}/i;


    render() {
        let msgBlock = [];


        if (this.state.errNameMsg) {
            msgBlock[0] = <ErrorBlock errStyle="label label-danger" msg={this.state.errNameMsg}/>;
        }
        if (this.state.errEmailMsg) {
            msgBlock[1] = <ErrorBlock errStyle="label label-danger" msg={this.state.errEmailMsg}/>;
        }
        if (this.state.errPhoneMsg) {
            msgBlock[2] = <ErrorBlock errStyle="label label-danger" msg={this.state.errPhoneMsg}/>;
        }
        if (this.state.errMsgMsg) {
            msgBlock[3] = <ErrorBlock errStyle="label label-danger" msg={this.state.errMsgMsg}/>;
        }
        if (this.state.errMsg) {
            msgBlock[4] = <ErrorBlock errStyle="label label-danger" msg={this.state.errMsg}/>;
        }


        // else {
        //     msgBlock[0] = <ErrorBlock errStyle="label label-danger slideup" msg={this.state.errNameMsg}/>;
        // }

        // if (this.state.errMsg) {
        //     msgBlock = <ErrorBlock msg={this.state.errMsg}/>;
        // }


        return (
            <div>

                <h3>Please, fill in form below</h3>
                <form className="form" onSubmit={this.formSubmit.bind (this)}>

                    {/*//user name input*/}
                    <div className="form-group">
                        <label htmlFor="userName">Name:</label>
                        <div className="input-group">
                            <span className="input-group-addon" id="userName-addon"><span
                                className="glyphicon glyphicon-user"></span></span>
                            <input type="text" className="form-control" id="userName" aria-describedby="userName"
                                   ref={(input)=>this.userName = input}
                                   onBlur={this.validateData.bind (this, 0)}/>
                        </div>
                        {msgBlock[0]}
                    </div>

                    {/*//user email input*/}
                    <div className="form-group">
                        <label htmlFor="userName">Email:</label>
                        <div className="input input-group">
                            <span className="input-group-addon" id="userEmail-addon">@</span>
                            <input type="email" className="form-control" id="userEmail" aria-describedby="userEmail"
                                   ref={(input)=>this.userEmail = input}
                                   onBlur={this.validateData.bind (this, 1)}/>
                        </div>
                        {msgBlock[1]}
                    </div>

                    {/*//user phone input*/}
                    <div className="form-group">
                        <label htmlFor="userPhone">Phone number:</label>
                        <div className="input input-group">
                            <span className="input-group-addon" id="userPhone-addon"><span
                                className="glyphicon glyphicon-earphone"></span></span>
                            <input type="number" className="form-control" id="userPhone" aria-describedby="userPhone"
                                   ref={(input)=>this.userPhone = input}
                                   onBlur={this.validateData.bind (this, 2)}/>
                        </div>
                        {msgBlock[2]}
                    </div>

                    {/*//user message input*/}
                    <div className="form-group">
                        <label htmlFor="userMsg">Message:</label>
                        <div className="input input-group">
                            <span className="input-group-addon" id="userMsg-addon"><span
                                className="glyphicon glyphicon-pencil"></span></span>
                            <input type="text" className="form-control" id="userMsg" aria-describedby="userMsg"
                                   ref={(input)=>this.userMsg = input}
                                   onBlur={this.validateData.bind (this, 3)}/>
                        </div>
                        {msgBlock[3]}
                    </div>


                    <button className="btn btn-primary">Save</button>

                </form>
                <br/>
                {msgBlock[4]}
            </div>
        )
    }

}

export default RegistrationForm;