import React, {Component} from 'react';
import AboutCharts from './AboutCharts.jsx'
import AboutBiography from './AboutBiography.jsx'
import AboutHistory from './AboutHistory.jsx'
import {chartsData} from './../../static/data/charts';

class AboutTabs extends Component {
    constructor(props) {
        super (props);
        this.state = {
            tabContent:<AboutCharts charts={chartsData} />
        }
    }

    onTabClick(index, e) {
        //
        // this.setState({tabSrc: this.props.services[index].src});
        // this.setState({tabText: this.props.services[index].text});
        this.props.onTabClick(index);
        this.tab[index].className = "about--tab--title uppercase active";
        this.tab[this.activeTab].className = "about--tab--title uppercase";
        this.tab[index].childNodes[0].className = 'about--tab--title-text active';
        this.tab[this.activeTab].childNodes[0].className = 'about--tab--title-text';
        this.activeTab = index;

        switch (+index+1){
            case 1:
                this.setState({tabContent:<AboutHistory />});
                 break;
            case 2:
                this.setState({tabContent:<AboutBiography />});
                break;
            case 3:
                this.setState({tabContent:<AboutCharts charts={chartsData} />});
                break;
            default:
                this.setState({tabContent:<AboutCharts charts={chartsData} />});
        }

    }


    render() {
        this.tab = [];
        // let tabContent = <Charts charts={chartsData} />;


        return (
            <div className="about-tabs">
                {this.props.aboutTabs.map ((item, index)=>
                    <div className="about--tab--title uppercase"
                         key={index} ref={(tab)=>this.tab[index] = tab}
                         onClick={this.onTabClick.bind (this, index)}>
                    <span className="about--tab--title-text">{item.title}
                    </span>
                    </div>
                )}
                {this.state.tabContent}


            </div>
        )
    }
    ;

    componentDidMount() {
        this.activeTab = 2;
        this.tab[this.activeTab].className = "about--tab--title uppercase active";
        this.tab[this.activeTab].childNodes[0].className = 'about--tab--title-text active';
    }
}

export default AboutTabs;