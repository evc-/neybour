import React, { Component} from 'react';
import { Container, Row, Col} from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Button, ButtonGroup, ButtonToolbar, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class NarrativePin extends Component {
    
    constructor(props){
        super(props);
        
        this.state={
         modalOpen: false   
        }
        this.toggle = this.toggle.bind(this);
    }
    
    
  toggle() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  render() {
      
       
          return (

            <Col xs="12" style={{padding:"20px", backgroundColor:"#F7EAE2"}}>
              
                <div onClick={()=>this.setState({modalOpen:true})}>
                    <p>{this.props.pinMsg}</p>
                    <Button>Click me</Button>
                </div>

            <Modal autoFocus={false} isOpen={this.state.modalOpen}>
                <ModalHeader toggle={this.toggle}></ModalHeader>
                    <ModalBody>
                        {this.props.children}
                    </ModalBody>
            </Modal>
                        
            </Col>

        );
      }
  }

export default NarrativePin;
