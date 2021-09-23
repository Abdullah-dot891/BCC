import React from 'react';
import './bootstrap.min.css';

import './index.css';
import './App.css';



import './layers.css';
import './owl.carousel.css';

import './settings.css';
import './style.css';
import {Link} from 'react-router-dom';

const Mechanical = () => {
    return (
        <div>
            <section className="inner-intro bg-img light-color overlay-before parallax-background">
          <div style={{padding: '3em'}}>
            <div className="row title">
              <div className="title_row">
                <h1 style={{fontSize: '31px ! important'}}><span>MECHANICAL AND PIPING
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
                  <h2><span>MECHANICAL 
                    </span>  AND PIPING</h2>
                </div>
                <h4>
              
                            BCC’s Mechanical and Piping team offers construction
solutions for industrial piping and equipment
installation.
                     
                </h4>
                <div className="text-content">
                <p>Our skilled field personnel has proven
experience in the engineering, construction,
and fabrication of specialized mechanical
and piping systems for industrial and
commercial construction. BCC brings quality,
efficiency and comprehensive set of services
encompassing projects pre-assembly, design,
procurement, project management, and
scheduling.
As we are providing services for years so we
do understand the market conditions and
the challenges faced by industry: the need to
reduce operational costs, maximize uptime
and optimize efficiency.
<br/>
We ensure the highest level of asset
integrity and reliability to our clients. We
create a solid plan detailing all aspects and
risks associated with a particular project to
assure reliable execution and safety. BCC's
typical projects include:
<ul>
    <li>
        Plant modifications / MOCs





    </li>
    <li>
        Small Capital Projects
    </li>
    <li>
        Welding and metal fabrication.
    </li>
    <li>
        Process equipment installation.
    </li>
    <li>
        Pipe fabrication and installation of
small bore and large bore piping:
    </li>
</ul>



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

export default Mechanical
