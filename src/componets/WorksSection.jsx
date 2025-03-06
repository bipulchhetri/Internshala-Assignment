// import React from 'react';

// function WorksSection() {
//   return (
//     <section className="works-section">
//       <div className="section-header">
//       <div className='heading-ex'>
//       <img src="Star.png" alt="" />
//       <h2>Expertise</h2>
//      </div>
//         {/* <a href="#" className="view-all">view all</a> */}
//       </div>
//       <div className="works-card">
//         <div className="works-image">
//           <div className="envelope-stack">
//             <div className="envelope envelope-1"></div>
//             <div className="envelope envelope-2"></div>
//             <div className="envelope envelope-3"></div>
//           </div>
//         </div>
//         <div className="works-content">
//           <h3>Analysis Application</h3>
//           <p>With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.</p>
//           <div className="works-tags">
//             <span className="tag">FIGMA</span>
//             <span className="tag">UX</span>
//           </div>
//           <button className="case-study-btn">View Case Study</button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WorksSection;


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
    imageUrl: "card2.png" // Replace with actual image path
  },
  {
    title: 'Brand Identity',
    description: 'Developing a comprehensive brand identity that communicates core values and creates memorable visual language.',
    tags: ['BRANDING', 'IDENTITY'],
    imageUrl: "card3.png" // Replace with actual image path
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