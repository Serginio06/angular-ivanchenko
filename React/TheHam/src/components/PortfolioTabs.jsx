import React, {Component} from 'react';
import PortfolioImg from './PortfolioImg.jsx';
import {portfolioImgData} from './../../static/data/portfolioImgData.js';

class PortfolioTabs extends Component {

    constructor(props) {
        super (props);
        this.state = {
            portfolioImages: portfolioImgData
        }
    }

    onTabClick(index, e) {
        this.tab[index].className = "portfolio--tab--title active";
        this.tab[this.activeTab].className = "portfolio--tab--title";
        this.activeTab = index;

        if (index === 0) {
            this.setState ({portfolioImages: portfolioImgData});
        } else {
            let filteredImages = portfolioImgData.filter ((item)=> {
                return (
                    item.category === index + 1
                );
            });
            this.setState ({portfolioImages: filteredImages});
        }
    }


render ()
{
    this.tab = [];

    return (
        <div className="std__internal__block__mobile">
            <div className="services--tab">
                {this.props.portfolioTabsTitle.map ((item, index)=>
                    <div className="portfolio--tab--title" ref={(tab)=>this.tab[index] = tab} key={index}
                         onClick={this.onTabClick.bind (this, index)}>{item.title}</div>
                )}
            </div>

            <PortfolioImg portfolioImages={this.state.portfolioImages}
                          portfolioTabsTitle={this.props.portfolioTabsTitle}/>

        </div>
    )
}

componentDidMount ()
{
    this.activeTab = 0;
    this.tab[0].className = "portfolio--tab--title active"
}
}

export default PortfolioTabs;