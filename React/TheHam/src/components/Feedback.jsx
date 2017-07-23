import React, {Component} from 'react';
import {connect} from 'react-redux';
import {asyncGetInitFeedback} from './actions/async'
import Feedback_messages from './Feedback_messages.jsx'
import Feedback_leave_msg from './Feedback_leave_msg.jsx'


class Feedback extends Component {

    addMsg(msgTitle, msgText) {

        let obj = {
            id: Date.now ().toString ().slice (-4),
            title: msgTitle,
            text: msgText
        };

        this.props.onAddFeedback (obj)
    }

    deleteMsg(index) {
        this.props.onDeleteFeedback (index)
    }

    componentWillMount() {
        this.props.onGetInitFeedback ();
    }

    render() {
        // console.log('feedbackStore=', this.props.feedbackStore);


        return (
            <div className="feedback">
                <h2 className="black-text">Feedback
                    <img src="./images/stripes.png" alt="" className="strips--img"/>
                </h2>

                <Feedback_messages feedbackStore={this.props.feedbackStore} deleteMsg={this.deleteMsg.bind (this)} />
                <Feedback_leave_msg addMsg={this.addMsg.bind (this)}  />


                {/*<div className="feedback--form std__internal__block__mobile" id="member--cards">*/}
                {/*{this.props.feedbackStore.map((item,index)=>*/}
                {/*<div className="feedbacke--messags-content" key={index}>*/}
                {/*<div className="feedback--msg-title" aria-label="Right Align">{item.title}*/}
                {/*<span className="glyphicon glyphicon-remove pull-right" aria-hidden="true"></span>*/}
                {/*</div>*/}
                {/*<div className="feedback--msg-msg">{item.text}</div>*/}
                {/*</div>*/}
                {/*)}*/}
                {/*</div>*/}

                {/*{generateNewsCard}*/}

                {/*<button className="green-btn uppercase" onClick={this.deleteMsg.bind (this,1)}><span*/}
                {/*className="glyphicon glyphicon-plus" aria-hidden="true"></span> delete comment*/}
                {/*</button>*/}
            </div>
        )
    }
}

// export default Feedback;
export default connect (
    store => (
    {
        // userStore: store.newsStore.filter (userStore => userStore.age.includes (store.usersFilterStore))
        feedbackStore: store.feedbackStore
        // usersFilterStore: store.usersFilterStore
    }
    ),
    dispatch => (
    {
        onAddFeedback: (newMsg)=> {
            dispatch ({
                type: "ADD-FEEDBACK",
                payload: newMsg
            })
        },
        onDeleteFeedback: (index)=> {
            dispatch ({
                type: "DELETE-FEEDBACK",
                payload: index
            })
        },
        onGetInitFeedback: ()=> {
            dispatch (asyncGetInitFeedback ());

        }
    }
    )
) (Feedback);