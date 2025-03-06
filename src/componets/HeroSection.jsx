import React from "react";
function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <h1>
          <span>
            {" "}
            <img src="Frame.png" alt="" className="hero-img" />
            FREELANCE <br /> DESIGNER <img src="Rectangle.png" alt="" />
          </span>
          <span>
            FROM <br />
            SAN FANSISCO
          </span>
        </h1>
      </div>
      <section className="client">
        <div>
            <img src="Frame 2.png" alt="" />
        </div>
    
        <div>
          <p>
            Welcome to my portfolio. Here, artistry meets functionality. 
           <br /> Diveinto a curated showcase of distinctive branding and <br />
            web designs,each crafted to captivate and inspire.
          </p>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
