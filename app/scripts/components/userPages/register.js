import React from 'react';

export default React.newClass({
render() {
    return(
      <form className="register">
        <input type="text" placeholder="First Name" value="" />
        <input type="text" placeholder="Last Name" value="" />
        <input type="text" placeholder="User Name" value="" />
        <input type="password" id="pw" placeholder="Password" value="" />
        <input type="password" id="pwConfirm" placeholder="Confirm Password" value="" />
        <input type="submit" value="Submit" />
      </form>
    )
  }
});
