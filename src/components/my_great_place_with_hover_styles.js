const K_SIZE = 35;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  border: '3.5px solid white',
  borderRadius: K_SIZE,
  background:'linear-gradient(to right, #F7EAE2, #EFC2CA)',
  textAlign: 'center',
  color: 'white',
  fontSize: 14,
  fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer'
};

const greatPlaceStyleHover = {
  ...greatPlaceStyle,
  border: '3.5px solid #EFA0A6',
  color: '#EFA0A6',
    background:'white'
};

export {greatPlaceStyle, greatPlaceStyleHover, K_SIZE};