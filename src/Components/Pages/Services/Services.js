import React from 'react';
import './bootstrap.min.css';

import './index.css';
import './App.css';



import './layers.css';
import './owl.carousel.css';

import './settings.css';
import './style.css';
import {Link} from 'react-router-dom';

const SERVICES = () => {
    return (
        <div>
             <section className="inner-intro bg-img light-color overlay-before parallax-background">
          <div style={{padding: '3em'}}>
            <div className="row title">
              <div className="title_row">
                <h1 style={{fontSize: '31px ! important'}}><span>SERVICES
                    OVERVIEW
                  </span></h1>
                <div className="page-breadcrumb">
                  <a />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Intro Section End*/}
        {/* About Section */}
        <div id="about-section" className="padding pt-xs-40">
          <div style={{padding: '3em'}}>
            <div className="row">
              <div className="col-md-6 col-lg-8">
                <div className="block-title v-line">
                  <h2><span>SERVICES
                    </span> OVERVIEW</h2>
                </div>
                <h4>
                  Our goal is to continue the development of our long term
                  business relations by delivering quality workmanship,
                  efficient construction at a competitive cost, while making
                  customer satisfaction our top priority.
                </h4>
                <div className="text-content">
                  <p>
                    BCC is a versatile industrial contracting
                    company providing a full scope of
                    general and specialized services
                    provided by highly skilled and
                    experienced staff.<br />
                    We adhere to the strictest construction
                    guidelines and safety measures that
                    meet the industry’s highest standards.
                    <br />
                    Besides the expert civil &amp; mechanical
                    construction services, we offer the
                    multitude of additional services such as;
                    asphalt works, concrete works,
                    workshop fabrication, field fabrication,
                    plate fabrication, platforms, ladders,
                    handrails, bending, drilling, punching,
                    miscellaneous fabrications and more.
                    <br />
                    We have also successfully executed
                    electrical and instrumentation projects
                    including electrical / instrumentation
                    installations, cable pulling, terminations,
                    loop testing, megger testing etc.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="dark-bg our-vision light-color padding-40">
                  <div className="block-title">
                    <h2><span>CIVIL</span></h2>
                  </div>
                  <p>
                  </p><ul>
                    <li>
                      <Link to="/EXCAVATION">EXCAVATION</Link>   
                    </li>
                    <li>
                      <Link to="/RipRap"> RIP RAP</Link> 
                    </li>
                    <li>
                      <Link to="/BACKFILLINGGRADINGANDCOMPACTION"> BACKFILLING, GRADING AND COMPACTION</Link>
                    </li>
                    <li>
                      <Link to="/ASPHALTWORK">  ASPHALT WORK</Link>
                    </li>
                    <li>
                      <Link to="/REINFORCEDCONCRETE">   REINFORCED CONCRETE</Link>
                    </li>
                    <li>
                      <Link to="/FENCEWORK">  FENCE WORK </Link>
                    </li>
                  </ul>
                  <p />
                  <div className="block-title">
                    <h2><span><Link to="/MECHANICAL">MECHANICAL</Link></span></h2>
                  </div>
                  <p>
                  </p><ul>
                    <li>
                      <Link to="/MECHANICALANDPIPING"> MECHANICAL AND PIPING</Link> 
                    </li>
                    <li>
                      <Link to="/FIELDFABRICATION And ERECTION"> FIELD FABRICATION &amp; ERECTION</Link>   
                    </li>
                    <li>
                      <Link to="/SHOPFABRICATION">    SHOP FABRICATION </Link> 
                    </li>
                  </ul>
                  <p />
                  {/* <div class="block-title">
                                            <h2><span>ELECTRICAL AND
                                                INSTRUMENTATION WORKS
                                                </span></h2>
                                            
                                        </div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default SERVICES
