import React, {Component} from 'react';

class NewsCard extends Component {

    render() {
        // this.src = './images/member2.jpeg';
        this.src = './React/TheHam/build/images/member2.jpeg';
        this.title = 'Amazing blog post';
        let outerElmeClass = '';

        // let transformedDate = new Date(this.props.news[0].date);
        // console.log('transformedDate.month= ', transformedDate.toLocaleString("en-us", { month: "short" }));
        // console.log('transformedDate.day= ', transformedDate.getDate());
        console.log('this.props.news[0].date= ', this.props.news[0].date);

        

        return (
            <div className="news--cards std__internal__block__mobile" id="news--cards">
                {this.props.news.map ((item, index)=> {
                    let transformedDate = new Date(item.date);

                        if (index === 3 || index === 7) {
                            outerElmeClass = 'news--card-outer-div-last';
                        } else {
                            outerElmeClass = 'news--card-outer-div';
                        }

                        let elem =
                            <div key={index} className="news-div">
                                <div className={outerElmeClass} >

                                    <div className="news--card-img"></div>
                                    {/*<img src={this.src} alt="" className="news--card-img"/>*/}
                                    <div className="news--card-name-div">
                                        <span className="news--card-name-div--name">{this.title}</span>
                                    </div>
                                    {/*<div className="news-date">{item.date}</div>*/}

                                </div>
                                <div className="news-date">{transformedDate.getDate()} {transformedDate.toLocaleString("en-us", { month: "short" })}</div>
                            </div>

                        return elem
                    }
                )}
            </div>
        )
    }


}

export default NewsCard;