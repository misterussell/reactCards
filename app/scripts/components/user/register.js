import React from 'react';

export default React.createClass({
render() {
    return(
      <form className="login">
        <input type="text" placeholder="First Name" value="" />
        <input type="text" placeholder="Last Name" value="" />
        <input type="text" placeholder="User Name" value="" />
        <input type="password" placeholder="Password" value="" />
        <input type="submit" value="Submit" />
      </form>
    )
  }
});
