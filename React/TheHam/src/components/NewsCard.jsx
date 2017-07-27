import React, {Component} from 'react';
import {Link} from 'react-router';
import newsPic1 from './../../static/images/service8.jpeg';
import newsPic2 from './../../static/images/service7.jpeg';
var newsPics = [newsPic1, newsPic2];

class NewsCard extends Component {

    render() {
        this.src = './React/TheHam/build/images/member2.jpeg';
        this.title = 'Amazing blog post';
        let outerElmeClass = '';
        let newImg = '';


        return (
            <div className="news--cards std__internal__block__mobile" id="news--cards">
                {this.props.news.map (
                    (item, index)=> {
                        let transformedDate = new Date (item.date);


                        if (index % 3 === 0 || index % 7 === 0 || index % 11 === 0 || index % 15 === 0 || index % 19 === 0) {
                            outerElmeClass = 'news--card-outer-div-last';
                        } else {
                            outerElmeClass = 'news--card-outer-div';
                        }

                        if (index % 2 === 0) {
                            newImg = {backgroundImage: `url(${newsPics[0]})`}
                        } else {
                            newImg = {backgroundImage: `url(${newsPics[1]})`}
                        }

                        let elem =
                            <Link key={index} to={"/news-details/" + item.id}>
                                <div className="news-div">
                                    <div className={outerElmeClass}>

                                        <div className="news--card-img" style={newImg}></div>
                                        {/*<img src={this.src} alt="" className="news--card-img"/>*/}
                                        <div className="news--card-name-div">
                                            <span className="news--card-name-div--name">{this.title}</span>
                                        </div>
                                        {/*<div className="news-date">{item.date}</div>*/}

                                    </div>
                                    <div
                                        className="news-date">{transformedDate.getDate ()} {transformedDate.toLocaleString ("en-us", {month: "short"})}</div>
                                </div>
                            </Link>

                        return elem
                    }
                )
                }
            </div>
        )
    }


}

export default NewsCard;