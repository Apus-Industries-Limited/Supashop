import { useLocation, useNavigate, useParams } from "react-router-dom"
import HomeHeader from "./headers/HomeHeader"
import OtherHeather from "./headers/OtherHeather"
import { BsBell } from "react-icons/bs"
import { FaTrash } from "react-icons/fa6"
import { CiShoppingCart } from "react-icons/ci"


const Header = () => {
  const { pathname } = useLocation()
  const { id } = useParams()
  const navigate = useNavigate()
  const path = [
    {id:1,title:"notification",showIcon:true,Icon: BsBell, path:"/notification", action: ()=>navigate('/notification')},
    {id:2,title:"my cart",showIcon:true,Icon:FaTrash, path:"/cart",action:()=>console.log("Delete")},
    {id:3,title:"search",showIcon:true, Icon:BsBell,path:"/search", action: ()=>navigate('/notification')},
    { id: 4, title: "Payment", showIcon: false, path: "/payment" },
    { id: 5, title: "Checkout", showIcon: true, Icon: CiShoppingCart, path: "/checkout", action: () => navigate('/cart') },
    { id: 6, title: "address", showIcon: true, Icon: BsBell, path: "/profile/address", action: () => navigate('/notification') },
    {id:7,title:"Details",showIcon:true, Icon:BsBell,path:`/product/${id}`, action: ()=>navigate('/notification')},
  ]


  const getLocation = path.find(item=> item.path === pathname)


  return (
    <header>
      {pathname === "/" && <HomeHeader />}
      {pathname === "/product" && <HomeHeader />}
      {path && pathname === getLocation?.path && <OtherHeather title={getLocation.title} showIcon={getLocation.showIcon}  action={getLocation.action} Icon={getLocation.Icon}/>}
      
    </header>
  )
}

export default Header