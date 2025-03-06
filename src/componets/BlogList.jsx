import React from "react";
import "./BlogList.css"; 

const blogs = [
  {
    date: "Nov 9, 2023",
    title: "How UX works in web",
    tags: ["UI", "UX"],
    image: "card1.png", 
  },
  {
    date: "Aug 18, 2023",
    title: "Case study - Analysis Application.",
    tags: ["DESIGN", "PRINT"],
    image: "card2.png", 
    date: "Feb 16, 2023",
    title: "3 ways to develop your skill",
    tags: ["FIGMA", "WEB"],
    image: "card3.png", 
  },
];

const BlogList = () => {
  return (
    <div className="blog-container">
   <div className="works-header">
        <h2>Blog</h2>
        <a href="#" className="view-all">view all</a>
      </div>
      
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <p className="blog-date">{blog.date}</p>
              <h3 className="blog-heading">{blog.title}</h3>
              <div className="tags">
                {blog.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <button className="read-button">Read</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
