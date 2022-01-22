import React, { useState } from 'react';
import { Card, Container, Row, Col, Alert } from 'react-bootstrap'
import home1 from '../Utils/Images/home1.jpg'
import { DUMMY } from '../Utils/Data/Dummy'
function Housing() {
  const [search, setSearch] = useState('')
  let List = [];
  if (search !== '') {
    List = DUMMY.filter(data => data.city.toLowerCase().includes(search.toLowerCase()))
  }
  if(search!=='' && List.length===0){
    return(
      <div className='housings-inner' style={{ textAlign: 'center', color: '#3a3089' }}>
      <Container className='font-bold'>

        <h4 className='mb-3' style={{ textAlign: 'center', color: '#3a3089' }}><span style={{ color: 'crimson', fontSize: '50px', borderBottom: "5px dotted #3a3089" }}>&#62;</span>Housing City</h4>
        <input className='input-field' type='text' value={search} style={{ width: '80%' }} onChange={(e) => setSearch(e.target.value)} placeholder='Search By City' />
        <Alert variant='danger mt-3 mx-3'>Nothing Found, search with different value</Alert>
      </Container>
    </div>
    )
  }
  return (
    <div className='housings-inner' style={{ textAlign: 'center', color: '#3a3089' }}>
      <Container className='font-bold'>

        <h4 className='mb-3' style={{ textAlign: 'center', color: '#3a3089' }}><span style={{ color: 'crimson', fontSize: '50px', borderBottom: "5px dotted #3a3089" }}>&#62;</span>Housing City</h4>
        <input className='input-field' type='text' value={search} style={{ width: '80%' }} onChange={(e) => setSearch(e.target.value)} placeholder='Search By City' />
        <Row className='mx-auto'>
          {DUMMY.filter((data) => {
            if (search === '') {
              return data;
            } else if (data.city.toLowerCase().includes(search.toLowerCase())) {
              return data;
            }
          }).map((data, key) => {
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

export default Housing;
