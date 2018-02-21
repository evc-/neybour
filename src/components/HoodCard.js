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

                <Col md="3" xs="6">
                    <div id="card-bg">
    
                        <div id="hood-img">
                            <img src={this.props.hoodImg}/>
                        </div>
                        <div id="card-footer">
                            <div id="hood-name">
                                {this.props.hoodName}
                            </div>
                            <div id="hood-desc">
                                {this.props.hoodDesc}
                            </div>
                            <br />
                            <div id="hood-coords">
                                {this.props.hoodCoords}
                            </div>
                        </div>
        
                    </div>
                    <br />
                </Col>
                


    );
  }
}

export default HoodCard;
