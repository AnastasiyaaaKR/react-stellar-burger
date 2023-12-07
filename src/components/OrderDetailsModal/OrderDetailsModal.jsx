import React from "react";
import Modal from "../Modal/Modal";
import OrderDetailsContent from "../OrderDetailsContent/OrderDetailsContent";
import PropTypes from 'prop-types';

const OrderDetailsModal = ({ visible, closeModal }) => {
  if (visible) {
    return (
      <Modal visible={visible} closeModal={closeModal}>
        <OrderDetailsContent />
      </Modal>
    );
  }
  return null;
};

OrderDetailsModal.propTypes = {
  visible: PropTypes.bool,
  closeModal: PropTypes.func,
}

export default OrderDetailsModal;
