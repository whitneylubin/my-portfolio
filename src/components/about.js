import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const AboutSection = () => (
  <ScrollableAnchor id="about">
    <section className="content-section bg-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>I'm your next Full Stack Web Developing Ninja!</h2>
            <p className="lead mb-5">
              My French and my Portugeuse could use some work, but I speak
              fluent Javascript and Ruby.
            </p>
            <a
              className="btn btn-dark btn-xl js-scroll-trigger"
              href="#services"
            >
              Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default AboutSection;
<a href="https://unsplash.com/">Unsplash</a>;
