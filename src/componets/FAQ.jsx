import React, { useState } from "react";
import "./faq.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is your design process?",
      answer:
        "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs.",
    },
    {
      question: "What tools and software do you use for UX design?",
      answer:
        "I use tools such as Figma, Sketch, Adobe XD, and InVision for UX design. Additionally, I use collaboration tools like Notion and Miro for brainstorming and planning.",
    },
    {
      question: "How do you measure the success of your UX designs?",
      answer:
        "The success of UX designs is measured through user feedback, usability testing, conversion rates, and key performance indicators (KPIs) like time on task and error rate reduction.",
    },
  ];

  return (
    <div className="faq-container">
      <h2> Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <h3 onClick={() => toggleFAQ(index)} className="faq-question">
            {item.question} {openIndex === index ? "" : ""}
          </h3>
          {openIndex === index && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
