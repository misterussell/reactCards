import React from 'react';

export default React.createClass({
  render() {
    return (
      <form className="newCard">
        <input type="text" placeholder="Name" value="" />
        <input type="text" placeholder="Bio" value="" />
        <input type="text" placeholder="Speciality" value="" />
        <input type="text" placeholder="Weakness" value="" />
        <input type="number" placeholder="HP" value="" />
        <input type="text" placeholder="Image link" value="" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
});
