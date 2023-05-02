import React from 'react'
import './Advantages.css'

import API from '../assets/icons/icon-api.svg'
import Online from '../assets/icons/icon-online.svg'
import Budgeting from '../assets/icons/icon-budgeting.svg'
import Onboarding from '../assets/icons/icon-onboarding.svg'

const Advantages = () => {
    return (
        <section className="advantages">
            <div className="intro-adv">
                <h2 className="section-title">Why choose Easybank?</h2>
                <p className="infos">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </div>
            <div className="each-adv">
                <div className="adv">
                    <img src={Online} alt="Online Banking" />
                    <h3 className="title-adv">Online Banking</h3>
                    <p className="infos">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>
                <div className="adv">
                    <img src={Budgeting} alt="Simple Budgeting" />
                    <h3 className="title-adv">Simple Budgeting</h3>
                    <p className="infos">See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</p>
                </div>
                <div className="adv">
                    <img src={Onboarding} alt="Fast Onboarding" />
                    <h3 className="title-adv">Fast Onboarding</h3>
                    <p className="infos">We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </div>
                <div className="adv">
                    <img src={API} alt="Open API" />
                    <h3 className="title-adv">Open API</h3>
                    <p className="infos">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                </div>
            </div>
        </section>
    )
}

export default Advantages;