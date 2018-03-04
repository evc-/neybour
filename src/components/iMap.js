import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
//import {PropTypes} from 'react/addons';
//import shouldPureComponentUpdate from 'react-pure-render/function';

const CustomThing = ({ text }) => <div style={{backgroundColor:"green", height:"100px"}}>{text}</div>;

class GMap extends Component {
    


  static defaultProps = {
    center: [49.2, -122.9],
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
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
          >
            <CustomThing
                lat={59.955413}
              lng={30.337844}
              text={'Kreyser Avrora'}
            />
          </GoogleMapReact>

    );
  }
}
export default GMap;