import { useEffect } from 'react';
import AboutSection from '../../components/AboutSection/AboutSection';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Impact from '../../components/Impact/Impact';
import Slider from '../../components/Slider/Slider';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Newsletter from '../../components/Newsletter/Newsletter';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>WinterSoul | Home</title>
      </Helmet>

      {/* Slider Section */}
      <div>
        <Slider />
      </div>
      {/* How It Works Section */}
      <div data-aos="fade-up">
        <HowItWorks />
      </div>

      {/* About Section */}
      <div data-aos="fade-up">
        <AboutSection />
      </div>



      {/* Impact Section */}
      <div data-aos="fade-up">
        <Impact />
      </div>



      {/* Testimonial Section */}
      <div data-aos="fade-up">
        <Newsletter/>
      </div>
    </div>
  );
};

export default Home;
