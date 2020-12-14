import React, { Component } from "react";
import HogCard from "./HogCard"
class HogList extends Component {
  render() {
    return (
      <div style={{marginLeft:'375px', marginTop:'20px'}}>
        {this.props.hogs.map(hog => <HogCard hog={hog} key={hog.name}/>)}
      </div>
    );
  }
}

export default HogList;
