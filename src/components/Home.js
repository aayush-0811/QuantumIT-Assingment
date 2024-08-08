import React from 'react';
import { Link } from 'react-scroll';
import './Home.css';

const Home = () => {
    return (
        <header id="home" className="hero">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1>
                            WE MAKE YOUR IDEA'S <br />
                            <span>INTO REALITY</span>
                        </h1>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content
                            Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary btn-lg">Get Started</a>
                        <Link to="contact" smooth={true} duration={500} className="btn btn-outline-primary btn-lg">
                            Contact Us
                        </Link>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d8f8f8100064887.5f0094be61d3a.jpg" alt="Hero Image" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Home;
