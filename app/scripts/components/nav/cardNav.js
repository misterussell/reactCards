import React from 'react';
import Card from '../card/Card';
import data from '../../data'

export default React.createClass({
  render() {
    return (
      <ul className="cards">
        <a href="#card/0"><li className="singleCard"><Card card={data[0]}/></li></a>
        <a href="#card/1"><li className="singleCard"><Card card={data[1]}/></li></a>
        <a href="#card/2"><li className="singleCard"><Card card={data[2]}/></li></a>
        <a href="#card/3"><li className="singleCard"><Card card={data[3]}/></li></a>
        <a href="#card/4"><li className="singleCard"><Card card={data[4]}/></li></a>
        <a href="#card/5"><li className="singleCard"><Card card={data[5]}/></li></a>
      </ul>
    );
  }
});
