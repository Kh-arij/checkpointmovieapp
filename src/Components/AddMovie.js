import React ,{useState} from "react";
import {Button,Modal,Form} from 'react-bootstrap'
  
 const INIAL_VALUES = {
     title:null,
     description:null,
     posterURL:null,

 }

function AddMovie({addNewMovie}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Form, setForm] = useState(INIAL_VALUES)


  const  handleInputForm = (event)=> {
      const {target}  = event
      const {name:value} =target
      console.log(name,value)
  }











  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>  Title</Form.Label>
              <Form.Control 
                 name="title"
              type="title"
              onChange={handleInputForm}
              placeholder="Enter title" />
          
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>description</Form.Label>
              <Form.Control
              name="description"
              onChange={handleInputForm}
              type="text" placeholder="enter your description" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>picture</Form.Label>
              <Form.Control
                    onChange={handleInputForm}
                    name="posterURL"
              src="text" placeholder="enter y picture" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddMovie;
