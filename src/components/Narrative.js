import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

class Narrative extends Component {
    
    constructor(props){
        super(props);
        
        this.state={
            
        }
    }
    

  render() {
      
    return (
        <Container>
            <Row>
                <Col xs="1"></Col>
                <Col xs="10">
                    <div>
                        {this.props.children}
                    </div>
                </Col>
                <Col xs="1"></Col>
            </Row>
        </Container>
    );
  }
}

export default Narrative;
