import React, {Component} from 'react';
import SearchItem from './SearchItem.jsx'
import {connect} from 'react-redux';
import {asyncGetInitUsers, asyncSearch} from './actions/async'

class Landing_search extends Component {

    searchUsers() {
        let genderToSearch = document.getElementsById (this.elements[1]);


        this.props.onSearch ('20-30');
    }


    render() {
        this.genders = ['Male', 'Female'];
        this.ages = ['upto 20', '20-30', '30-40', '40 and older'];
        this.purposes = ['Chating', 'Meeting', 'Dating'];
        this.country = ['Ukraine', 'Britain', 'USA'];

        this.elements = ['myGenderMenuElem', 'lookingGenderMenuElem', 'agesMenuElem', 'purposesMenuElem', 'countryMenuElem'];

        console.log ('this.props.usersFilterStore=', this.props.usersFilterStore);
        console.log ('this.props.userStore=', this.props.userStore);

        return (
            <div className="landing-search">
                {/*<SearchItem items={this.items} toggleMyGenderMenu={this.toggleMyGenderMenu} MyGenderMenuStyle={this.state.MyGenderMenuStyle}/>*/}
                <SearchItem items={this.genders} element={this.elements[0]} elemValue="I am:"/>
                <SearchItem items={this.genders} element={this.elements[1]} elemValue="Seeking a:"/>
                <SearchItem items={this.ages} element={this.elements[2]} elemValue="Age:"/>
                <SearchItem items={this.purposes} element={this.elements[3]} elemValue="To:"/>
                <SearchItem items={this.country} element={this.elements[4]} elemValue="Country:"/>
                <button className="crimson-btn" onClick={this.searchUsers.bind (this)}>Search</button>

            </div>
        )
    }

    componentDidMount() {
        console.log ('launch this.props.onGetInitUsers()');
        this.props.onGetInitUsers ();
        console.log ('userStore=', this.props.userStore);
    }

}

// export default Landing_search;
export default connect (
    store => (
    {
        // userStore: store.usersStore,
        userStore: store.usersStore.filter (userStore => userStore.age.includes (store.usersFilterStore)),
        usersFilterStore: store.usersFilterStore
    }
    ),
    dispatch => (
    {
        onSearch: (age)=> {
            dispatch (asyncSearch (age))
        },
        onGetInitUsers: ()=> {
            dispatch (asyncGetInitUsers ());

        }
    }
    )
) (Landing_search);