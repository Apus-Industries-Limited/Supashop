import { User } from "@nextui-org/react"
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsBell } from "react-icons/bs"
import Offcanvas from "./Offcanvas";
import { useState } from "react";


const HomeHeader = () => {
  const [ isOpen, setIsOpen ] = useState( false );

  const toggleIsOpen = () => setIsOpen( !isOpen );
  return (
    <header>
      <nav className="flex items-center justify-between p-4">
        <User
          name="Howdy, User"
          description="Let's start shopping"
          avatarProps={{ 
            src:"https://picsum.photos/200"
          }}
          classNames={{ name:"font-mont-bold" }}
        />
        <div className="flex space-x-2 items-center">
          <CiSearch size={18} role="button"/>
          <BsBell size={18} role="button"/>
          <RxHamburgerMenu size={18} role="button" onClick={toggleIsOpen}/>
        </div>
      </nav>
      <Offcanvas isOpen={isOpen} toggleIsOpen={toggleIsOpen}/>
    </header>
  )
}

export default HomeHeader