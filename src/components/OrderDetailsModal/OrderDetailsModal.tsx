import React from "react";
import Modal from "../Modal/Modal";
import OrderDetailsContent from "../OrderDetailsContent/OrderDetailsContent";
import { selectOrderNumber} from "../../services/orderNumberSlice";
import { useAppSelector } from "../../services/storage";

interface IOrderDetailsModalProps {
  visible: boolean, 
  closeModal: () => void,
}

const OrderDetailsModal = ({ visible, closeModal }: IOrderDetailsModalProps) => {
  const orderNumber = useAppSelector(selectOrderNumber)
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
