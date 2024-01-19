import './App.css';
import Footer from './components/Footer/Footer.jsx';
import Herosection from './components/Hero section/Herosection';
import Join from './components/Join/Join.jsx';
import Plans from './components/Plans/Plans.jsx';
import Programs from './components/Programs/Programer';
import Resons from './components/Reasons/Resons.jsx';
import Testimonial from './components/Testimonial/Testimonial.jsx';
import Footer1 from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
         <Herosection>
         </Herosection>
      <Programs></Programs>
      <Resons></Resons>
      <Plans/>
      <Testimonial></Testimonial>
      <Join/>
      <Footer1/>
    </div>
  );
}

export default App;
