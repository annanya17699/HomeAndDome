import React, { useState } from 'react';
import { Card, Container , Row, Col, Form } from 'react-bootstrap'
import Housing from './Housing';
import HousingCategory from './HousingCategory';
import HousingPrice from './HousingPrice';
function HousingMain() {
  const [type, setType] = useState('city')
  return (
    <div className='housings' style={{ textAlign: 'center', color: '#3a3089' }}>
      <Container className='about-inner font-bold'>

        <h2 className='mb-3' style={{ textAlign: 'center', color: '#3a3089' }}><span style={{ color: 'crimson', fontSize: '50px', borderBottom: "5px dotted #3a3089" }}>&#62;</span>Housings</h2>
        <Form.Check
        type='radio'
        className='text-uppercase text-bold'
        inline
        onChange={(e)=>setType(e.target.value)}
        checked = {type==='city'}
        label='city'
        value='city'
      />
      <Form.Check
        type='radio'
        className='text-uppercase text-bold'
        inline
        onChange={(e)=>setType(e.target.value)}
        checked = {type==='price'}
        label='price'
        value='price'
      />
      <Form.Check
        type='radio'
        className='text-uppercase text-bold'
        inline
        onChange={(e)=>setType(e.target.value)}
        checked = {type==='category'}
        label='category'
        value='category'
      />
      {type==='city' ? <Housing/> : type==='category' ? <HousingCategory/> : <HousingPrice/>}
      </Container>
    </div>
  )
}

export default HousingMain;
