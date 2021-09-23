import React from 'react';
import './bootstrap.min.css';

import './index.css';
import './App.css';



import './layers.css';
import './owl.carousel.css';

import './settings.css';
import './style.css';
import {Link} from 'react-router-dom';

const Fence = () => {
  return (
    <div>
       <section className="inner-intro bg-img light-color overlay-before parallax-background">
          <div style={{padding: '3em'}}>
            <div className="row title">
              <div className="title_row">
                <h1 style={{fontSize: '31px ! important'}}><span>FENCE WORK
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
                  <h2><span> FENCE 
                    </span> WORK</h2>
                </div>
              
                <div className="text-content">
                <p>
                When choosing a fencing system for your asset,
there are many factors to be taken under
consideration. From safety and security for asset
and people, along with height and material, it
may seem overwhelming. At BCC, we will assist
you in installing the right fencing for your needs
as per industry standards.
With our experienced and well equipped
employees, we are ready to fulfill the most
unique requests along with providing the finest
quality of fencing work.
<br/>
We provide construction services for all types of
fencing systems that are commonly used in the
Kingdom i.e
<ul>
    
    <li>
        Saudi ARAMCO








    </li>
    <li>
        Royal Commission of Jubail and Yanbu
    </li>
    <li>
        HCIS
    </li>
    <li>
        Others as per client specification and requirements.
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

export default Fence
