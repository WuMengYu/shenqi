import React from 'react';
import img from './cat.jpg';

class Header extends React.Component{
  render(){
    return(
      <div>
        我是头部
        <img src={img}/>
        // <img src='http://网上的地址'/>
      </div>
    )
  }
}
export default Header;
