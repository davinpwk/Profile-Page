import React from 'react';
import '../styles/Footer.css'; // Import CSS for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contact me:</p>
        <div className="contact-links">
          <a href="https://www.instagram.com/davinpwk" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="mailto:davinpwk@gmail.com">
            Email
          </a>
        </div>
      </div>
      <p className="footer-note">© 2024 Davin PWK. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
