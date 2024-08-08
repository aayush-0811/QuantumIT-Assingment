import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <section className="social-media">
                <div className="container text-center">
                    <span className="social-text">Get connected with us on social networks:</span>
                    <div className="social-links">
                        <a href="https://www.facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.google.com" className="social-link" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="https://www.instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.github.com" className="social-link" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </section>

            <section className="footer-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="footer-heading">
                                <i className="fas fa-gem me-3"></i>Company Name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="footer-heading">Products</h6>
                            <p><a href="#!" className="footer-link">Angular</a></p>
                            <p><a href="#!" className="footer-link">React</a></p>
                            <p><a href="#!" className="footer-link">Vue</a></p>
                            <p><a href="#!" className="footer-link">Laravel</a></p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="footer-heading">Useful links</h6>
                            <p><a href="#!" className="footer-link">Pricing</a></p>
                            <p><a href="#!" className="footer-link">Settings</a></p>
                            <p><a href="#!" className="footer-link">Orders</a></p>
                            <p><a href="#!" className="footer-link">Help</a></p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="footer-heading">Contact</h6>
                            <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                            <p><i className="fas fa-envelope me-3"></i> info@example.com</p>
                            <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="footer-bottom">
                <div className="container text-center">
                    © 2024 Copyright:
                    <a className="footer-bottom-link" href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">YourWebsite.com</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
