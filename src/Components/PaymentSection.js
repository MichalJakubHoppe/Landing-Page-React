import React from 'react'
import './paymentSection.css'

export default function PaymentSection(){
    return(
        <div>
            <section className="section-bottom-wrapper">
            <div className="container">
            <div className="section-bottom">
            <article className="section-bottom-article">
              <h3 className="section-bottom-article-title">A Price To Suit Everyone</h3>
              <p className="section-bottom-article-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
            </article>
            <div className="section-bottom-price">
              <h2 className="section-bottom-price-number">$40</h2>
              <p className="section-bottom-product-name">UI Design Kit</p>
            </div>
            <div className="section-bottom-button">
              <h2 className="section-bottom-button-motto">See, One price. Simple.</h2>
              <button type="button" className="section-bottom-button-itself">Purchase Now</button>
            </div>
            </div>
            </div>
            </section>
        </div>
    )
}