import React from 'react';

export default React.newClass({
render() {
    return (
      <form className="login">
        <input type="text" placeholder="User Name" value="" />
        <input type="password" placeholder="Password" value="" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
});
