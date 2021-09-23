
import './App.css';
import Navbar from './Components/Pages/Navbar/Navbar';
import Footer from './Components/Pages/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import Services from './Components/Pages/Services/Services';
import Excavation from './Components/Pages/CustomerFocus/Excavation';
import Riprap from './Components/Pages/RipRap/Riprap';
import BACKFILLING from './Components/Pages/BACKFILLINGGRADINGANDCOMPACTION/BACKFILLING';
import Asphalt from './Components/Pages/Asphalt/Asphalt';
import Reinforced from './Components/Pages/Reinforced/Reinforced';
import Fence from './Components/Pages/Fence/Fence';
import Mechanical from './Components/Pages/Mechanical/Mechanical';
import Field from './Components/Pages/Field/Field';
import Shop from './Components/Pages/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (

    <Router>
    <div className="App">
     <Navbar/>
     <Switch>
     <Route path="/Home" exact   component={Home}/>
     <Route path="/Services" component={Services}/>
     
     <Route path="/EXCAVATION" component={Excavation}/>
     <Route path="/RipRap" component={Riprap}/>
     <Route path="/BACKFILLINGGRADINGANDCOMPACTION" component={BACKFILLING}/>
     <Route path="/ASPHALTWORK" component={Asphalt}/>
     <Route path="/REINFORCEDCONCRETE" component={Reinforced}/>
     <Route path="/FENCEWORK" component={Fence}/>
     <Route path="/MECHANICALANDPIPING" component={Mechanical}/>
     <Route path="/FIELDFABRICATION And ERECTION" component={Field}/>
<Route path="/SHOPFABRICATION" component={Shop}/>

  

     

   
    
     </Switch>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
