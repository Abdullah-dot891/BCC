import React from 'react';
import {Link} from 'react-router-dom'; 
import './bootstrap.min.css';
import './footer.css';
import './index.css';
import './style.css';
import './App.css';
import './animate.css';

const Footer = () => {
    return (
        <div>
            <footer class="footer pt-80 pt-xs-60" >
			<div style={{padding:"3em;"}}>
			
				<div id="CONTACT US"></div>
				<div class="row footer-info mb-60">
					<div class="col-lg-3 col-md-4 col-xs-12 mb-sm-30" >
						<h4 class="mb-30" style={{margin: "32px;" }}>CONTACT US</h4>
						<address>
							<i class="ion-ios-location fa-icons" ></i> Khaleej Radwa, Al Zuhur, Yanbu 46424, KSA
						</address>
						<ul class="link-small"  >
							<li>
								<Link to="/email"><i class="ion-ios-email fa-icons"></i>info@bcco–sa.com</Link>
							</li>
							<li>
								<a><i class="ion-ios-telephone fa-icons"></i> 00966 59 105 9699</a>
									<p style={{paddingleft: "25px;"}}>&nbsp;00966 54 053 4398
								</p> 
								<p style={{paddingleft: "25px;"}}>&nbsp;00966 54 697 5757
								</p>
								<p style={{paddingleft: "25px;"}}>&nbsp;00966 54 697 5756
								</p>
							</li>
							<li>
								<a><i class="ion-ios-gobal fapicon"></i> www.bcco–sa.com
									</a>
							</li>
						</ul>
						</div>
						</div>
						</div>
						</footer>
        </div>
    )
}

export default Footer
