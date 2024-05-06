import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer class="footer-distributed">
            <div class="footer-left">
              <h3>Company</h3>
              <p class="footer-links">
                <a href="#" class="link-1">Home</a>
                <a href="#">Blog</a>
                <a href="#">Pricing</a>
                <a href="#">About</a>
                <a href="#">Faq</a>
                <a href="#">Contact</a>
              </p>
              <p class="footer-company-name">Company Name © 2024</p>
            </div>
            <div class="footer-center">
              <div>
                <i class="fa fa-map-marker"></i>
                <p><span>Address</span> Place</p>
              </div>
              <div>
                <i class="fa fa-phone"></i>
                <p>+#########</p>
              </div>
              <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:support@company.com">support@company.com</a></p>
              </div>
            </div>
            <div class="footer-right">
              <p class="footer-company-about">
                <span>About the company</span>
                Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
              </p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
