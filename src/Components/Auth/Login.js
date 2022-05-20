import React , {useState} from 'react'
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Redirect, useHistory } from 'react-router-dom'

function Login() {
 const history = useHistory()
  const [user, setuser] = useState({
    name:'',
    password:''
  })
  

  const submitHandler=(e)=>{
    e.preventDefault(); 
    console.log(user);
    history.push('/')
  }
  return (
    <Container className='my-5 form-page'>
      <Card className='p-3 mx-auto shadow form-card'>
        <Card.Title className='mt-2'>Login</Card.Title>
        <Card.Body>
          <Form onSubmit={(e)=> submitHandler(e)}>
          <Row className='mt-3'>
              <Col>
                <Form.Control value={user.name} className='input-field' onChange={(e)=>setuser({...user, name:e.target.value})} type="text" placeholder="Name" id='nameinput' />

              </Col>
              </Row>
            <Row className='mt-3'>
              <Col>
                <Form.Control value={user.password} className='input-field' onChange={(e)=>setuser({...user, password:e.target.value})} type="Password" placeholder="password" id='passwordinput' />

              </Col>
              </Row>
            
            <Button variant='success' type='submit' className='mt-2'>Submit</Button>
          </Form>
        </Card.Body>
        <Button variant='dark' onClick={()=> history.push('/signup')}>Switch to signup</Button>
      </Card>
    </Container>
  )
}

export default Login
