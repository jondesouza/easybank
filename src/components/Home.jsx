import React from 'react'
import mockups from '../assets/images/image-mockups.png'
import './Home.css'

const Home = () => {
    return (
        <section className="home">
            <div className="left-content">
                <h1 className="page-title">Next generation digital banking</h1>
                <p className="infos">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <button className="request">Request Invite</button>
            </div>
            <div className="mockup-image"><img src={mockups} alt="Easybank app" /></div>
        </section>
    )
}

export default Home;