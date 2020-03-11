import React from 'react';
import firebase from './firebase';
import './App.css';
import {Button,Row,Container,Col,Form,Navbar,Table, NavbarBrand} from 'react-bootstrap';
function App() {
const[products,setProduct]=React.useState([]);
const[newProduct,setNewProduct]=React.useState(' ');
const [updateProdct,SetUpdateProduct]=React.useState(' ');

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
  db.collection("products").add({name:newProduct})
};

function onDelete(id){
  const db=firebase.firestore()
  db.collection("products").doc(id).delete()

};
const onUpdate=(id)=>{
  const db=firebase.firestore()
  db.collection('products').doc(id).set({name:updateProdct})
};
return(
<div>
  <Navbar bg="dark" variant="dark">
    <NavbarBrand href="home">
      CRUD Operations FOR Products Using React.
    </NavbarBrand>
  </Navbar>
  <br></br>
  <Container>
    <Row>
      <Col>
      <h2>ADD NEW PRODUCT</h2>
      <form>
        <Form.Group controlId="formBasic">
          <Form.Control type="text" value={newProduct} onChange={e=>setNewProduct (e.target.value)} /> 
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
          <th>Delete Product</th>
          <th>Update Product</th>
        </thead>
        <tbody>
          {products.map(spell=>(
          <tr key={spell.id}>
          <td>{spell.id}</td>
          <td>{spell.name}</td>
          <td><Button variant="outline-danger" onClick={()=>onDelete(spell.id)}>Delete Product</Button></td>
          <td>
          <input type="text" className="" placeholder={spell.name} onChange={e=>SetUpdateProduct(e.target.value)}></input>
          <Button className="text-white ml-4" variant="outline-warning" onClick={()=>onUpdate(spell.id)}>Update Product </Button>
          
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

export default App;
