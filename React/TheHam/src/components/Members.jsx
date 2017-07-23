import React,{Component} from 'react';
import MemberCard from './MemberCard.jsx';
import {membersData} from './../../static/data/membersData';


class Members extends Component {

    render(){
        return(
            <div className="members">
                <h2 className="black-text">Meet Out Team
                    <img src="./images/stripes.png" alt="" className="strips--img"/>
                </h2>
                <MemberCard membersData={membersData} />
            </div>
        )
    }
}

export default Members;