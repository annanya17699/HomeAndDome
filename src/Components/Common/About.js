import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import annanya from '../Utils/Images/annanya.jpg'
import kunal from '../Utils/Images/kunal.jpg'
import utpal from '../Utils/Images/utpal.jpeg'
function About() {
 return (
  <div className='about' style={{ textAlign: 'center', color: '#3a3089' }}>
  <Container className='about-inner font-bold'>

    <h2 className='mb-3' style={{ textAlign: 'center', color: '#3a3089' }}><span style={{ color: 'crimson', fontSize: '50px', borderBottom: "5px dotted #3a3089" }}>&#62;</span>Meet the Developers</h2>
    <Row>
     <Col lg={3}>
      <Card style={{height:'35rem'}} className='my-2 mx-auto'>
       <Card.Img src={annanya} alt='dev1'/>
       <Card.Title style={{ color: 'crimson', textTransform: 'uppercase'}}>Annanya</Card.Title>
       <Card.Text>
       Role: UI and Backend Developer
       </Card.Text>
       <Card.Text>
        Tech Stack:
        React.JS , HTML5, CSS3, Bootstrap4, JavaScript, Node Js , Mongodb
       </Card.Text>
      </Card>
     </Col>
     <Col lg={3}>
     <Card style={{height:'35rem'}} className='my-2 mx-auto'>
       <Card.Img src={kunal} alt='dev2'/>
       <Card.Title style={{ color: 'crimson', textTransform: 'uppercase'}}>Kunal Aggarwal</Card.Title>
       <Card.Text>
       Role: UI Designer and Developer
       </Card.Text>
       <Card.Text>
        Tech Stack:
        React.JS , HTML5, CSS3, Bootstrap4, JavaScript
       </Card.Text>
      </Card> 
     </Col>
     <Col lg={3}>
     <Card style={{height:'35rem'}} className='my-2 mx-auto'>
       <Card.Img src={utpal} alt='dev3'/>
       <Card.Title style={{ color: 'crimson', textTransform: 'uppercase'}}>Utpal</Card.Title>
       <Card.Text>
       Role: UI Developer
       </Card.Text>
       <Card.Text>
        Tech Stack:
        React.JS , HTML5, CSS3, Bootstrap4, Node JS
       </Card.Text>
      </Card>
     </Col>
     <Col lg={3}>
     <Card style={{height:'35rem'}} className='my-2 mx-auto'>
       <Card.Img src={kunal} alt='dev4'/>
       <Card.Title style={{ color: 'crimson', textTransform: 'uppercase'}}>Hritick Chourasia</Card.Title>
       <Card.Text>
       Role: Frontend Designer
       </Card.Text>
       <Card.Text>
        Tech Stack:
        HTML5, CSS3, Bootstrap4 
       </Card.Text>
      </Card>
     </Col>
    </Row>
  </Container>
  </div>
 )
}

export default About
