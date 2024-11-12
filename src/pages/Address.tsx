import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddressList from '../components/Address/AddressList';
import Address from '@/types/index';
import SuccessModal from '../components/Address/SuccessAddress';
import AddressForm from '../components/Address/AddressForm';
import DeleteAddress from '../components/Address/DeleteAddress';

const AddressPage = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [addressToDelete, setAddressToDelete] = useState<Address | null>(null);

  const handleAddAddress = (newAddress: Partial<Address>) => {
    if (editingAddress) {
      setAddresses(prev => prev.map(addr => 
        addr.id === editingAddress.id ? { ...addr, ...newAddress } : addr
      ));
      setEditingAddress(null);
    } else {
      const address: Address = {
        id: uuidv4(),
        nickname: newAddress.nickname || '',
        fullAddress: newAddress.fullAddress || '',
        isDefault: newAddress.isDefault || false
      };

      if (address.isDefault) {
        setAddresses(prev => prev.map(a => ({ ...a, isDefault: false })));
      }

      setAddresses(prev => [...prev, address]);
    }
    
    setIsAddFormOpen(false);
    setIsSuccessModalOpen(true);
  };

  const handleEdit = (address: Address) => {
    setEditingAddress(address);
    setIsAddFormOpen(true);
  };

  const handleDelete = (address: Address) => {
    setAddressToDelete(address);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (addressToDelete) {
      setAddresses(prev => prev.filter(addr => addr.id !== addressToDelete.id));
      setIsDeleteModalOpen(false);
      setAddressToDelete(null);
    }
  };

  const handleSetDefault = (id: string) => {
    setAddresses(prev => prev.map(address => ({
      ...address,
      isDefault: address.id === id
    })));
  };

  return (
    <div className="p-4">
      <AddressList
        addresses={addresses}
        onAddNew={() => {
          setEditingAddress(null);
          setIsAddFormOpen(true);
        }}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSelectDefault={handleSetDefault}
      />

      <AddressForm
        isOpen={isAddFormOpen}
        onClose={() => {
          setIsAddFormOpen(false);
          setEditingAddress(null);
        }}
        onSave={handleAddAddress}
        editingAddress={editingAddress || undefined}
      />

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        title="Congratulations"
        message="Your new address has been added"
      />

      <DeleteAddress
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setAddressToDelete(null);
        }}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

  
  export default AddressPage