import { Link } from 'react-router-dom';
import { useDonation } from '../../providers/DonationProvider';
import Slider from '../../components/Slider/Slider';



const Home = () => {

  const { campaigns } = useDonation();

  console.log(campaigns)

  return (
    <Slider/>
  );
};

export default Home;

