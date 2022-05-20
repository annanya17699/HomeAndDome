import React , {useState} from 'react'
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Redirect, useHistory } from 'react-router-dom'

function Signup() {
  const history =useHistory()
  const [user, setuser] = useState({
    name:'',
    email:'',
    password: '',
    type: 'none'
  })

  const [phone, setPhone]= useState()
  const submitHandler=(e)=>{
    e.preventDefault(); 
    console.log(user, phone);
    history.push('/')
  }

  return (
    <Container className='my-5 form-page'>
      <Card className='p-3 mx-auto shadow form-card'>
        <Card.Title className='mt-2'>Create Account</Card.Title>
        <Card.Body>
          <Form onSubmit={(e)=> submitHandler(e)}>
            <Row className='mt-3'>
              <Col>
                <Form.Control value={user.name} className='input-field' onChange={(e)=>setuser({...user, name:e.target.value})} type='text' placeholder='First & Last Name' id='nameinput'/>

              </Col>
              </Row>
            <Row className='mt-3'>
              <Col>
                <Form.Control value={user.email} className='input-field' onChange={(e)=>setuser({...user, email:e.target.value})} type="email" placeholder="Email" id='emailinput' />

              </Col>
              </Row>

              <Row className='mt-3'>
              <Col>
                <Form.Select value={user.userType} className='input-field' onChange={(e)=>setuser({...user, type:e.target.value})} id='userTypeinput' >
                <option value="none">None</option>
                <option value="owner">Owner</option>
                <option value="renter">Renter</option>
                </Form.Select>
                </Col>
              </Row>

              <Row className='mt-3'>
              <Col>
                <PhoneInput defaultCountry="IN" placeholder='Phone Number' value={phone} className='input-field' onChange={setPhone}/>
              </Col>
              </Row>
            
            <Row className='mt-3'>
              <Col>
                <Form.Control value={user.password} className='input-field' onChange={(e)=>setuser({...user, password:e.target.value})} type="password" placeholder="Password" id='passwordinput' />

              </Col>
              </Row>

            <Button variant='success' type='submit' className='mt-2'>Submit</Button>
          </Form>
        </Card.Body>
        <Button variant='dark' onClick={()=> history.push('/login')}>Switch to login</Button>
      </Card>
    </Container>
  )
}

export default Signup
