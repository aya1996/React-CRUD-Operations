import React from 'react';
import {Button,Row,Col,Table} from 'react-bootstrap';

const ProductTable = props => {
    const {classes} = props;

    return (
        <div>
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
        </div>
    );
}

export default ProductTable;



