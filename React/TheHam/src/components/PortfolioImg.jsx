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
        // console.log ('this.props.portfolioImages= ', this.props.portfolioImages);

        return (
            <div className="std__internal__block__mobile">
                {this.props.portfolioImages.map ((item, index)=>
                    <img src={item.src} className="portfolio--images" alt={item.category} key={index} data-category={this.props.portfolioTabsTitle[item.category-1].title}
                         onMouseOver={this.showImgCategory.bind (this)}
                         onMouseLeave={this.hideImgCategory.bind (this)}/>
                )}

                <div className="portfolio--category--popup" ref={(div)=>this.categoryPopup = div}>aslkfjdlksjd </div>
            </div>

        )
    }

}

export default PortfolioImg;