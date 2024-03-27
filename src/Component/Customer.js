import React, { useState } from 'react';
import { FaSearch ,FaArrowLeft} from 'react-icons/fa';
import { Modal, Button, Form } from 'react-bootstrap'; // Import Bootstrap components
import { Link } from 'react-router-dom';
import DashBoard from './DashBoard';
export default function Customer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div style={{ margin: '19px 55px 24px 37px', display: 'flex' }}>
      <Link to="/" style={{textDecoration:"none" ,justifyContent:"space-around"}} >        <h6 style={{ margin: '39px 33px 12px 0px', color:"black" }}>  <span style={{margin:"15px"}}><FaArrowLeft/></span>Customer List</h6></Link>
        <form className="form-inline" style={{ display: 'flex', margin: '33px 17px  ' }}>
          <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '166px' }} />
          <button className="btn" type="submit" style={{ margin: '-2px 0px 1px -99px', border: 'none', width: '166px' }}><FaSearch /></button>
          <button className="btn btn-success" style={{ margin: '0px 0px 0px 20px' }} onClick={(e) => {
    e.preventDefault(); // Prevent the default form submission or link click
    handleShow();
  }}>Add New Customer</button>
        </form>
      </div>
      <div>
        <div style={{ border: '2px solid', border: 'none', boxShadow: '9px 3px 12px 2px', width: '93%', margin: '36px 0px 0px 70px', padding: '20px' }}>
          <table className="table">
            <thead>
              <tr>
               
                <th scope="col" style={{ width: '150px' }}>Name</th>
                <th scope="col" style={{ width: '150px' }}>Email</th>
                <th scope="col" style={{ width: '100px' }}>Status</th>
                <th scope="col" style={{ width: '100px' }}>Reference</th>
                <th scope="col" style={{ width: '200px' }}>Employee Source</th>
                <th scope="col" style={{ width: '100px' }}>Source</th>
                <th scope="col" style={{ width: '150px' }}>Contact</th>
                <th scope="col" style={{ width: '100px' }}>Country</th>
                <th scope="col" style={{ width: '150px' }}> Date</th>
              </tr>
            </thead>
            <tbody>
              {/* Your table data goes here */}
              <tr>
               
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
      <div  >
     <Modal show={show} onHide={handleClose}  >
        <Modal.Header closeButton  style={{ backgroundColor: 'rgb(154, 168, 219)', color: '#fff' }}>
          <Modal.Title>Add New Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: 'rgb(154, 168, 219)', color: '#fff' }}>
          <Form style={{ backgroundColor: 'rgb(154, 168, 219)', color: '#fff' }}>
          
             <div style={{display:"flex", justifyContent:"space-around"}}>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{width:"200px"}}>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name here" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" autoFocus />
            </Form.Group>
             </div>

             <div style={{display:"flex", justifyContent:"space-around"}}>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Status</Form.Label>
              <Form.Control type=""  autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Reference</Form.Label>
              <Form.Control type="text"  autoFocus />
            </Form.Group>
             </div>

             <div style={{display:"flex", justifyContent:"space-around"}}>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Employee Source</Form.Label>
              <Form.Control type=""  autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Source</Form.Label>
              <Form.Control type="text"  autoFocus />
            </Form.Group>
             </div>

              <div style={{display:"flex", justifyContent:"space-around"}}>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contact</Form.Label>
              <Form.Control type="number" placeholder="" autoFocus />
            </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Date</Form.Label>
              <Form.Control type="date" placeholder="" autoFocus />
            </Form.Group>
             </div>
          

          
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "rgb(154, 168, 219)", color: '#fff' }}>
          
          <Button variant="" onClick={handleClose} style={{background:"white"}}>
            Add Customer
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
     
    </div>
  );
}
