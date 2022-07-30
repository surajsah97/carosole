import Navbar from './component/navbar/Navbar';
import Slider from './component/slider/Slider';
import image from "./assets/images/image.png";


function App() {
  return (
    <div className="col-lg-12">
      {/* <div className='row'> */}
      
      <header className='col-lg-12 col-xl-12 col-md-12 col-sm-12'>
      <Navbar/>
      </header>
      <main className='col-lg-12 col-xl-12 col-md-12 col-sm-12'>
        <div className='slider'>
      <Slider />
      </div>
      <div>
        <div >
          <div>
          <div className="hexagon image"></div>

          </div>
          <img src={image}alt='img'/>
        </div>
      </div>
      </main>
      <footer style={{height:"100px"}}>

      </footer>
      </div>
    // </div>
  );
}

export default App;
