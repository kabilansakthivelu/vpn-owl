import React from 'react';
import {TiStarburst} from 'react-icons/ti';
import './Features.css';

const Features = () => {
  return (
    
<div className="section" id="features">
<h1 className="sectionTitle">Features</h1>

<div className="featuresSubSection">
<h1 className="subSectionTitle">Main features include:</h1>
<ul>
<li className="features"><TiStarburst className="starIcon"/> Free, unlimited VPN supported by in-app ads</li>
<li className="features"><TiStarburst className="starIcon"/> One-tap connection: superior encryption, superior security</li>
<li className="features"><TiStarburst className="starIcon"/> Automatic fastest connection</li>
<li className="features"><TiStarburst className="starIcon"/> 1000s of global virtual locations</li>
<li className="features"><TiStarburst className="starIcon"/> Convenient private browser</li>
<li className="features"><TiStarburst className="starIcon"/> No user data logs</li>
</ul>
</div>

<div className="featuresSubSection">
<h1 className="subSectionTitle">Additional Premium features:</h1>
<ul>
<li className="features"><TiStarburst className="starIcon"/> No ads in-app</li>
<li className="features"><TiStarburst className="starIcon"/> Ad-block: stop annoying, malicious web and video ads in a private browser</li>
<li className="features"><TiStarburst className="starIcon"/> Unlimited session time</li>
<li className="features"><TiStarburst className="starIcon"/> Data speed acceleration, high bandwidth tunneling</li>
<li className="features"><TiStarburst className="starIcon"/> Priority choice of any global server</li>
<li className="features"><TiStarburst className="starIcon"/> 24x7 premium support</li>
</ul>
</div>

</div>
);
};

export default Features;
