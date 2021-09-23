import React from 'react';
import './bootstrap.min.css';

import './index.css';
import './App.css';



import './layers.css';
import './owl.carousel.css';

import './settings.css';
import './style.css';
import {Link} from 'react-router-dom';

const Shop = () => {
    return (
        <div>
            <section className="inner-intro bg-img light-color overlay-before parallax-background">
          <div style={{padding: '3em'}}>
            <div className="row title">
              <div className="title_row">
                <h1 style={{fontSize: '31px ! important'}}><span>SHOP FABRICATION
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
                  <h2><span>SHOP  
                    </span>  FABRICATION  </h2>
                </div>
               
                <div className="text-content">
                <p>Using state of the equipment and modern
fabrication methods, we can provide custom
fabrication & installation of metal & steel
products including but not limited to industrial
equipment & vessels, turn key skid modules,
piping systems, piping spools, dampers, vessels,
ladders, engineered equipment skids, & material
handling equipment, handrails, railings, safe
access catwalks, customized ladders, stairs,
platforms, stair towers & structural supports
<br/>
Our workshop is equipped with machines and
skilled manpower, required for industrial
fabrication.



<ul>
    <li>
        Covered Area – 500 m2
 
       
    </li>
    <li>
        Rolling upto 30 mm thick and 2.5 m wide
    </li>
    <li>
        Plasma Cutting upto 35 mm SS and 80 mm CS
    </li>
    
</ul>
Machine / Equipments in the workshop
<ul>
    <li>
        Sheet Rolling








    </li>
    <li>
        Section Rolling
    </li>
    <li>
        Lathe Machines
    </li>
    <li>
        Milling Machine
    </li>
    <li>
        Shaper
    </li>
    <li>
        Radial Drill Machines
    </li>
    <li>
        Plasma Cutting Machines
    </li>
    <li>
        Welding Machines
    </li>
    <li>
        Grinding Machines
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

export default Shop
