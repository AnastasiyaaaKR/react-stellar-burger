import {
  Orders,
  OrdersActionType,
  OrdersActions,
  Insert as OrdersInsertAction,
  Delete as OrdersDeleteAction,
  Update as OrdersUpdateAction,
  Move as OrdersMoveAction,
} from "./types";

const insertData = (table: Orders, action: OrdersInsertAction): Orders => {
  return [
    ...table.slice(0, action.data.pos),
    ...action.data.rows,
    ...table.slice(action.data.pos),
  ];
};

const deleteData = (table: Orders, action: OrdersDeleteAction): Orders => {
  return table.filter(({ id }) => !action.data.includes(id));
};

const updateData = (table: Orders, action: OrdersUpdateAction): Orders => {
  return table.map((row) => {
    const index = action.data.findIndex(
      (updatedRow) => updatedRow.id === row.id
    );
    if (index !== -1) {
      return action.data[index];
    }
    return row;
  });
};

const moveData = (prevTable: Orders, action: OrdersMoveAction): Orders => {
  const table = [...prevTable];
  action.data.forEach((move) => {
    table.splice(move.to, 0, table.splice(move.from, 1)[0]);
  });
  return table;
};

export const ordersUpdate = (
  prevTable: Orders,
  actions: OrdersActions
): Orders => {
  let table = prevTable;
  actions.forEach((action) => {
    switch (action.type) {
      case OrdersActionType.DATA:
        table = action.data;
        break;
      case OrdersActionType.INSERT:
        table = insertData(table, action);
        break;
      case OrdersActionType.DELETE:
        table = deleteData(table, action);
        break;
      case OrdersActionType.UPDATE:
        table = updateData(table, action);
        break;
      case OrdersActionType.MOVE:
        table = moveData(table, action);
        break;
    }
  });

  return table;
};
