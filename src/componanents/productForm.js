import React from 'react';
import '../App.css';
import products from '../pages/Products'
import {Button,Row,Col,Form} from 'react-bootstrap';

const productForm = props => {
    const {classes} = props;
<products/>
    return (
        <div className={classes.newTodo}>
          <Row>
      <Col>
      <h2 className="text-center">ADD NEW PRODUCT</h2>
      <form id="ProductForm"  >
    
        <Form.Group controlId="formBasic">
          <label>Product Name</label>
          <Form.Control type="text" value={ProductName} onChange={e=>this.setNewName (e.target.value) } /> 
          <label>Product Price</label>
          <Form.Control type="number" value={ProductPrice} onChange={e=>this.NewPrice(e.target.value)} />
          <br></br>
          <Button type="submit" variant="primary" onClick={onCreate}>Create Product</Button>
        
        </Form.Group>
      </form>
      </Col>
    </Row>
        </div>
    );
}

export default productForm;
