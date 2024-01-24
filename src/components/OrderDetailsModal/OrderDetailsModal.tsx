import React from "react";
import Modal from "../Modal/Modal";
import OrderDetailsContent from "../OrderDetailsContent/OrderDetailsContent";
import { selectOrderNumber} from "../../services/orderNumberSlice";
import { useSelector} from 'react-redux';

interface IOrderDetailsModalProps {
  visible: boolean, 
  closeModal: () => void,
}

const OrderDetailsModal = ({ visible, closeModal }: IOrderDetailsModalProps) => {
  const orderNumber = useSelector(selectOrderNumber)
  if (visible) {
    return (
      <Modal closeModal={closeModal} >
        <OrderDetailsContent orderNumber={orderNumber} />
      </Modal>
    );
  }
  return null;
};

export default OrderDetailsModal;
