import React from 'react';

export default React.createClass({
  render() {
    let x = this.props.card;
    return (
      <div className="createButton">
        <a href="#createCard"><button>Create a New Card</button></a>
      </div>
    );
  }
});
