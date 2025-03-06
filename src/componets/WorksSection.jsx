import React from 'react';

const worksData = [
  {
    title: 'Analysis Application',
    description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
    tags: ['FIGMA', 'UX'],
    imageUrl:  "card1.png", 
  },
  {
    title: 'Web Design Project',
    description: 'Crafting innovative digital experiences that blend aesthetic appeal with functional design principles.',
    tags: ['DESIGN', 'WEB'],
    imageUrl: "card2.png" 
  },
  {
    title: 'Brand Identity',
    description: 'Developing a comprehensive brand identity that communicates core values and creates memorable visual language.',
    tags: ['BRANDING', 'IDENTITY'],
    imageUrl: "card3.png" 
  }
];

function WorksSection() {
  return (
    <section className="works-section">
      <div className="works-header">
        <h2>Works</h2>
        <a href="#" className="view-all">view all</a>
      </div>
      
      {worksData.map((work, index) => (
        <div key={index} className="works-card">
          <div 
            className="works-image" 
            style={{backgroundImage: `url(${work.imageUrl})`}}
          >
          
          </div>
          <div className="works-content">
            <h3>{work.title}</h3>
            <p>{work.description}</p>
            <div className="works-tags">
              {work.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default WorksSection;