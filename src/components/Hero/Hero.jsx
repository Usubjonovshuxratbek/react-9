import React from 'react'
import Container from '../Container/Container'
import './Hero.scss'

function Hero() {
  return (
    <div className='hero'>
      <Container>
        <div className="hero-inner">
          <h2>Customer <br /> relationship magic.</h2>
          <p>Powerful, flexible and data-driven, Attio makes it easy to <br /> build the exact CRM your business needs.</p>
          <div className="btn-group">
            <a href="/">Get started</a>
            <button>Talk to sales</button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
