import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyGreatPlaceWithHover from './my_great_place_with_hover.jsx';
import '../App.css';

import {K_SIZE} from './my_great_place_with_hover_styles.js';
//import {PropTypes} from 'react/addons';
//import shouldPureComponentUpdate from 'react-pure-render/function';

class GMap extends Component {

  static defaultProps = {
    center: [49.2, -122.9],
    zoom: 9,
    greatPlaceCoords: {lat: 49.163, lng: -122.92}
  };

    constructor(props){
        super(props);
        
        this.state={
             
        }
    }
    
  render() {
        console.log(this.state.defaultCenter);
      
    return (

          <GoogleMapReact
            style={{height: "400px", backgroundColor:"green"}}
            bootstrapURLKeys={{ key: ["AIzaSyAKz6kap5OyHVyV5-AdIK5nW4FpvrqSZ9Y"] }}
            center={this.props.center}
            zoom={this.props.zoom}
            hoverDistance={K_SIZE / 2}
        >
        <MyGreatPlaceWithHover lat={49.2} lng={-123} text={'A'} />
        <MyGreatPlaceWithHover {...this.props.greatPlaceCoords} text={'B'} />
      </GoogleMapReact>

    );
  }
}
export default GMap;