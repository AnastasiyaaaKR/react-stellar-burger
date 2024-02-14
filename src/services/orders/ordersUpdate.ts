import {
  Orders,
  OrdersActionType,
  OrdersActions,
  Insert as OrdersInsertAction,
  Delete as OrdersDeleteAction,
  Update as OrdersUpdateAction,
  Move as OrdersMoveAction,
} from "./types";

const insertData = (orders: Orders, action: OrdersInsertAction): Orders => {
  return [
    ...orders.slice(0, action.data.pos),
    ...action.data.rows,
    ...orders.slice(action.data.pos),
  ];
};

const deleteData = (orders: Orders, action: OrdersDeleteAction): Orders => {
  return orders.filter(({ id }) => !action.data.includes(id));
};

const updateData = (orders: Orders, action: OrdersUpdateAction): Orders => {
  return orders.map((row) => {
    const index = action.data.findIndex(
      (updatedRow) => updatedRow.id === row.id
    );
    if (index !== -1) {
      return action.data[index];
    }
    return row;
  });
};

const moveData = (prevOrders: Orders, action: OrdersMoveAction): Orders => {
  const orders = [...prevOrders];
  action.data.forEach((move) => {
    orders.splice(move.to, 0, orders.splice(move.from, 1)[0]);
  });
  return orders;
};

export const ordersUpdate = (
  prevOrders: Orders,
  actions: OrdersActions
): Orders => {
  let orders = prevOrders;
  actions.forEach((action) => {
    switch (action.type) {
      case OrdersActionType.DATA:
        orders = action.data;
        break;
      case OrdersActionType.INSERT:
        orders = insertData(orders, action);
        break;
      case OrdersActionType.DELETE:
        orders = deleteData(orders, action);
        break;
      case OrdersActionType.UPDATE:
        orders = updateData(orders, action);
        break;
      case OrdersActionType.MOVE:
        orders = moveData(orders, action);
        break;
    }
  });

  return orders;
};
