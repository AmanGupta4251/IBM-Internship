const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let updatedItems;
      let updatedTotal;

      if (existingItemIndex >= 0) {
        updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      updatedTotal = updatedItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      return { ...state, items: updatedItems, total: updatedTotal };
    }

    case "REMOVE_FROM_CART": {
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      const newTotal = filteredItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      return { ...state, items: filteredItems, total: newTotal };
    }

    default:
      return state;
  }
};

export default cartReducer;
