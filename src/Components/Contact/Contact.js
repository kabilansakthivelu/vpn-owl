import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FaPhoneAlt} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
return (
<div className="section">
<h1 className="sectionTitle">Contact</h1>
<div className="contactInfo">
<div>
<p>#123, Test Street,</p>
<p>Test City, Test State,</p>
<p>Test Country</p>
</div>
<div>
<p className="moreContactInfo"><FaPhoneAlt className="starIcon"/>9898989898</p>
<p className="moreContactInfo"><AiOutlineMail className="starIcon"/>test@mail.com</p>
</div>
</div>
</div>
);
};

export default Contact;
