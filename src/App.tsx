import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import SingleProduct from "./pages/SingleProduct";
import Profile from "./pages/Profile";
import Address from "./pages/Address";
import Order from "./pages/Orders";
import Notification from "./pages/Notifications"


const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product">
          <Route index element={<Product />} />
          <Route path=":id" element={<SingleProduct/>}/>
        </Route>
      </Route>
        <Route path="account" element={<Profile />} />
        <Route path="address" element={<Address />} />
        <Route path="notifications" element={<Notification />} />
        <Route path="orders" element={<Order />} />
    </Routes>
  )
}

export default App