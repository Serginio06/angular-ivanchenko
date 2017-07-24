import React, {Component} from 'react';
import {connect} from 'react-redux';
import {asyncGetInitNews, asyncMoreNews} from './actions/async'

class NewsDetails extends Component {


    componentWillMount() {
        this.props.onGetInitNews ();
    }

    render() {

        return (
            <div className="news-details-form std__internal__block__mobile" id="member--cards">

                <div className="feedbacke--messags-content">
                    <div className="feedback--msg-title" aria-label="Right Align">
                        Date: <span className="news-details--date">{this.props.newsStore[this.props.params.id-1].date}</span></div>
                    <div className="feedback--msg-msg">{this.props.newsStore[this.props.params.id-1].text}</div>
                </div>
            </div>
        )
    }


}


export default connect (
    store => (
    {
        newsStore: store.newsStore
    }
    ),
    dispatch => (
    {
        onGetInitNews: ()=> {
            dispatch (asyncGetInitNews ());

        }
    }
    )
) (NewsDetails);