import React from 'react';
import './Feature.css';

const featuresData = [
    {
        title: 'Card Title 1',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        imgSrc: 'https://motiontheagency.com/wp-content/uploads/2023/09/Frame-6-1024x595.png',
        imgAlt: 'Feature 1 Image'
    },
    {
        title: 'Card Title 2',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        imgSrc: 'https://t3.ftcdn.net/jpg/03/64/90/68/360_F_364906832_3CWsp5oXzh8oauRKz7SYtPfCZ57JfESZ.jpg',
        imgAlt: 'Feature 2 Image'
    },
    {
        title: 'Card Title 3',
        text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        imgSrc: 'https://sitescdn.wearevennture.co.uk/public/sphere-digital/mediahub/job-interview-illustration-9654c3c9df8948ce8140ab6ded40f4b2.jpg',
        imgAlt: 'Feature 3 Image'
    }
];

const Features = () => {
    return (
        <>
            <section id="features" className="features">
                <div className="container">
                    <h2 className="text-center">Features</h2>
                    {featuresData.map((feature, index) => (
                        <div className="row align-items-center" key={index}>
                            <div className={`col-md-6 text-center ${index % 2 === 0 ? 'order-md-2' : 'order-md-1'}`}>
                                <div className="feature-image-wrapper">
                                    <img src={feature.imgSrc} alt={feature.imgAlt} />
                                </div>
                            </div>
                            <div className={`col-md-6 ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'}`}>
                                <h3>{feature.title}</h3>
                                <p>{feature.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Features;
