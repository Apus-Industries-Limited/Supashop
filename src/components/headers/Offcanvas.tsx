import { User } from "@nextui-org/react";
import { BsXLg } from "react-icons/bs";
import { Link, useSearchParams } from "react-router-dom";


interface Props{
  isOpen: boolean
  toggleIsOpen: ()=>void
}
const Offcanvas = ({isOpen,toggleIsOpen}:Props) => {
  const [searchParams] = useSearchParams()
  const category = [
    {id:1,name:"apparel"},
    {id:2,name:"electronics"},
    {id:3,name:"furniture"},
    {id:4,name:"beauty"},
    {id:5,name:"sport"},
    {id:6,name:"toy"},
    {id:7,name:"wellness"},
    {id:8,name:"jewelry"},
    {id:9,name:"automotive"},
    {id:10,name:"grocery"},
    {id:11,name:"pet"},
  ]
  
  const cat = searchParams.get('category');
  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-20 h-screen md:hidden">
        <div className={ isOpen ? "md:hidden absolute top-0 left-0 z-10 w-3/4 bg-white shadow-md h-full px-3 py-4 flex flex-col animate-slideIn overflow-x-auto" : "md:hidden absolute top-0 left-0 z-10 w-3/4 bg-white shadow-md h-full px-3 py-4 flex flex-col animate-slideOut" }>
          <div className="flex items-center justify-between">
            <Link to="/profile" onClick={toggleIsOpen}  className="flex items-center">
              <User
                name="Sample User"
                description="example@email.com"
                avatarProps={{ 
                  src:"https://picsum.photos/200"
                }}
                classNames={{ name:"font-mont-bold", description:"text-[10px]" }}
              />
            </Link>
            <BsXLg size={20} className="ms-auto" role="button" onClick={toggleIsOpen}/>
          </div>
          <div className="mt-2 pt-2 flex-grow overflow-y-auto flex flex-col gap-4">
            {category.map(item => (
              <Link to={`/product?category=${item.name}`} key={item.id} className={cat === item.name ?"rounded-lg ps-3 capitalize text-small font-semibold py-2 border-l-4 bg-foreground-200 border-l-primary":"rounded-lg ps-3 capitalize text-small font-semibold py-2"}>{item.name}</Link>
            ))}
          </div>
        </div>
      </div>
    )
  )
}


export default Offcanvas