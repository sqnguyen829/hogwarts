import React, { Component } from "react";

class HogCard extends Component {
    state={
        show:true
    }

    flipCard = () => {
        this.setState({
            show: !this.state.show
        })
    }

  render() {
        const hog = this.props.hog
        const hogImageName = hog.name.split(' ').join('_').toLowerCase()
        const imageFile = require(`../hog-imgs/${hogImageName}.jpg`)
    return (
        <div className="ui card" style={{height:"300px"}} onClick={()=> this.flipCard()}>
            { this.state.show?
            <div style={{marginTop:'20px'}}>
                <div className="image">
                    <img src={imageFile} style={{height:"200px", width:"200px"}}/>
                </div> 
                <a className="header">{hog.name}</a>
            </div>
            :
            <div>
                <div className="content">
                    <div className="description" style={{marginTop:'50px'}}>
                        Specialty: {hog.specialty}
                    </div>
                </div>
                <div className="extra content" style={{marginTop:'50px'}}>
                    <a>
                        Weight:{hog.weight}lb
                    </a>
                </div>
                <div className="extra content" style={{marginTop:'50px'}}>
                    <a>
                        Highest Medal Achieved: {hog["highest medal achieved"]}
                    </a>
                </div>
            </div>
            }
        </div>
    );
  }
}

export default HogCard;
