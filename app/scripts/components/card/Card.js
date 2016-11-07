import React from 'react';

export default React.createClass({
  render() {
    console.log(this.props);
    let x = this.props.card;
    return (
      <div className="card">
        <img src="{x.cardAvatar}"/>
        <h2 className="name">{x.cardName}</h2>
        <article className="special">Special: {x.cardSpecial}</article>
        <article className="weakness">Weakness: {x.cardWeakness}</article>
        <article className="bio">{x.cardBio}</article>
        <article className="health">HP: {x.cardHealth}</article>
      </div>
    );
  }
});
