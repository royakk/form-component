
import Personal from './personal';
import styles from './css/mystyle.css';
import Home from './home';
import { BrowserRouter as Router,Route, Routes ,Switch  } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Getapi from './get1'
import User from './user'
import {Link} from 'react-router';
import Notfound from './Notfound';
import Success from './success';



function App() {
  return (
   
    <div className="App">
<switch>
      <Routes>
        
        
        <Route path = "/personal" element = {<Personal />} />
        <Route path= "/notfound" element={<Notfound/>}/>
        <Route path="/get1" element={<Getapi />  } />
        <Route path="/success" element={<Success />} />
        <Route path = "/user/:id" component = {User} />
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Navigate to ="/notfound" />}/>

        

      </Routes>
      </switch>
    </div>
  );
}

export default App;
