import './App.css';
import Menuber from './Components/Menuber/Menuber';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Survice from './Components/Survice/Survice';
import Aboutus from './Components/Aboutus/Aboutus';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Notfound from './Components/Notfound/Notfound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menuber></Menuber>
      
      <Switch>
       <Route path='/Home'>
        <Home></Home>
       </Route>
       <Route path='/Services'>
         <Survice></Survice>
       </Route>
       <Route path='/Aboutus'>
         <Aboutus></Aboutus>
       </Route>
       <Route path='/Contact'>
         <Contact></Contact>
       </Route>
       <Route path='*'>
         <Notfound></Notfound>
       </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
