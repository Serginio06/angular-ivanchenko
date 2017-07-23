import React, {Component} from 'react';
import {connect} from 'react-redux';
import {asyncGetInitFeedback} from './actions/async'


class Feedback_messages extends Component {

    deleteMsg(index){
        this.props.deleteMsg(index);
    }

    render() {

        return (

                <div className="feedback--form std__internal__block__mobile" id="member--cards">
                    {this.props.feedbackStore.map((item,index)=>
                    <div className="feedbacke--messags-content" key={index}>
                        <div className="feedback--msg-title" aria-label="Right Align">{item.title}
                            <span className="glyphicon glyphicon-remove pull-right" aria-hidden="true"
                                  style={{cursor:'pointer'}} onClick={this.deleteMsg.bind(this, index)}></span>
                        </div>
                        <div className="feedback--msg-msg">{item.text}</div>
                    </div>
                    )}
                </div>

        )
    }
}

export default Feedback_messages;