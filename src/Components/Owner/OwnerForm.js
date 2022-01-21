import React , {useState} from 'react'
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function OwnerForm() {
  const [owner, setowner] = useState({
    name:'',
    email:'',
    address:'',
    city:'',
    state:'', 
    price:''
  })
  const [phone, setPhone]= useState()
  const formData = new FormData();
  const submitHandler=(e)=>{
    e.preventDefault(); 
    formData.append('name', owner.name);
    formData.append('email', owner.email);
    formData.append('address', owner.address);
    formData.append('city', owner.city);
    formData.append('state', owner.state);
    formData.append('price', owner.price);
    formData.append('phone',phone);
    
  }
  return (
    <Container className='my-5 form-page'>
      <Card className='p-3 shadow form-card2'>
        <Card.Title className='mt-2'>Add New Housing</Card.Title>
        <Card.Body>
          <Form onSubmit={(e)=> submitHandler(e)}>
            <Row className='mt-3'>
              <Col>
                <Form.Control className='input-field' value={owner.name} onChange={(e)=>setowner({...owner, name:e.target.value})} type='text' placeholder='First & Last Name' id='nameinput'/>

              </Col>
            </Row>
            <Row className='mt-3'>
              <Col>
                <Form.Control className='input-field' value={owner.email} onChange={(e)=>setowner({...owner, email:e.target.value})} type="email" placeholder="Email" id='emailinput' />

              </Col>
            </Row>
            <Row className='mt-3'>
              <Col>
                <Form.Control className='input-field' value={owner.address} onChange={(e)=>setowner({...owner, address:e.target.value})} type="text" placeholder="Address" id='address' />

              </Col>
              <Col>
                <Form.Control className='input-field' value={owner.city} onChange={(e)=>setowner({...owner, city:e.target.value})} type="text" placeholder="City" id='city' />

              </Col>
              </Row>
            <Row className='mt-3'>
              <Col>
                <Form.Control className='input-field' value={owner.state} onChange={(e)=>setowner({...owner, state:e.target.value})} type="text" placeholder="State" id='state' />

              </Col>
              <Col>
                <Form.Control className='input-field' value={owner.price} onChange={(e)=>setowner({...owner, price:e.target.value})} type="number" placeholder="Price" id='price' />

              </Col>
            
              <Col>
                <PhoneInput defaultCountry="IN" placeholder='Phone Number' className='input-field' value={phone} onChange={setPhone}/>
              </Col>
            </Row>
            <Button variant='success' type='submit' className='mt-2'>Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default OwnerForm;
