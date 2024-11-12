import React from 'react';
import { Button, Card, CardBody } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import { 
  FiPackage, 
  FiUser, 
  FiMapPin, 
  FiCreditCard, 
  FiBell, 
  FiInfo,
  FiArrowLeft
} from "react-icons/fi";
import { AccountItem } from '../../types/index';
import { CiHeadphones, CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom"


const personalMenuItems: AccountItem[] = [
  {
    id: "order",
    label: "My Order",
    icon: <FiPackage size={20} />,
    link: "/orders"
  },
  {
    id: "details",
    label: "My Details",
    icon: <FiUser size={20} />,
    link: "/details"
  },
  {
    id: "address",
    label: "My Address",
    icon: <FiMapPin size={20} />,
    link: "/address"
  },
  {
    id: "payment",
    label: "Payment Methods",
    icon: <FiCreditCard size={20} />,
    link: "/payment"
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: <FiBell size={20} />,
    link: "/notifications"
  }
];

const informationMenuItems: AccountItem[] = [
  {
    id: "faqs",
    label: "FAQs",
    icon: <FiInfo size={20} />,
    link: "/faqs"
  },
  {
    id: "help",
    label: "Help Center",
    icon: <CiHeadphones size={20} />,
    link: "/help"
  }
];

const logoutItem: AccountItem = {
  id: "logout",
  label: "Logout",
  icon: <CiLogout size={20} className="text-red-500" />,
  link: "/logout"
};

const AccountMenu: React.FC = () => {
  const navigate = useNavigate();

  const handleItemClick = (item: AccountItem) => {
    if (item.id === "logout") {
      // Handle logout logic here
      console.log("Logging out...");
      return;
    }
    navigate(item.link);
  };

  return (
    <div className=" bg-gray-50">
      <Card>
        <CardBody className="gap-6 bg-gray-50">
        <div className="flex items-center justify-between bg-white p-4 rounded-sm">
          <div className="flex items-center gap-20">
            <Link to={'/'}>
                <Button isIconOnly variant="light">
                  <FiArrowLeft size={20} />
                </Button>
            </Link>
            <h2 className="text-2xl font-bold">Account</h2>
          </div>
          <Link to='/notifications'>
            <Button isIconOnly variant="light">
              <FiBell size={20} />
            </Button>
          </Link>
        </div>
          <div className="flex flex-col gap-2 bg-white p-5 rounded-sm">
          <p className='text-xl font-semibold'>Personal</p>
            {personalMenuItems.map((item) => (
              <Link to={`${item.link}`}>
              <Button
                key={item.id}
                className={`w-full justify-start gap-2 px-4 py-6 border-b-1 border-gray-200 ${
                  item.id === "logout" ? "text-red-500" : ""
                }`}
                variant="light"
                onClick={() => handleItemClick(item)}
                startContent={item.icon}
              >
                {item.label}
              </Button>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2  bg-white p-5 rounded-sm">
            <p className='text-xl font-semibold'>Information</p>
            {informationMenuItems.map((item) => (
              <Link to={`${item.link}`}>
                  <Button
                key={item.id}
                className={`w-full justify-start space-x-20 px-4 border-b-1 border-gray-200 py-6 ${
                  item.id === "logout" ? "text-red-500" : ""
                }`}
                variant="light"
                onClick={() => handleItemClick(item)}
                startContent={item.icon}
              >
                {item.label}
              </Button>
              </Link>
            ))}
          </div>

          <Button
            className={`w-full justify-start gap-2 font-bold px-4 py-6 text-red-500  bg-white p-5 rounded-sm `}
            variant="light"
            onClick={() => handleItemClick(logoutItem)}
            startContent={logoutItem.icon}
          >
            {logoutItem.label}
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};


export default AccountMenu;