import React from 'react';
import Header from './Header.js';

class Footer extends React.Component{
  render(){
    return(
      <div>
        <h1>我是尾部</h1>
        <Header />
      </div>
    )
  }
}
export default Footer;
