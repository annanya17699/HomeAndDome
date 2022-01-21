import React, { useState } from 'react';
import { Card, Container , Row, Col} from 'react-bootstrap'
import home1 from '../Utils/Images/home1.jpg'
function Housing() {
  const [search, setSearch] = useState('')
  const DUMMY = [
    {
      name: 'Max',
      email: 'max@gmail.com',
      address: 'House No 1, Street 1',
      city: 'New Delhi',
      state: 'Delhi',
      phone: 9876543210,
      price: 5000
    },
    {
      name: 'Sam',
      email: 'msam@gmail.com',
      address: 'House No 2, Street 1',
      city: 'New Delhi',
      state: 'Delhi',
      phone: 9876543210,
      price: 5500
    },
    {
      name: 'James',
      email: 'james@gmail.com',
      address: 'House No 1, Street 1',
      city: 'Kolkata',
      state: 'West Bengal',
      phone: 9876543210,
      price: 2000
    },
    {
      name: 'Marry',
      email: 'marry@gmail.com',
      address: 'House No 1, Street 1',
      city: 'Kolkata',
      state: 'West Bengal',
      phone: 9876543210,
      price: 1500
    }
  ]
  return (
    <div className='housings' style={{ textAlign: 'center', color: '#3a3089' }}>
      <Container className='about-inner font-bold'>

        <h2 className='mb-3' style={{ textAlign: 'center', color: '#3a3089' }}><span style={{ color: 'crimson', fontSize: '50px', borderBottom: "5px dotted #3a3089" }}>&#62;</span>Housings</h2>
        
        <input className='input-field' type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search By City' />
        <Row className='mx-auto'>
        {DUMMY.map(data => {
          return (
              <Col lg={6} md={12} sm={12}>
              <Card className='m-3' style={{textAlign:'left', width:'25rem'}}>
              <Card.Img src={home1} alt='home'/>
            <Card.Header>
            <Card.Title>Owner: <span style={{color:'crimson'}}>{data.name}</span></Card.Title>
            </Card.Header>
              <Card.Body>
              <Card.Title>Price: $ <span style={{color:'crimson'}}>{data.price}</span></Card.Title>
              <Card.Title>Address: <span style={{color:'crimson'}}>{data.address}</span></Card.Title>
              <Card.Title>City: <span style={{color:'crimson'}}>{data.city}</span></Card.Title>
              <Card.Title>State: <span style={{color:'crimson'}}>{data.state}</span></Card.Title>
              </Card.Body>
              <Card.Footer>
              <Card.Title>Phone No: <span style={{color:'crimson'}}>{data.phone}</span></Card.Title>
              </Card.Footer>
            </Card>
              </Col>
          )
        })}
        </Row>
      </Container>
    </div>
  )
}

export default Housing;
