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
              fluent Javascript and Ruby. I'm obsessed with all the varied ways
              in which technology can be used to improve lives, and increase
              efficiency. Outside of coding you'll usually find me doing
              something in my community to make it a better place to work,
              learn, and live. I like working with companies that allow me to be
              an Ambassador for the tools that I have a part in building. No
              matter where it is I'm working I always see myself as a business
              partner in helping make sure that mission of the organization and
              my team is accomplished. If you are looking for someone to add to
              your team who is a community evanglist, entrepreneurial, and full
              of team spirit, than I'm your techie.
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
