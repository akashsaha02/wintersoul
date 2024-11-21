import { useDonation } from '../../providers/DonationProvider';
import AboutSection from '../../components/AboutSection/AboutSection';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Impact from '../../components/Impact/Impact';
import Testimonial from '../../components/Testimonial/Testimonial';
import Slider from '../../components/Slider/Slider';
import { Helmet } from 'react-helmet';



const Home = () => {

  const { campaigns } = useDonation();

  console.log(campaigns)

  return (
    <div>
      <Helmet>
        <title>WinterSoul | Home</title>
      </Helmet>
      <Slider />
      <HowItWorks />
      <Impact />
      <AboutSection />
      <Testimonial />
    </div>
  );
};

export default Home;

