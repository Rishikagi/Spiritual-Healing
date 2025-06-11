import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Resources from './Resources';
import Experience from './Experience';
import Innerpeace from './Innerpeace';
function App() {
  return ( 
    <>
     <div className="resources-section" id="resources">
          <Resources />
        </div>
        <div className="rating-section" id="rating">
          <Experience />
        </div>
         <div className="innerpeace-section" id="peace">
          <Innerpeace />
        </div>
</>
   
  );
}

export default App;