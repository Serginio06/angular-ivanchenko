import React,{Component} from 'react';
import {Link} from 'react-router';
import NewsCard from './NewsCard.jsx';
import {connect} from 'react-redux';
import {asyncGetInitNews, asyncMoreNews} from './actions/async'

class News extends Component {

    // constructor(){
    //     super();
    //     this.state = {
    //         moreNews:false
    //     }
    // }



    moreNewsClick(){

        // console.log('this.props.newsStore.length=', this.props.newsStore.length);
        
        if ( this.moreNews <=  25) {
            this.props.onMoreNews(this.moreNews);
            this.moreNews = this.moreNews + 8;
        }

    }

    componentWillMount(){
        this.props.onGetInitNews();
        this.moreNews = 15;
    }

    render(){

        // console.log('this.refs.child__elem= ', this.refs.child__elem)
        let generateNewsCard = '';
        if ( this.props.newsStore ) {
            generateNewsCard = <NewsCard news={this.props.newsStore} />;
        }

        return(
            <div className="news" id="news">
                <h2 className="black-text">Breaking news
                    <img src="./images/stripes.png" alt="" className="strips--img"/>
                </h2>

                {generateNewsCard}

                <button className="green-btn" onClick={this.moreNewsClick.bind(this)}><span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Load More</button>
                {/*<div>*/}
                    {/*<h3 className="black-text">test routes</h3>*/}
                    {/*<Link to="/news-details/567" myad={888}><button className="btn btn-lg btn-success">News details</button></Link>*/}
                    {/*/!*<div className="panel">{this.props.children}</div>*!/*/}
                {/*</div>*/}
            </div>
        )
    }
}

// export default News;
export default connect (
    store => (
    {
        // userStore: store.newsStore.filter ((item,index) => userStore.age.includes (store.usersFilterStore))
        newsStore: store.newsStore.filter ((item,index) => {return index <= store.newsFilterStore}),
        // newsStore: store.newsStore,
        newsFilterStore: store.newsFilterStore
        // usersFilterStore: store.usersFilterStore
    }
    ),
    dispatch => (
    {
        onMoreNews: (quantity)=> {
            dispatch({
                type: "GET-MORE-NEWS",
                payload: quantity
            });
            // dispatch (asyncMoreNews (quantity))
        },
        onGetInitNews: ()=> {
            dispatch (asyncGetInitNews ());

        }
    }
    )
) (News);