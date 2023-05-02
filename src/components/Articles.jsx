import React from 'react'
import './Articles.css'

import Confetti from '../assets/images/image-confetti.jpg'
import Currency from '../assets/images/image-currency.jpg'
import Plane from '../assets/images/image-plane.jpg'
import Restaurant from '../assets/images/image-restaurant.jpg'

const Articles = () => {
    return (
        <section className="articles">
            <h2 className="section-title">Latest Articles</h2>
            <div className="article-line">
                <div className="article">
                    <img src={Currency} alt="Article" />
                    <div className="article-content">
                        <span className="author">By Claire Robinson</span>
                        <span className="title-art">Receive money in any currency with no fees</span>
                        <span className="infos">The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...</span>
                    </div>
                </div>
                <div className="article">
                    <img src={Restaurant} alt="Article" />
                    <div className="article-content">
                        <span className="author">By Wilson Hutton</span>
                        <span className="title-art">Treat yourself without worrying about money</span>
                        <span className="infos">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...</span>
                    </div>
                </div>
                <div className="article">
                    <img src={Plane} alt="Article" />
                    <div className="article-content">
                        <span className="author">By Wilson Hutton</span>
                        <span className="title-art">Take your Easybank card wherever you go</span>
                        <span className="infos">We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...</span>
                    </div>
                </div>
                <div className="article">
                    <img src={Confetti} alt="Article" />
                    <div className="article-content">
                        <span className="author">By Claire Robinson</span>
                        <span className="title-art">Our invite-only Beta accounts are now live!</span>
                        <span className="infos">After a lot of hard work By the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Articles;