import React from 'react'
import Container from '../Container/Container'
import Logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
    return (
        <div className='header'>
            <Container>
                <div className="header-inner">
                    <Container>
                    <ul className='header-list'>
                        <li className='header-item'>
                        <div className="right">
                                <Link className='logo' to='/'><img src={Logo} alt="" /></Link>
                                <Link className='link' to='/'>Updates</Link>
                                <Link className='link' to='/'>Help</Link>
                                <Link className='link' to='/'>Pricing</Link>
                                <Link className='link' to='/'>Careers</Link>
                            </div>
                            <div className="left">
                                <button className='sign-btn'>Sign in</button>
                                <button className='start-btn'>Get started</button>
                            </div>
                        </li>
                    </ul>
                    </Container>
                </div>
            </Container>
        </div>
    )
}

export default Header
