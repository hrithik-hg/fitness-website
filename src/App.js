import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonial from './components/Testimonial/Testimonial';
function App() {
  return (
    <div className="App">
          <Home/>
          <Programs/>
          <Reasons/>
          <Plans/>
          <Testimonial/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
