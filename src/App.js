import './App.css';
import Testimonials from './components/Testimonials';
import data from "./data";

function App() {
  return (
    <div className="App">
      <div className='heading'>What our student says</div>
      <div></div>
      <Testimonials data={data}/>
    </div>
  );
}

export default App;
