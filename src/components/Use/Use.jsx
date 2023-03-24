import React from 'react'
import CardOne from '../../assets/img/card-1.png'
import CardTwo from '../../assets/img/card-2.png'
import CardThree from '../../assets/img/card-3.png'
import Container from '../Container/Container'
import { Link } from 'react-router-dom'
import './Use.scss'

function Use() {
    return (
        <section className='use'>
            <Container>
                <div className="use-inner">
                    <h2 className='title'>The fastest & most flexible CRM you'll ever use.</h2>
                    <p className='text'>And it's all powered by Particle — the data model for teams that want to build faster.</p>
                    <div className="cards">
                        <div className="card">
                            <img className='card-img' src={CardOne} alt="" />
                            <h3 className='card-title'>Real-time data, blazingly fast.</h3>
                            <p className='card-text'>Sort, filter and analyze thousands of customer records in milliseconds.</p>
                            <Link className='card-link' to='/'>Learn more</Link>
                        </div>
                        <div className="card">
                            <img className='card-img' src={CardTwo} alt="" />
                            <h3 className='card-title'>Real-time data, blazingly fast.</h3>
                            <p className='card-text'>Sort, filter and analyze thousands of customer records in milliseconds.</p>
                            <Link className='card-link' to='/'>Learn more</Link>
                        </div>
                        <div className="card">
                            <img className='card-img' src={CardThree} alt="" />
                            <h3 className='card-title'>Real-time data, blazingly fast.</h3>
                            <p className='card-text'>Sort, filter and analyze thousands of customer records in milliseconds.</p>
                            <Link className='card-link' to='/'>Learn more</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Use
