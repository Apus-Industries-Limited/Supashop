import CategoryList from "@/components/home/CategoryList"
import Product from "@/components/home/Product"
import Slider from "@/components/home/Slider"


const Home = () => {
  return (
    <div className="p-4 h-full overflow-y-auto grid grid-cols-1 gap-4">
      <Slider />
      <CategoryList />
      <Product/>
    </div>
  )
}

export default Home