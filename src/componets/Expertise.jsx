import React from 'react';
import "./Expertise.css";

function Expertise() {
  const expertiseAreas = [
    {
      title: '✶ Branding',
      description: 'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.'
    },
    {
      title: '✶ UI Design',
      description: 'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.'
    },
    {
      title: '✶ UX Design',
      description: 'I comprehend and resolve digital product issues using a user-focused methodology. Investigation, comparison, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements.'
    },
    {
      title: '✶ Development',
      description: 'I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach. I employ it to produce safe, top-notch personalized websites.'
    }
  ];

  return (
    <section className="expertise">
      <div className="section-header">
      <div className='heading-ex'>
      <h2>Expertise</h2>
     </div>
        <a href="#" className="view-all">view all</a>
      </div>
      <div className="expertise-grid">
        {expertiseAreas.map((area, index) => (
          <div key={index} className="expertise-item">
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Expertise;