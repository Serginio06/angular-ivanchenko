import React, {Component} from 'react';
import {connect} from 'react-redux';
import {asyncGetInitFeedback} from './actions/async'


class Feedback_leave_msg extends Component {


    addMsg(){
        this.props.addMsg(this.msgTitle.value, this.msgMsg.value);
        this.msgTitle.value = '';
            this.msgMsg.value = '';
    }




    render() {
        // console.log ('feedbackStore=', this.props.feedbackStore);


        return (
            <div className="feedback--leave-msg--form std__internal__block__mobile">
                <div className="feedback-fields">
                    <input className="feedback-input-title" type="text" placeholder="Title" ref={(input) => this.msgTitle = input} />
                    <textarea className="feedback-input-msg" type="text" placeholder="Message" ref={(input) => this.msgMsg = input} />
                </div>
                <div className="feedback-btn">
                    <h2 className="black-text">Leave us a message</h2>
                    <button className="green-btn uppercase" onClick={this.addMsg.bind(this)  }><span
                        className="glyphicon glyphicon-plus" aria-hidden="true" ></span> Add comment
                    </button>
                </div>

            </div>
        )
    }
}

export default Feedback_leave_msg;