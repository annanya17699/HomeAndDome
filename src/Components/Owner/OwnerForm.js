import React, { useState } from 'react'
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
function OwnerForm() {
  const [owner, setowner] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    price: '',
    category: ''
  })
  const [phone, setPhone] = useState()
  const formData = new FormData();
  const submitHandler = (e) => {
    e.preventDefault();
    formData.append('name', owner.name);
    formData.append('email', owner.email);
    formData.append('address', owner.address);
    formData.append('city', owner.city);
    formData.append('state', owner.state);
    formData.append('price', owner.price);
    formData.append('category', owner.category);
    formData.append('phone', phone);
  }
  return (
    <Container className='my-5 form-page'>
      <Card className='p-3 shadow form-card2'>
        <Card.Title className='mt-2'>Add New Housing</Card.Title>
        <Card.Body>
          <Form onSubmit={(e) => submitHandler(e)}>
            <Row className='mt-3'>
              <Col>
                <Form.Control className='input-field' value={owner.name} onChange={(e) => setowner({ ...owner, name: e.target.value })} type='text' placeholder='First & Last Name' id='nameinput' />

              </Col>
            </Row>
            <Row className='mt-3'>
              <Col>
                <Form.Control className='input-field' value={owner.email} onChange={(e) => setowner({ ...owner, email: e.target.value })} type="email" placeholder="Email" id='emailinput' />

              </Col>
            </Row>
            <Row className='mt-3'>
              <Col>
                <Form.Control className='input-field' value={owner.address} onChange={(e) => setowner({ ...owner, address: e.target.value })} type="text" placeholder="Address" id='address' />

              </Col>
              <Col>
                <Form.Control className='input-field' value={owner.city} onChange={(e) => setowner({ ...owner, city: e.target.value })} type="text" placeholder="City" id='city' />

              </Col>
            </Row>
            <Row className='mt-3'>
              <Col>
                <Form.Select className='input-field' value={owner.state} onChange={(e) => setowner({ ...owner, state: e.target.value })} type="text" placeholder="State/ UT" id='state' >
                  <option>---SELECT STATE/UT---</option>
                  <option value="Andra Pradesh">Andra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madya Pradesh">Madya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Orissa">Orissa</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttaranchal">Uttaranchal</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadeep">Lakshadeep</option>
                  <option value="Pondicherry">Pondicherry</option>
                </Form.Select>

              </Col>
              <Col>
                <Form.Control className='input-field' value={owner.price} onChange={(e) => setowner({ ...owner, price: e.target.value })} type="number" placeholder="Price" id='price' />

              </Col>
              <Col>
                <Form.Select className='input-field' value={owner.category} onChange={(e) => setowner({ ...owner, category: e.target.value })}>
                  <option>---SELECT CATEGORY---</option>
                  <option value="1 BHK Flat">1 BHK Flat</option>
                  <option value="2 BHK Flat">2 BHK Flat</option>
                  <option value="3 BHK Flat">3 BHK Flat</option>
                  <option value="1 BHK House">1 BHK House</option>
                  <option value="2 BHK House">2 BHK House</option>
                  <option value="3 BHK House">3 BHK House</option>
                </Form.Select>

              </Col>

              <Col>
                <PhoneInput defaultCountry="IN" placeholder='Phone Number' className='input-field' value={phone} onChange={setPhone} />
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
