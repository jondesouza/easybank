import React, { useState } from 'react'
import Logo from '../assets/icons/logo.svg'
import Lines from '../assets/icons/icon-hamburger.svg'
import Close from '../assets/icons/icon-close.svg'
import './Header.css'

const Header = () => {
    const [menu, setMenu] = useState(false)
    const changeMenu = () => {
        setMenu(!menu)
    }

    return (
        <>
            <header className="menu desktop-links">
                <img src={Logo} alt="Logo do Easybank" />
                <nav>
                    <ul className='navlinks'>
                        <li className='navlink'>Home</li>
                        <li className='navlink'>About</li>
                        <li className='navlink'>Contact</li>
                        <li className='navlink'>Blog</li>
                        <li className='navlink'>Careers</li>
                    </ul>
                </nav>
                <button className="request mobile-button">Request Invite</button>
            </header>

            {menu ? (
                <header className="menu mobile-links">
                    <img src={Logo} alt="Logo do Easybank" />
                    <nav>
                        <ul className='navlinks'>
                            <li className='navlink'>Home</li>
                            <li className='navlink'>About</li>
                            <li className='navlink'>Contact</li>
                            <li className='navlink'>Blog</li>
                            <li className='navlink'>Careers</li>
                        </ul>
                    </nav>
                    <img src={Close} alt="menu" onClick={changeMenu} />
                </header>
            ) : (
                <header className="menu mobile-links">
                    <img src={Logo} alt="Logo do Easybank" />
                    <img src={Lines} alt="menu" onClick={changeMenu} />
                </header>
            )
            }
        </>
    )
}

export default Header;