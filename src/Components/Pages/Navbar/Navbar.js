import React from 'react';
import {Link} from 'react-router-dom'; 
import './bootstrap.min.css';
import './header.css';
import './index.css';
import './style.css';
import './App.css';
import './animate.css';

import img from './BCC/output-onlinejpgtools.png'





const Navbar = () => {
    return (
        <div>
             <header id="header" class="header">

<div class="nav-wrap">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="logo">
                    <Link to="/Home"> <img src={img} alter="logo"/></Link>
                </div>
                
                <button id="menu" class="menu hidden-md-up"></button>
            </div>
            <div class="col-md-9 nav-bg d-flex align-items-center">
                <nav class="navigation">
                    <ul>
                        <li>
                            <Link to="/Home">Home</Link><i class="ion-ios-plus-empty hidden-md-up"></i>
                            
                        </li>

                        
                        
                        
                        
                        <li>
                            <Link to="/Services">Services</Link><i class="ion-ios-plus-empty hidden-md-up"></i>
                            
                        </li>
                        <li>
                            <Link to="/#Contact Us">Contact Us</Link><i class="ion-ios-plus-empty hidden-md-up"></i>
                            
</li>
                            </ul>
                        

                    

                </nav>
            </div>
        </div>
    </div>
</div>
</header>

        </div>
    )
}

export default Navbar
