import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"


const Product = () => {
  return (
    <section>
      <div className="flex items-center justify-between text-small mb-2">
        <p className="font-bold">Popular Products</p>
        <Link to="/product?popular=true">See all</Link>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </section>
  )
}

export default Product