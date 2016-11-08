import React from 'react';

export default React.createClass({
  render() {
    let x = this.props.card;
    return (
      <div className="card">
        <img src={x.cardAvatar}/>
        <h2 className="name">{x.cardName}</h2>
        <article className="bio">{x.cardBio}</article>
        <article className="special">Special: {x.cardSpecial}</article>
        <article className="weakness">Weakness: {x.cardWeakness}</article>
      </div>
    );
  }
});
