import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Product from "./pages/Product"
import SingleProduct from "./pages/SingleProduct"


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
    </Routes>
  )
}

export default App