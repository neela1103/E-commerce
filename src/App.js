import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './HomeComponent/Home'
import SignUp from './Signup/SignUp';
import Login from './Logincomp/Login';
import CartOrWish from './ShoppingComp/CartOrWish';
import ShoppingComp from './ShoppingComp/ShoppingComp';
import WishOrCart from './ShoppingComp/WishOrCart';
import CartEmpty from './ShoppingComp/Empty/CartEmpty';
import WishEmpty from './ShoppingComp/Empty/WishEmpty';
import ForgetPaas from "./ForgetPaasword/ForgetPass"
import ItemCard from './ShoppingComp/ItemCard';
import Cartshop from './ShoppingComp/Cartshop';
import Order from './ShoppingComp/Order';
import FinalCart from './ShoppingComp/FinalCart';
import WishlistCard from './ShoppingComp/WishlistCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
        <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shopnow" element={<ShoppingComp />} />
          <Route path="/cartcomp" element={<CartOrWish/>}/>
          <Route path="/wishcomp" element={<WishOrCart/>}/>
          <Route path="/cartempty" element={<CartEmpty/>}/>
          <Route path="/wishempty" element={<WishEmpty/>}/>
          <Route path="/forgetPass" element={<ForgetPaas/>}/>
          <Route path="/card/:id" element={<ItemCard/>}/>
          <Route path="/cartshop/:id" element={<Cartshop/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/finalcart" element={<FinalCart/>}/>
          <Route path="/wish" element={<WishlistCard/>}/>
        </Routes>
      </div>
    </Router>
    <ToastContainer />

    </div>
  );
}
export default App;