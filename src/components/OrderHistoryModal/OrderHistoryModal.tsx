import React from "react";
import Modal from "../Modal/Modal";
import { IOrder } from "../../../types";
import OrderHistoryContent from "../OrderHistoryContent/OrderHistoryContent";

interface IOrderHistoryModalProps {
  visible: boolean, 
  closeModal: () => void,
  order: IOrder
}

const OrderHistoryModal = ({ visible, closeModal, order }: IOrderHistoryModalProps) => {
  if (visible) {
    return (
      <Modal closeModal={closeModal} title={`#${order.number}`}>
        <OrderHistoryContent order={order} showOrderNumber = {false}/>
      </Modal>
    );
  }
  return null;
};

export default OrderHistoryModal;