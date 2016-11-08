import React from 'react';

export default React.createClass({
  render() {
    return (
      <ul className="textNav">
        <a href="#"><li>Home</li></a>
        <a href="#createCard"><li>Create Card</li></a>
        <a href="#login"><li>Login</li></a>
        <a href="#register"><li>Register</li></a>
      </ul>
    );
  }
});
