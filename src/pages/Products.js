import React from 'react';
import firebase from '../firebase';
import '../App.css';
import logo from './lg.svg'
import {Button,Row,Container,Col,Form,Navbar,Table,Nav} from 'react-bootstrap';
function Products() {
const[products,setProduct]=React.useState([]);
const[ProductName,setNewName]=React.useState(' ');
const[ProductPrice,NewPrice]=React.useState(' ');
const [updateName,SetUpdateName]=React.useState(' ');
const [updatePrice,SetUpdatePrice]=React.useState(' ');

React.useEffect(()=>{
const fetchData=async()=>{
  const db= firebase.firestore();
  db.collection("products")
   .onSnapshot(function(data){
    console.log(data)
    setProduct(data.docs.map(doc=>({...doc.data(),id:doc.id})));
  });
};
fetchData();

},[]);
const onCreate=()=>{
  const db=firebase.firestore()
  db.collection("products").add({name:ProductName ,price:ProductPrice})
};

function onDelete(id){
  const db=firebase.firestore()
  db.collection("products").doc(id).delete()

};
const onUpdate=(id)=>{
  const db=firebase.firestore()
  db.collection('products').doc(id).set({name:updateName , price:updatePrice})
};
return(
<div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">
  <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
    CRUD Operaions Using React-Bootstrap
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
     
    </Nav>
    <Nav>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link eventKey={2} href="/Products">
       Add Product
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  <br></br>
  <Container>
    <Row>
      <Col>
      <h2 className="text-center">ADD NEW PRODUCT</h2>
      <form>
        <Form.Group controlId="formBasic">
          <label>Product Name</label>
          <Form.Control type="text" value={ProductName} onChange={e=>setNewName (e.target.value)} /> 
          <label>Product Price</label>
          <Form.Control type="text" value={ProductPrice} onChange={e=>NewPrice(e.target.value)} />
          <br></br>
          <Button variant="primary" onClick={onCreate}>Create Product</Button>
        </Form.Group>
      </form>
      </Col>
    </Row>
    <br></br>
    <Row>
      <Col>
      <Table striped bordered hover variant="dark">
        <thead>
          <th>ID</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Delete Product</th>
          <th>Update Product</th>
        </thead>
        <tbody>
          {products.map(spell=>(
          <tr key={spell.id}>
          <td>{spell.id}</td>
          <td>{spell.name}</td>
          <td>{spell.price}</td>
          <td><Button variant="danger" onClick={()=>onDelete(spell.id)}>Delete Product</Button></td>
          <td>
          <label>Product Name</label>
          <input type="text" className="form-control" placeholder={spell.name} onChange={e=>SetUpdateName(e.target.value)}></input><br></br>
          <label>Product Price</label>
          <input type="text" className="form-control" placeholder={spell.price} onChange={e=>SetUpdatePrice(e.target.value)}></input><br></br>
          <Button className="text-white ml-4" variant="warning" onClick={()=>onUpdate(spell.id)}>Update Product </Button>
          
          </td>
        </tr>
          ))}
          
        </tbody>
      </Table>
      </Col>
    </Row>
  </Container>
</div>



)
  
}

export default Products;
