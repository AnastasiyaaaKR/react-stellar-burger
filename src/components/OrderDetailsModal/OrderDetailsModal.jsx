import React from "react";
import Modal from "../Modal/Modal";
import OrderDetailsContent from "../OrderDetailsContent/OrderDetailsContent";
import PropTypes from 'prop-types';
import { selectOrderNumber} from "../../services/orderNumberSlice";
import { useSelector} from 'react-redux';

const OrderDetailsModal = ({ visible, closeModal }) => {
  const orderNumber = useSelector(selectOrderNumber)
  if (visible) {
    return (
      <Modal visible={visible} closeModal={closeModal} >
        <OrderDetailsContent orderNumber={orderNumber} />
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
