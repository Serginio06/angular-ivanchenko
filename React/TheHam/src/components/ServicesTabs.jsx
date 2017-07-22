import React, {Component} from 'react';

class ServicesTabs extends Component {

    constructor(props) {
        super (props);
        this.state = {
            tabSrc: this.props.services[0].src,
            tabText: this.props.services[0].text,
        }
    }

    onTabClick( index,e) {

        this.setState({tabSrc: this.props.services[index].src});
        this.setState({tabText: this.props.services[index].text});

        this.tab[index].className = "services--tab--title active";
        this.tab[this.activeTab].className = "services--tab--title";
        this.activeTab = index;
    }


    render() {
        this.tab = [];

        return (
            <div className="services--tabs std__internal__block__mobile">
                <div className="services--tab">
                    {this.props.services.map ((item, index)=>
                        <div className="services--tab--title" ref={(tab)=>this.tab[index] = tab} key={index}
                             onClick={this.onTabClick.bind (this, index)}>{item.title}</div>
                    )}
                </div>
                <div className="service--tab--content">
                    <img src={this.state.tabSrc} className="service--tab--content--img"></img>
                    <p className="service--tab--content--description">{this.state.tabText}</p>
                    {/*<div className="service--tab--content--description">{this.state.tabText}</div>*/}
                </div>

            </div>
        )
    }

    componentDidMount() {
        this.activeTab = 0;
        this.tab[0].className = "services--tab--title active"
    }
}

export default ServicesTabs;