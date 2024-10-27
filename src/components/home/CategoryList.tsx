import { Link } from "react-router-dom"
import { GiRunningShoe, GiSchoolBag, GiForkKnifeSpoon,GiClothes } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";


const CategoryList = () => {
  return (
    <section>
      <div className="flex items-center justify-between text-small mb-2">
        <p className="font-bold">Shop by Category</p>
        <Link to="/categories">See all</Link>
      </div>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        <Link to="/category?" className="p-2 bg-foreground-200 flex-shrink-0 flex flex-col justify-center items-center rounded-lg">
          <GiRunningShoe color="#ff9433" size={20}/>
          <p className="text-tiny">Shoe</p>
        </Link>
        <Link to="/category?" className="p-2 bg-foreground-200 flex-shrink-0 flex flex-col justify-center items-center rounded-lg">
          <GiSchoolBag color="#338ef7" size={20}/>
          <p className="text-tiny">Bags</p>
        </Link>
        <Link to="/category?" className="p-2 bg-foreground-200 flex-shrink-0 flex flex-col justify-center items-center rounded-lg">
          <GiForkKnifeSpoon color="#f7b750" size={20}/>
          <p className="text-tiny">Kitchen</p>
        </Link>
        <Link to="/category?" className="p-2 bg-foreground-200 flex-shrink-0 flex flex-col justify-center items-center rounded-lg">
          <FaComputer color="#006fee" size={20}/>
          <p className="text-tiny">Electronics</p>
        </Link>
        <Link to="/category?" className="p-2 bg-foreground-200 flex-shrink-0 flex flex-col justify-center items-center rounded-lg">
          <GiClothes color="#ae7ede" size={20}/>
          <p className="text-tiny">Wares</p>
        </Link>
        <Link to="/category?" className="p-2 bg-foreground-200 flex-shrink-0 flex flex-col justify-center items-center rounded-lg">
          <GiClothes color="#ff8a8a" size={20}/>
          <p className="text-tiny">Wares</p>
        </Link>
      </div>
    </section>
  )
}

export default CategoryList

