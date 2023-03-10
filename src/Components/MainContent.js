import React from 'react'
import "./mainContent.css"
// import section1img from '../images/section-1-img.png'
import icon from '../images/lower-section-2-icon.png'
import section2img from '../images/section-2-img.png'
import section3img from '../images/section-3-img.png'
import section4img from '../images/section-4-img.png'
import section5img from '../images/section-5-img.png'


export default function MainContent() {
    return(
        <div>
            <main className="main">
      <div className="container">
        <section className="section-2-wrapper">
          <div className="upper-section-2">
            <article className="section-2">
              <h1 className="section-2-title">Light, Fast & Powerful</h1>
              <p className="section-2-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            </article>
            <div className="lower-section-2">
              <div className="section-2-sub-articles-container">
                <img className="icon" src={icon} alt="icon"/>
                <h3 className="section-2-sub-articles-container-title">Title Goes Here</h3>
                <p className="section-2-sub-articles-container-text">Lorem ipsum dolor sit amet, consectetuer adipiscing <br/>elit. Aenean commodo ligula eget dolor. </p>
              </div>
              <div>
                <img className="icon"src={icon} alt="icon"/>
                <h3 className="section-2-sub-articles-container-title">Title Goes Here</h3>
                <p className="section-2-sub-articles-container-text">Lorem ipsum dolor sit amet, consectetuer adipiscing <br/>elit. Aenean commodo ligula eget dolor. </p>
              </div>
            </div>
          </div>
          <img className="section-2-image" src={section2img} alt="pictogram lady laptop"/>
        </section>
        <section className="section-3">
          <img className="section-3-image" src={section3img} alt="pictogram lady flower"/>
          <article className="section-article">
            <h3 className="section-3to5-title">Light, Fast & Powerful</h3>
            <p className="section-3to5-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          </article>
        </section>
        <section className="section-3 section-4">
            <img className="section-4-image" src={section4img} alt="pictogram people phone" />
            <article className="section-article">
              <h3 className="section-3to5-title">Light, Fast & Powerful</h3>
              <p className="section-3to5-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            </article>
          </section>
          <section className="section-3 section-5">
              <img className="section-5-image" src={section5img} alt="pictogram lady email" />
              <article className="section-article">
                <h3 className="section-3to5-title">Light, Fast & Powerful</h3>
                <p className="section-3to5-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
              </article>
          </section>
         </div>
        </main>
        </div>
    )
}