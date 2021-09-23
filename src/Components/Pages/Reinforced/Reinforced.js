import React from 'react';

import './bootstrap.min.css';

import './index.css';
import './App.css';



import './layers.css';
import './owl.carousel.css';

import './settings.css';
import './style.css';
import {Link} from 'react-router-dom';

const Reinforced = () => {
    return (
        <div>
             <section className="inner-intro bg-img light-color overlay-before parallax-background">
          <div style={{padding: '3em'}}>
            <div className="row title">
              <div className="title_row">
                <h1 style={{fontSize: '31px ! important'}}><span>REINFORCED CONCRETE
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
                  <h2><span>REINFORCED 
                    </span> CONCRETE</h2>
                </div>
               
                <div className="text-content">
                  <p>
                  BCC provides excellent services for any type of RCC
works. Our skilled masons, steel fixers, carpenters along
with close monitoring and supervision at site, ensures
delivery of high quality concrete structures to our
clients.
<ul>
    
    <li>
        Foundations, Supports, Sleepers





    </li>
    <li>
        Floors
    </li>
    <li>
        Culverts
    </li>
    <li>
        Ditches, Sumps, Manholes, Catch basins
    </li>
    <li>
        Reservoirs, Evaporation Ponds
    </li>
    <li>
        Trenches, drain channels, pits
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

export default Reinforced
