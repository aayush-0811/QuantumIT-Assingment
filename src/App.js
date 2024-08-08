import './App.css';
import ContactUsComponent from './components/ContactUs';
import Features from './components/Features';
import Footer from './components/Footer';
import Home from './components/Home';
import ColorSchemesExample from './components/Navbar';
import Products from './components/Products';
import TestimonialComponent from './components/Testimonials';

function App() {
  return (
    <>
      <ColorSchemesExample />
      <Home />
      <Features />
      <Products />
      <TestimonialComponent />
      <ContactUsComponent />
      <Footer />
    </>
  );
}

export default App;
