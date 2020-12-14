import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogsData from "../porkers_data";
// import HelloWorld from "./HelloWorld";
import HogList from "./HogList"
import Filter from "./Filter"

class App extends Component {

  state = {
    hogsStart:hogsData,
    hogs:hogsData,
    greaseFilter: 'none',
    sortType:'none'
    // hogs:hogsData.map(hog => {
    //   hog.show = false
    //   return hog
    // })
  }

  changeSortType = (e) => {
    this.setState({
      sortType:e.target.value
    })
  }

  changeGreasedSort = (e) => {
    this.setState({
      greaseFilter:e.target.value
    })
  }

  render() {
    let hogs = this.state.hogs
    if(this.state.greaseFilter === 'greased'){
      hogs = hogs.filter(hog => hog.greased === true)
    }else if(this.state.greaseFilter === 'not greased'){
      hogs = hogs.filter(hog => hog.greased === false)
    }
    
    if(this.state.sortType === 'name'){
      hogs = hogs.sort((a,b) => a.name.localeCompare(b.name))
    }else if(this.state.sortType === 'weight'){
      hogs = hogs.sort((a,b) => a.weight - b.weight)
    }

    console.log(this.state.hogs)
    console.log(hogs)
    return (
      <div className="App">
        <Nav />
        <Filter changeGreasedSort={this.changeGreasedSort} changeSortType={this.changeSortType}/>
        <HogList hogs={hogs}/>
      </div>
    );
  }
}

export default App;
