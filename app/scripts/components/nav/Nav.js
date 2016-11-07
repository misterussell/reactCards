import React from 'react';

export default React.createClass({
  render() {
    return (
      <ul className="cards">
        <a href="#"><li>Home</li></a>
        <a href="#createCard"><li>Create Card</li></a>
        <a href="#login"><li>Login</li></a>
        <a href="#register"><li>Register</li></a>
        <a href="#card/0"><li>Card 1</li></a>
        <a href="#card/1"><li>Card 2</li></a>
        <a href="#card/2"><li>Card 3</li></a>
        <a href="#card/3"><li>Card 4</li></a>
        <a href="#card/4"><li>Card 5</li></a>
      </ul>
    );
  }
});
