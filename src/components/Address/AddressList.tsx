import React from 'react';
import Address from '@/types';
import { Button } from "@nextui-org/react";
import { FiArrowLeft, FiBell, FiEdit2, FiTrash2 } from "react-icons/fi";
import { Link } from 'react-router-dom';

interface AddressListProps {
  addresses: Address[];
  onAddNew: () => void;
  onEdit: (address: Address) => void;
  onDelete: (address: Address) => void;
  onSelectDefault: (id: string) => void;
}

export const AddressList: React.FC<AddressListProps> = ({
  addresses,
  onAddNew,
  onEdit,
  onDelete,
  onSelectDefault
}) => {
  return (
    <div>
      <div className="gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-20">
            <Link to={'/account'}>
                <Button isIconOnly variant="light">
                  <FiArrowLeft size={20} />
                </Button>
            </Link>
            <h2 className="text-xl font-semibold">Address</h2>
          </div>
          <Link to='/notifications'>
            <Button isIconOnly variant="light">
              <FiBell size={20} />
            </Button>
          </Link>
        </div>

        <br/>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Saved Address</h3>
          {addresses.map((address) => (
            <div
              key={address.id}
              className="p-4 border rounded-lg flex items-center justify-between"
            >
              <div className="flex items-start gap-3 flex-1">
                <div className="mt-1">🏠</div>
                <div className="flex-1">
                  <div className="font-semibold flex items-center gap-2">
                    {address.nickname}
                    {address.isDefault && (
                      <span className="text-sm text-black bg-gray-200 p-2 rounded-lg">Default</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">{address.fullAddress}</div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    isIconOnly 
                    variant="light" 
                    onPress={() => onEdit(address)}
                  >
                    <FiEdit2 size={16} />
                  </Button>
                  <Button 
                    isIconOnly 
                    variant="light" 
                    onPress={() => onDelete(address)}
                  >
                    <FiTrash2 size={16} />
                  </Button>
                </div>
              </div>
              <input
              type="radio"
              checked={address.isDefault}
              onChange={() => onSelectDefault(address.id)}
              className="w-4 h-4 bg-orange-500"
            />
            </div>
          ))}
        </div>

          <br/>

        <Button
          variant="bordered"
          className="w-full"
          onPress={onAddNew}
        >
          + Add New Address
        </Button>

        <Button
          color="warning"
          className="w-full text-white mt-8"
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

  export default AddressList;