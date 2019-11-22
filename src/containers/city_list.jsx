import React, { Component }from 'react';

class CityList extends Component {



  render() {
    return (
      <ul className="list-group cities">
        {this.renderList()}
      </ul>
    );
  }
};

export default CityList;
