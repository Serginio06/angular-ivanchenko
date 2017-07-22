import React,{Component} from 'react';

class SearchItem extends Component {
    constructor(props) {
        super (props);
        this.state = {
            searchMenuStyle: 'search-dropdown-up',
            chosenValue:''
        }
    }

    toggleMyGenderMenu(menuElemToToggle) {
        var x = document.getElementById (menuElemToToggle);

        if (x.className === 'search-dropdown-up') {
            this.setState ({searchMenuStyle: 'search-dropdown-down'})
        } else {
            this.setState ({searchMenuStyle: 'search-dropdown-up'})
        }
    }

    chooseItem(e){
        this.setState ({searchMenuStyle: 'search-dropdown-up'})
        let elemValue = e.target.innerHTML;
        this.setState({chosenValue:elemValue});


    }


    render(){
        return(

                // === search-block 'I am' =====
                <div className="search-block">
                    <div className="search-underscore">
                        <span className="search-field-title">{this.props.elemValue}</span>
                        <span className="search-value">{this.state.chosenValue}</span>
                        {/*<button className="search-btn" onClick={this.toggleMyGenderMenu.bind(this,'MyGenderMenuElem')}>*/}
                        <button className="search-menu-btn" onClick={this.toggleMyGenderMenu.bind(this,this.props.element)}>
                            <div className="arrow-down"></div>
                        </button>
                    </div>
                    <div className={this.state.searchMenuStyle} id={this.props.element} >
                        {this.props.items.map((item,index)=>
                        <div className="search-drop-down-item" style={{cursor:'pointer'}} href="" key={index} onClick={this.chooseItem.bind(this)}>{item}</div>
                        )}
                        {/*<div className="search-drop-down-item" style={{cursor:'pointer'}} href="">{this.props.items[0]}</div>*/}
                        {/*<div className="search-drop-down-item" style={{cursor:'pointer'}} href="">{this.props.items[1]}</div>*/}
                    </div>
                </div>
        )
    }
}

export default SearchItem;