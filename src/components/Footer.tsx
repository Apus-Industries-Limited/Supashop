import { Link, useLocation } from "react-router-dom"
import { CgHomeAlt } from "react-icons/cg";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { RiAccountPinBoxLine } from "react-icons/ri";


const Footer = () => {
  const { pathname } = useLocation()
  return (
    <footer className={pathname !== "/" && pathname !== "/product" ? "hidden" : "p-2 grid grid-cols-5 gap-4 border-t rounded-t-lg"}>
      <Link to="/" className="flex items-center jsutify-between flex-col col-span-1 capitalize p-2">
        <CgHomeAlt />
        <p className="text-light text-tiny">home</p>
      </Link>
      <Link to="/categories" className="flex items-center jsutify-between flex-col col-span-1 capitalize p-2">
        <CiSearch />
        <p className="text-light text-tiny">categories</p>
      </Link>
      <Link to="/saved" className="flex items-center jsutify-between flex-col col-span-1 capitalize p-2">
        <CiHeart />
        <p className="text-light text-tiny">saved</p>
      </Link>
      <Link to="/carts" className="flex items-center jsutify-between flex-col col-span-1 capitalize p-2">
        <CiShoppingCart />
        <p className="text-light text-tiny">cart</p>
      </Link>
      <Link to="/account" className="flex items-center jsutify-between flex-col col-span-1 capitalize p-2">
        <RiAccountPinBoxLine />
        <a className="text-light text-tiny">Account</a>
      </Link>
    </footer>
  )
}

export default Footer