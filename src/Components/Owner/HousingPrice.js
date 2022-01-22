import React, { useState } from 'react';
import { Card, Container, Row, Col, Alert, Button, Form } from 'react-bootstrap'
import home1 from '../Utils/Images/home1.jpg'
import { DUMMY } from '../Utils/Data/Dummy'
function HousingPrice() {
  const [search, setSearch] = useState(1000)
  const [Arr, setArr] = useState(DUMMY)
  const HandleSearch = () => {
    let arr = DUMMY.filter((data) => {
      if (search === 1000) {
        return data;
      } else if (data.price <= search) {
        return data;
      }
    })
    setArr(arr);
  }
  if (search !== '' && Arr.length === 0) {
    return (
      <div className='housings-inner' style={{ textAlign: 'center', color: '#3a3089' }}>
        <Container className='font-bold'>

        <h4 className='mb-3' style={{ textAlign: 'center', color: '#3a3089' }}><span style={{ color: 'crimson', fontSize: '50px', borderBottom: "5px dotted #3a3089" }}>&#62;</span>Housing Price</h4>
        <p style={{fontSize:'20px'}}>Price : <span style={{ color: 'crimson' }}>{search}</span>&nbsp;
        <Form.Range style={{width:'30%'}} value={search} step={500} min={1000} max={15000} onChange={(e) => setSearch(e.target.value)}/>
        <Button className='mx-2' variant='success' onClick={() => HandleSearch()}>Search</Button>
          <Button className='mx-2' variant='danger' onClick={() => setArr(DUMMY)}>Reset</Button>
          </p>
          <Alert variant='danger mt-3 mx-3'>Nothing Found, search with different value</Alert>
        </Container>
      </div>
    )
  }
  return (
    <div className='housings-inner' style={{ textAlign: 'center', color: '#3a3089' }}>
      <Container className=' font-bold'>

        <h4 className='mb-3' style={{ textAlign: 'center', color: '#3a3089' }}><span style={{ color: 'crimson', fontSize: '50px', borderBottom: "5px dotted #3a3089" }}>&#62;</span>Housing Price</h4>
        <p style={{fontSize:'20px'}}>Price : <span style={{ color: 'crimson' }}>{search}</span>&nbsp;
        <Form.Range style={{width:'30%'}} value={search} step={500} min={1000} max={15000} onChange={(e) => setSearch(e.target.value)}/>
        <Button className='mx-2' variant='success' onClick={() => HandleSearch()}>Search</Button>
          <Button className='mx-2' variant='danger' onClick={() => setArr(DUMMY)}>Reset</Button>
          </p>
        <Row className='mx-auto'>
          {Arr.length > 0 && Arr.map((data, key) => {
            return (
              <Col key={key} lg={4} md={12} sm={12}>
                <Card className='m-3 shadow' style={{ textAlign: 'left' }}>
                  <Card.Img src={home1} alt='home' />
                  <Card.Header>
                    <Card.Title>Owner: <span style={{ color: 'crimson' }}>{data.name}</span></Card.Title>
                    <Card.Title>House Type: <span style={{ color: 'crimson' }}>{data.category}</span></Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Price: $ <span style={{ color: 'crimson' }}>{data.price}</span></Card.Title>
                    <Card.Title>Address: <span style={{ color: 'crimson' }}>{data.address}</span></Card.Title>
                    <Card.Title>City: <span style={{ color: 'crimson' }}>{data.city}</span></Card.Title>
                    <Card.Title>State: <span style={{ color: 'crimson' }}>{data.state}</span></Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Title>Phone No: <span style={{ color: 'crimson' }}>{data.phone}</span></Card.Title>
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

export default HousingPrice;
