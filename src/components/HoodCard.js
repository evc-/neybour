import React, { Component } from 'react';
import {Col} from 'reactstrap';

class HoodCard extends Component {
    
    constructor(props){
        super(props);
        this.state={
        }
    }
    
  render() {
    return (
        <div id="card-bg">
            <div id="hood-img">
                <img src={this.props.hoodImg}/>
            </div>
            <div id="card-footer">
                <div id="hood-name">
                    {this.props.hoodName}
                </div>
                <div id="hood-coords">
                    {this.props.hoodLat} deg N 
                    <br />
                     {this.props.hoodLng} deg W
                </div>
            </div>
        </div>
    );
  }
}

export default HoodCard;
