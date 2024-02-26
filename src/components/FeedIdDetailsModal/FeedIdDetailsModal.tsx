import React from "react";
import Modal from "../Modal/Modal";
import FeedIdDetailsContent from "../FeedIdDetailsContent/FeedIdDetailsContent";
import { IOrder } from "../../../types";

interface IFeedIdDetailsModalProps {
  visible: boolean, 
  closeModal: () => void,
  order: IOrder
}

const FeedIdDetailsModal = ({ visible, closeModal, order }: IFeedIdDetailsModalProps) => {
  if (visible) {
    return (
      <Modal closeModal={closeModal} title={`#${order.number}`}>
        <FeedIdDetailsContent order={order} showOrderNumber = {false}/>
      </Modal>
    );
  }
  return null;
};

export default FeedIdDetailsModal;