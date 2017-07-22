import React,{Component} from 'react';

class Features_item extends Component {

    render(){
        return(
               <div>
                   {this.props.featuresImgPathArr.map((item,index)=>
                       <img className="landing-features-img" src={item} alt="" key={index}/>
                   )}
               </div>
        )
    }
}

export default Features_item;