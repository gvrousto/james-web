import React from "react";
import aboutPicture from "./aboutPicture.jpeg";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="picture-container">
        <div className="picture">
          <img
            className="about-picture"
            src={aboutPicture}
            alt="aboutPicture"
          />
        </div>
      </div>
      <div className="paragraphs-container">
        <div className="paragraphs">
          <div className="paragraph">
            James Langford is a designer and fabricator based in Chicago. He
            specializes in furniture, object, and interior design.
          </div>
          <div className="paragraph">
            Constantly testing new mediums and techniques, his work is driven by
            an exploration of craft and rethinking the ways we use materials. He
            designs and fabricates all of his personal work.
          </div>
          <div className="paragraph">
            He works with fellow designer Larry Tchogninou on Points of Sail, an
            agency that uses the world of nautical design as its muse.
          </div>
          <div className="paragraph">
            He reviewed BA in rhetoric from DePaul University, and Graduated Cum
            Laude in 2019.
          </div>
          <div className="paragraph">CV Available upon request.</div>
          <div className="paragraph">
            For all inquiries please reach out to jclangford97@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
