import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    "I'm a Software Engineer based in Lagos, Nigeria specializing in building both front and backend web applications. Passionate about coding and providing guidance to junior developers."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    "Some of the technologies I've worked with includes HTML & (S)CSS, Javascript (ES6+), Typescript, ReactJs, Nodejs, Laravel and Ruby on Rails. I love learning new technologies as I strive for mastery of my craft."}
                </p>

                {resume && (
                  <div>
                    <span className="d-flex mt-3">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--resume mr-3"
                        href="https://drive.google.com/file/d/1n8vwbsR_7eHetzt2gSKqO7zjjc_ToxFL/view?usp=sharing"
                      >
                        Resume
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--resume mr-3"
                        href="https://www.linkedin.com/in/gharoropureheart"
                      >
                        LinkedIn
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--resume mr-3"
                        href="https://github.com/Gharoro"
                      >
                        Github
                      </a>
                    </span>
                  </div>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
