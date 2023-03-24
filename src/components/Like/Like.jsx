import React from 'react'
import './Like.scss'
import Container from '../Container/Container'
import LogoDopt from '../../assets/img/Logo-2.png'
import LogoPallet from '../../assets/img/Logo-3.png'

function Like() {
  return (
    <div className='like'>
      <Container>
      <div className="like-inner">
        <h2 className='title'>Powering leading companies like</h2>
        <div className="like-logo">
          <img className='logo-1' src={LogoDopt} alt="" />
          <img className='logo-2' src={LogoPallet} alt="" />
        </div>
      </div>
      </Container>
    </div>
  )
}

export default Like
