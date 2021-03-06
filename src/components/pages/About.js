import React from 'react';

import collage1 from '../../img/profie.jpg';
import logo from '../../img/logo.png';
import random from '../../img/logo-initials.png';

const About = () => {
  return (
    <section className="section-about" id="about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Modern, responsive, and beautiful websites.
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">Who am I?</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur
            libero repellat quis consequatur ducimus quam nisi exercitationem
            omnis earum qui.
          </p>
          {/* <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nulla deserunt voluptatum nam.
          </p> */}
          <a href="#services" className="btn-text">
            Learn more →
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Outside 1"
              className="composition__photo composition__photo--p1"
              src={collage1}
            />
            <img
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Outside 2"
              className="composition__photo composition__photo--p2"
              src={logo}
            />
            <img
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Outside 3"
              className="composition__photo composition__photo--p3"
              src={random}
            />
            {/*
                      <img src="img/nat-1-large.jpg" alt="Photo 1" class="composition__photo composition__photo--p1">
                      <img src="img/nat-2-large.jpg" alt="Photo 2" class="composition__photo composition__photo--p2">
                      <img src="img/nat-3-large.jpg" alt="Photo 3" class="composition__photo composition__photo--p3">
                      */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
