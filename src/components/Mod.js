import React, { Component } from 'react';
import "./Mod.css"
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from 'react-bootstrap/Button';


class Mod extends Component{
	render(){
		const {showModal,open,close,children}=this.props;
		return(
<div className="Mod">
<Button onClick={open} >
    Open Modal
</Button>
     <Modal size="lg"  centered show={showModal} onHide={close}>
    <Modal.Header closeButton>
        <Modal.Title><h2>This is a modal 1</h2></Modal.Title>
    </Modal.Header>
    <Modal.Body>
       {children}
    </Modal.Body>
    <Modal.Footer>
        <Button variant="success" onClick={close}>Accept</Button>
        <Button variant="danger" onClick={close}>Decline</Button>
    </Modal.Footer>
</Modal>
</div>
			)
	}
}
export default Mod