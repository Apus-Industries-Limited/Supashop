import Address from '@/types';
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Input, Select, SelectItem, Checkbox, Button } from "@nextui-org/react";
import { FiArrowLeft, FiBell } from "react-icons/fi";

interface AddressFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (address: Partial<Address>) => void;
  editingAddress?: Address;
}

export const AddressForm: React.FC<AddressFormProps> = ({
  isOpen,
  onClose,
  onSave,
  editingAddress
}) => {
  const [formData, setFormData] = useState<Partial<Address>>(
    editingAddress || {
      nickname: '',
      fullAddress: '',
      isDefault: false
    }
  );

  const nicknames = [
    { label: "Home", value: "home" },
    { label: "Work", value: "work" },
    { label: "Other", value: "other" }
  ];

  const handleSubmit = () => {
    if (formData.nickname && formData.fullAddress) {
      onSave(formData);
      setFormData({ nickname: '', fullAddress: '', isDefault: false });
    }
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      size="lg"
      classNames={{
        base: "max-w-md"
      }}
    >
      <ModalContent>
        <ModalHeader className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button isIconOnly variant="light" onPress={onClose}>
              <FiArrowLeft size={20} />
            </Button>
            <span className="text-xl">New Address</span>
          </div>
          <Button isIconOnly variant="light">
            <FiBell size={20} />
          </Button>
        </ModalHeader>
        <ModalBody className="gap-6 pb-6">
          <Select 
            label="Address Nickname"
            placeholder="Choose a nickname e.g: Home"
            selectedKeys={formData.nickname ? [formData.nickname] : []}
            onChange={(e) => setFormData({...formData, nickname: e.target.value})}
          >
            {nicknames.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </Select>

          <Input
            label="Full Address"
            placeholder="Enter your address"
            value={formData.fullAddress}
            onChange={(e) => setFormData({...formData, fullAddress: e.target.value})}
          />

          <Checkbox
            isSelected={formData.isDefault}
            onValueChange={(isSelected) => setFormData({...formData, isDefault: isSelected})}
          >
            Make this as a default address
          </Checkbox>

          <Button
            color="warning"
            className="w-full text-white"
            onPress={handleSubmit}
          >
            {editingAddress ? 'Update' : 'Add'}
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};


export default AddressForm;