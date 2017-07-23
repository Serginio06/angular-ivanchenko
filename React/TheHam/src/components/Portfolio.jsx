import React,{Component} from 'react';
import {portfolioTabsTitle} from './../../static/data/portfolioTabsTitle';
import PortfolioTabs from './PortfolioTabs.jsx';


class Portfolio extends Component {

    render(){
        return(
            <div className="portfolio" ref={(comp)=>this.component = comp} id="portfolio">
                <h2 className="black-text">Our Amazing work
                    <img src="./images/stripes.png" alt="" className="strips--img"/>
                </h2>
                <PortfolioTabs portfolioTabsTitle={portfolioTabsTitle}/>
            </div>
        )
    }


}

export default Portfolio;