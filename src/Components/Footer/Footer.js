import React from 'react';
import {AiFillLinkedin, AiFillFacebook, AiOutlineTwitter, AiFillGithub} from 'react-icons/ai';
import './Footer.css';

const Footer = () => {
return (
<div className="footer">
<div className="socialMediaIcons">
<AiFillLinkedin className="footerIcon"/>
<AiFillFacebook className="footerIcon"/>
<AiOutlineTwitter className="footerIcon"/>
<AiFillGithub className="footerIcon"/>
</div>
<p className="copyrightsText">&copy; 2022 All rights reserved</p>
</div>
);
};

export default Footer;
