
import './App.css';
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Homepage from './components/Homepage'
import About from './components/About'
import AttendanceTable from './components/AttendanceSheet';
import Welcome from './components/Welcome';
import Registration from './components/Registration';
import Navbar from './components/Navbar';
import DonePage from './components/Donepage';
import Admin from './components/Admin';
import ImageUploader from './components/ImageUploader';

function App() {
  const location = useLocation();
  
  return (
    <>

      <div className="mx-1">
        {location.pathname !== '/' && <Navbar />}
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/home" element={<Homepage />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/homepage" element={<Homepage />} />
          <Route exact path="/upload-image" element={<ImageUploader />} />
          <Route exact path="/registerd-student" element={<AttendanceTable />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/done/:worktype" element={<DonePage />} />
        </Routes>
        
      </div>

    </>
  );
}
export default App;
