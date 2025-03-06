import React, { useState } from "react";
import './Testimonial.css'
const testimonials = [
  {
    name: "Floyd Miles",
    company: "eBay",
    image: "image.png", // Replace with actual image path
    text: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  },
  {
    name: "Bipul",
    company: "creatiwise",
    image: "image.png", // Replace with actual image path
    text: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  }, {
    name: "chhetri",
    company: "eBay",
    image: "image.png", // Replace with actual image path
    text: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title"> What they say</h2>
      <div className="testimonial-content">
        <div className="testimonial-profile">
          <img src={testimonials[index].image} alt={testimonials[index].name} className="profile-image" />
          <div>
            <h3 className="profile-name">{testimonials[index].name}</h3>
            <p className="profile-company">{testimonials[index].company}</p>
          </div>
        </div>
        <div className="testimonial-text">
          <span className="quote-mark">&#8220;</span>
          <p>{testimonials[index].text}</p>
        </div>
      </div>
      <div className="testimonial-nav">
        <button onClick={prevTestimonial}>&larr;</button>
        <button onClick={nextTestimonial}>&rarr;</button>
      </div>
    </div>
  );
};

export default Testimonial;
