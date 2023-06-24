import { Footer, Navbar } from '../components';
import { About, GetStarted, Hero, WhatsNew, World,CheckSection} from '../sections';

const Home = () => (
  <div className="bg-[#000] overflow-hidden">
    <Navbar />

    <div className='mt-2'> 
      <Hero />
    </div>

    <div className="relative">
    <div className="footer-gradient z-0" />

      <About />
      <div className="gradient-09 z-0" />
      {/* <Explore /> */}
    </div>

    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
    </div>
    <World />
    <div className="relative">
      <div className="gradient-09 z-0" />
      <WhatsNew />

      <div className="gradient-09 z-0" />
    </div>
    <div className='mb-32'>
    <div className="footer-gradient z-0" />

    <CheckSection/>
    </div>
    <Footer />
  </div>
);

export default Home;
