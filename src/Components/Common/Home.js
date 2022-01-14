import React, { useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import home1 from '../Utils/Images/home1.jpg'
import home2 from '../Utils/Images/home2.jpg'
import home3 from '../Utils/Images/home3.jpg'
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
    <>
      <Row>
        <Col>
          <Card sm={12} md={4} lg={4} onMouseEnter={() => showHandler('card1')} onMouseLeave={() => hideHandler('card1')}>
            <Card.Img src={home1} />
            {show.showOverlay && show.cardId === 'card1' ? <Card.ImgOverlay style={{ background: "rgba(0,0,0, 0.5)", color: "white" }}>
              <Card.Title>Bedrooms</Card.Title>
              <Card.Text>
              A suitable sized bed, Pillows ,Bed matress, A nightstand or bedside table, A closet, etc.
              </Card.Text>
            </Card.ImgOverlay>
              : ""}
          </Card>
        </Col>
        <Col>
          <Card sm={12} md={4} lg={4} onMouseEnter={() => showHandler('card2')} onMouseLeave={() => hideHandler('card2')}>
            <Card.Img src={home2} />
            {show.showOverlay && show.cardId === 'card2' ? <Card.ImgOverlay style={{ background: "rgba(0,0,0, 0.5)", color: "white" }}>
              <Card.Title>Kitchens</Card.Title>
              <Card.Text>
                Cutlery & Crocery, Cooking Utensils, Stove etc...
              </Card.Text>
            </Card.ImgOverlay>
              : ""}
          </Card>
        </Col>
        <Col>
          <Card sm={12} md={4} lg={4} onMouseEnter={() => showHandler('card3')} onMouseLeave={() => hideHandler('card3')}>
            <Card.Img src={home3} />
            {show.showOverlay && show.cardId === 'card3' ? <Card.ImgOverlay style={{ background: "rgba(0,0,0, 0.5)", color: "white" }}>
              <Card.Title>Bathrooms</Card.Title>
              <Card.Text>
                Shower, Bathtub, Mirror, Sink, Western & Indian Toilets etc.
              </Card.Text>
            </Card.ImgOverlay>
              : ""}
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Home
