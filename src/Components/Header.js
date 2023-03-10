import React, { useState } from 'react'
import section1img from '../images/section-1-img.png'
import "./header.css"
import './modal.css'
import '../index.css'
import Modal from './Modal'


export default function Header (){
  const [openModal, setOpenModal] = useState(false)
    return(
            <div>
              <header className="header">
                <div className="container">
                  <div className="flex-for-header">
                    <div className="nav-bar-bullet-wrapper">
                      <p>Home</p>
                      <p>About</p>
                      <p>Contact</p>
                    </div>
                    <div>
                      <h3 className="header-title">Landie</h3>
                    </div>
                    <div>
                      <button className="nav-btn">Buy Now</button>
                    </div>
                  </div>
                  <section className="section-1">
                    <article className="section-1-article">
                      <h1 className="section-1-title">
                        Introduce Your Product Quickly & Effectively
                      </h1>
                      <p className="section-1-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultri<br />cies nec, pellentesque eu, pretium
                        quis, sem. Nulla consequat massa quis enim.
                      </p>
                      <div className="section-1-btns">
                        <button className="section-1-btns-purchase"
                        onClick={() => setOpenModal(true)} 
                        >Purchase UI Kit</button>
                        <button className="section-1-btns-learn-more">Learn More</button>
                      </div>
                    </article>
                    <img className="section-1-img" src={section1img} alt="#" />
                  </section>
                </div>
              </header>
              <Modal open={openModal} onClose={() => setOpenModal(false)} />
            </div>
    )
}