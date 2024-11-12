import React from 'react';
import { Modal, ModalContent, ModalBody, Button } from "@nextui-org/react";
import { FiCheck } from "react-icons/fi";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  title,
  message
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalContent>
        <ModalBody className="text-center py-6">
          <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
            <FiCheck className="text-white text-xl" />
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{message}</p>
          <Button 
            color="warning" 
            className="w-full text-white"
            onPress={onClose}
          >
            Thanks
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

  export default SuccessModal;