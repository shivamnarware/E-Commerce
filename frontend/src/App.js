import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react';


// Screens
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';

// components
import Navbar from './components/Navbar';
import BackDrop from './components/BackDrop';
import SideDrawer from './components/SideDrawer';
function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} />
      <BackDrop show={sideToggle} click={()=>setSideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/products/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>

    </Router>

  );
}

export default App;
