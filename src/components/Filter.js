import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div>
        <div>
          <a>Grease Sort</a>
          <select onChange={(e)=> this.props.changeGreasedSort(e)}>
            <option value='none'>None</option>
            <option value='greased'>Greased</option>
            <option value='not greased'>Not Greased</option>
          </select>
        </div>
        <div>
        <a>Sort Type</a>
          <select onChange={(e)=> this.props.changeSortType(e)}>
            <option value='name'>Name</option>
            <option value='weight'>Weight</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filter;
