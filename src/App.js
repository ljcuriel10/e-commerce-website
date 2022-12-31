import './App.css';
import 'jquery';
import 'popper.js/dist/umd/popper'
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './NavBar';
import CustomersList from './CustomersList';
import ShoppingCart from './ShoppingCart';


function App() {
  return (
   <div>
    <NavBar />
    {/* <CustomersList /> */}
    <ShoppingCart />
   </div>
  );
}

export default App;
