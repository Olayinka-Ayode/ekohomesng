import './App.css';
import Navbar from './Navbar';
import About from './About';
import Sliders from './Sliders';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Sliders />
      <Contact />
      {/* <section id='footer' className='bg-black text-gray-700'>
        <p className='font-semibold font-playPen'>Copyright &copy; 2024 Ayodele Olayinka</p>
      </section> */}
    </div>
  );
}

export default App;
