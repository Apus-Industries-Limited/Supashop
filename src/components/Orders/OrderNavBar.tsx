import { Button } from "@nextui-org/react";
import { FiArrowLeft } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";

const NotificationNavBar = () => {
    return (

        <div className="flex items-center justify-between bg-white p-4 rounded-sm">
          <div className="flex items-center gap-20">
          <Link to={'/account'}>
                <Button isIconOnly variant="light">
                  <FiArrowLeft size={20} />
                </Button>
          </Link>
            <h2 className="text-2xl font-bold">My Orders</h2>
          </div>
          <Link to='/notifications'>
            <Button isIconOnly variant="light">
              <FiBell size={20} />
            </Button>
          </Link>
        </div>
    )
  }
  
  export default NotificationNavBar;