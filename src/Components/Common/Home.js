import React, { useState } from 'react'
import { Row, Col, Card, Container} from 'react-bootstrap'
import home1 from '../Utils/Images/home1.jpg'
import home2 from '../Utils/Images/home2.jpg'
import home3 from '../Utils/Images/home3.jpg'
import person1 from '../Utils/Images/person1.jpg'
import person2 from '../Utils/Images/person2.jpg'
import person3 from '../Utils/Images/person3.jpg'
import service1 from '../Utils/Images/service1.jpg'
import service2 from '../Utils/Images/service2.jpg'
import service3 from '../Utils/Images/service3.jpg'
import service4 from '../Utils/Images/service4.jpg'
import service5 from '../Utils/Images/service5.jpg'
import { IoFastFoodOutline, IoBus, IoWifi } from 'react-icons/io5'
import {MdCleaningServices, MdLocalLaundryService} from 'react-icons/md'
function Home() {
  const [show, setshow] = useState({
    showOverlay: false,
    cardId: ""
  })
  const showHandler = (key) => {
    setshow({
      ...show,
      cardId: key,
      showOverlay: true
    })
  }
  const hideHandler = (key) => {
    if (show.cardId === key) {
      setshow({
        ...show,
        cardId: '',
        showOverlay: false
      })
    }
  }
  return (
    <div className='home'>
      <Container className='home-slider'>
      <h2 className='mb-3' style={{ textAlign: 'center', color: '#3a3089' }}><span style={{ color: 'crimson', fontSize: '50px', borderBottom: "5px dotted #3a3089" }}>&#62;</span>Home And Dome</h2>
      <h5 className='mb-3' style={{ textAlign: 'center', color: 'crimson' }}>Best place to find the perfect home away from home for students in a new city!!!</h5>
        <Row>
          <Col sm={12} md={12} lg={4}>
            <Card className='my-3' onMouseEnter={() => showHandler('card1')} onMouseLeave={() => hideHandler('card1')}>
              <Card.Img src={home1} alt='home' />
              {show.showOverlay && show.cardId === 'card1' ? <Card.ImgOverlay style={{ background: "#3a3089c6", color: "white" }}>
                <Card.Title><span style={{ color: 'crimson', fontSize: "50px" }}>&#62;</span>Bedrooms</Card.Title>
                <Card.Text>
                  A suitable sized bed, Pillows ,Bed matress, A nightstand or bedside table, A closet, etc.
                </Card.Text>
              </Card.ImgOverlay>
                : ""}
            </Card>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <Card className='my-3' onMouseEnter={() => showHandler('card2')} onMouseLeave={() => hideHandler('card2')}>
              <Card.Img src={home2} alt='home' />
              {show.showOverlay && show.cardId === 'card2' ? <Card.ImgOverlay style={{ background: "#3a3089c6", color: "white" }}>
                <Card.Title><span style={{ color: 'crimson', fontSize: "50px" }}>&#62;</span>Kitchens</Card.Title>
                <Card.Text>
                  Cutlery & Crocery, Cooking Utensils, Stove etc...
                </Card.Text>
              </Card.ImgOverlay>
                : ""}
            </Card>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <Card className='my-3' onMouseEnter={() => showHandler('card3')} onMouseLeave={() => hideHandler('card3')}>
              <Card.Img src={home3} alt='home' />
              {show.showOverlay && show.cardId === 'card3' ? <Card.ImgOverlay style={{ background: "#3a3089c6", color: "white" }}>
                <Card.Title><span style={{ color: 'crimson', fontSize: "50px" }}>&#62;</span>Bathrooms</Card.Title>
                <Card.Text>
                  Shower, Bathtub, Mirror, Sink, Western & Indian Toilets etc.
                </Card.Text>
              </Card.ImgOverlay>
                : ""}
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className='home-service'>

        <h2 className='mb-3' style={{ textAlign: 'center', color: '#3a3089' }}><span style={{ color: 'crimson', fontSize: '50px', borderBottom: "5px dotted #3a3089" }}>&#62;</span>Services</h2>
        <Row>
          <Col lg={4}>
            <Card className='my-3' style={{textAlign:'center'}}>
              <Card.Img src={service1} alt='service' />
              <Card.Title style={{ textTransform: 'uppercase', marginBottom: "1rem", color:'#3a3089' }}><MdCleaningServices style={{ color: 'crimson', fontSize: '50px' }} />Domestic Helping</Card.Title>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className='my-3' style={{textAlign:'center'}}>
              <Card.Img src={service2} alt='service' />
              <Card.Title style={{ textTransform: 'uppercase', marginBottom: "1rem", color:'#3a3089' }}><IoFastFoodOutline style={{ color: 'crimson', fontSize: '50px' }} />Fooding Services</Card.Title>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className='my-3' style={{textAlign:'center'}}>
              <Card.Img src={service3} alt='service' />
              <Card.Title style={{ textTransform: 'uppercase', marginBottom: "1rem", color:'#3a3089' }}><IoBus style={{ color: 'crimson', fontSize: '50px' }} />Transportation available nearby.</Card.Title>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className='my-3' style={{textAlign:'center'}}>
              <Card.Img src={service4} alt='service' />
              <Card.Title style={{ textTransform: 'uppercase', marginBottom: "1rem", color:'#3a3089' }}><MdLocalLaundryService style={{ color: 'crimson', fontSize: '50px' }} />Laundry Services</Card.Title>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className='my-3' style={{textAlign:'center'}}>
              <Card.Img src={service5} alt='service' />
              <Card.Title style={{ textTransform: 'uppercase', marginBottom: "1rem", color:'#3a3089' }}><IoWifi style={{ color: 'crimson', fontSize: '50px' }} />WIFI available</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className='home-review'>
        <h2 className='mb-3' style={{ textAlign: 'center', color: '#3a3089' }}><span style={{ color: 'crimson', fontSize: '50px', borderBottom: "5px dotted #3a3089" }}>&#62;</span>Reviews</h2>
        <Row style={{ textAlign: 'center' }}>
          <Col lg={4}>
            <img src={person1} alt='person' style={{ width: '50%', height: 'auto', borderRadius: '50%' }} />
            <Card style={{ borderRadius: '50%', width: '13rem', height: '13rem', textAlign: 'center', background: "#3a3089c6", color: 'white' }}>
              <Card.Body>
                <Card.Title>Jane Doe</Card.Title>
                <Card.Text>House Owner<br />Amazing location and comfortable stay.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <img src={person2} alt='person' style={{ width: '50%', height: 'auto', borderRadius: '50%' }} />
            <Card style={{ borderRadius: '50%', width: '13rem', height: '13rem', textAlign: 'center', background: "#3a3089c6", color: 'white' }}>
              <Card.Body>
                <Card.Title>John Quil</Card.Title>
                <Card.Text>Student<br />Amazing location and comfortable stay.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <img src={person3} alt='person' style={{ width: '50%', height: 'auto', borderRadius: '50%' }} />
            <Card style={{ borderRadius: '50%', width: '13rem', height: '13rem', textAlign: 'center', background: "#3a3089c6", color: 'white' }}>
              <Card.Body>
                <Card.Title>Olive Yew</Card.Title>
                <Card.Text>Student<br />Amazing location and comfortable stay.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
