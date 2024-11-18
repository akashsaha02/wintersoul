import { Link } from 'react-router-dom';
import { useDonation } from '../../providers/DonationProvider';
import AboutSection from '../../components/AboutSection/AboutSection';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Impact from '../../components/Impact/Impact';
import Testimonial from '../../components/Testimonial/Testimonial';
import Slider from '../../components/Slider/Slider';



const Home = () => {

  const { campaigns } = useDonation();

  console.log(campaigns)

  return (
    <div>
      <Slider />

      <AboutSection />
      <HowItWorks />
      <Impact />
      <Testimonial />
    </div>
  );
};

export default Home;

