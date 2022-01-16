import React , {useState} from 'react'
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import student1 from '../Utils/Images/student1.jpg'
function StudentForm() {
  const [student, setstudent] = useState({
    name:'',
    email:'',
    address:'',
    city:'',
    state:'',
    age:18
  })
  const [phone, setPhone]= useState()
  const formData = new FormData();
  const submitHandler=(e)=>{
    e.preventDefault(); 
    formData.append('name', student.name);
    formData.append('email', student.email);
    formData.append('address', student.address);
    formData.append('city', student.city);
    formData.append('state', student.state);
    formData.append('age', student.age);
    formData.append('phone',phone);
    
  }
  return (
    <Container className='my-5 form-page'>
      <Card className='p-3 shadow form-card'>
        <Card.Title className='mt-2'>Create Student Account</Card.Title>
        <Card.Body>
          <Form onSubmit={(e)=> submitHandler(e)}>
            <Row className='mt-3'>
              <Col>
                <Form.Control value={student.name} onChange={(e)=>setstudent({...student, name:e.target.value})} type='text' placeholder='First & Last Name' id='nameinput'/>

              </Col>
            </Row>
            <Row className='mt-3'>
              <Col>
                <Form.Control value={student.email} onChange={(e)=>setstudent({...student, email:e.target.value})} type="email" placeholder="Email" id='emailinput' />

              </Col>
            </Row>
            <Row className='mt-3'>
              <Col>
                <Form.Control value={student.address} onChange={(e)=>setstudent({...student, address:e.target.value})} type="text" placeholder="Address" id='address' />

              </Col>
              <Col>
                <Form.Control value={student.city} onChange={(e)=>setstudent({...student, city:e.target.value})} type="text" placeholder="City" id='city' />

              </Col>
              <Col>
                <Form.Control value={student.state} onChange={(e)=>setstudent({...student, state:e.target.value})} type="text" placeholder="State" id='state' />

              </Col>
            </Row>
            <Row className='mt-3'>
              <Col>
                <PhoneInput defaultCountry="IN" placeholder='Phone Number' value={phone} onChange={setPhone}/>
              </Col>
              <Col>
                <Form.Control value={student.age} onChange={(e)=>setstudent({...student, age:e.target.value})} type='number' placeholder='Age' min='18' id='age' />

              </Col>
            </Row>
            <Button variant='success' type='submit' className='mt-2'>Submit</Button>
          </Form>
        </Card.Body>
        <div>
          <img src={student1} alt='student' style={{ width: '20%', height: '20%' }} />
        </div>
      </Card>
    </Container>
  )
}

export default StudentForm
