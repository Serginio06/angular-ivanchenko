import React, {Component} from 'react';

class PortfolioImg extends Component {

    constructor(props) {
        super (props);
        this.state = {
            showCategory:false
        }
    }

    switchCategory() {
        console.log ('img selection');

    }

    showImgCategory(e) {
        // console.log ('e.target=', e.target.getAttribute('data-category'));

        let target = e.target;

        // let target = angular.element (document.querySelector (selector));
        let top = target.getBoundingClientRect ().top;
        let left = target.getBoundingClientRect ().left;
        let right = target.getBoundingClientRect ().right;
        let bottom = target.getBoundingClientRect ().bottom;
        let middleTop = (
                top + (
                    bottom - top
                ) / 2
            ) - 10;
        var middleSide = (
                left + (
                    right - left
                ) / 2
            ) - 50;

        this.categoryPopup.innerHTML = target.getAttribute('data-category');
        this.categoryPopup.className = 'portfolio--category--popup slideDown';
        this.categoryPopup.style.top = middleTop +'px';
        this.categoryPopup.style.left = middleSide +'px';

    }

    hideImgCategory() {
        this.categoryPopup.className = 'portfolio--category--popup';
        this.categoryPopup.style.top = 0 +'px';
        // this.categoryPopup.style.left = middleSide +'px';
    }


    render() {
        this.tab = [];
        console.log ('this.props.portfolioImages= ', this.props.portfolioImages);

        return (
            <div className="std__internal__block__mobile">
                {this.props.portfolioImages.map ((item, index)=>
                    <img src={item.src} className="portfolio--images" alt={item.category} key={index} data-category={this.props.portfolioTabsTitle[item.category-1].title}
                         onMouseOver={this.showImgCategory.bind (this)}
                         onMouseLeave={this.hideImgCategory.bind (this)}/>
                )}

                <div className="portfolio--category--popup" ref={(div)=>this.categoryPopup = div}>aslkfjdlksjd </div>
            </div>



            // <div className="services--tabs std__internal__block__mobile">
            //     {/*<div className="services--tab">*/}
            //         {/*{this.props.services.map ((item, index)=>*/}
            //             {/*<div className="services--tab--title" ref={(tab)=>this.tab[index] = tab} key={index}*/}
            //                  {/*onClick={this.onTabClick.bind (this, index)}>{item.title}</div>*/}
            //         {/*)}*/}
            //     {/*</div>*/}
            //
            //
            //
            //     <div className="service--tab--content">
            //         <img src={this.state.tabSrc} className="service--tab--content--img"></img>
            //         {/*<p className="service--tab--content--description">{this.state.tabText}</p>*/}
            //         {/*<div className="service--tab--content--description">{this.state.tabText}</div>*/}
            //     </div>
            //
            // </div>
        )
    }

    // componentDidMount() {
    //     this.activeTab = 0;
    //     this.tab[0].className = "services--tab--title active"
    // }
}

export default PortfolioImg;