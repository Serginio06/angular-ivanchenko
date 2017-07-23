import React,{Component} from 'react';
import NewsCard from './NewsCard.jsx';
import {connect} from 'react-redux';
import {asyncGetInitNews, asyncMoreNews} from './actions/async'

class News extends Component {


    moreNewsClick(){
        if ( this.moreNews ) {
            this.props.onGetInitNews();
            this.moreNews = false;
        } else {
            this.props.onMoreNews();
            this.moreNews = true;
        }
    }

    componentWillMount(){
        this.props.onGetInitNews();
        this.moreNews = false;
    }

    render(){

        let generateNewsCard = '';
        if ( this.props.newsStore ) {
            generateNewsCard = <NewsCard news={this.props.newsStore} />;
        }

        return(
            <div className="news">
                <h2 className="black-text">Breaking news
                    <img src="./images/stripes.png" alt="" className="strips--img"/>
                </h2>

                {generateNewsCard}

                <button className="green-btn" onClick={this.moreNewsClick.bind(this)}><span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Load More</button>
            </div>
        )
    }
}

// export default News;
export default connect (
    store => (
    {
        // userStore: store.newsStore.filter (userStore => userStore.age.includes (store.usersFilterStore))
        newsStore: store.newsStore
        // usersFilterStore: store.usersFilterStore
    }
    ),
    dispatch => (
    {
        onMoreNews: ()=> {
            dispatch (asyncMoreNews ())
        },
        onGetInitNews: ()=> {
            dispatch (asyncGetInitNews ());

        }
    }
    )
) (News);