import React, {Component} from 'react';
import PortfolioImg from './PortfolioImg.jsx';
import {portfolioImgData} from './../../static/data/portfolioImgData.js';

class PortfolioTabs extends Component {

    constructor(props) {
        super (props);
        this.state = {
            // tabSrc: this.props.services[0].src,
            // tabText: this.props.services[0].text,
            portfolioImages : portfolioImgData
        }
    }

    onTabClick( index,e) {

        // this.setState({tabSrc: this.props.services[index].src});
        // this.setState({tabText: this.props.services[index].text});

        this.tab[index].className = "portfolio--tab--title active";
        this.tab[this.activeTab].className = "portfolio--tab--title";
        this.activeTab = index;
    }


    render() {
        this.tab = [];

        return (
            <div className="std__internal__block__mobile">
                <div className="services--tab">
                    {this.props.portfolioTabsTitle.map ((item, index)=>
                        <div className="portfolio--tab--title" ref={(tab)=>this.tab[index] = tab} key={index}
                             onClick={this.onTabClick.bind (this, index)}>{item.title}</div>
                    )}
                </div>

                <PortfolioImg portfolioImages={this.state.portfolioImages} portfolioTabsTitle={this.props.portfolioTabsTitle} />

            </div>
        )
    }

    componentDidMount() {
        this.activeTab = 0;
        this.tab[0].className = "portfolio--tab--title active"
    }
}

export default PortfolioTabs;