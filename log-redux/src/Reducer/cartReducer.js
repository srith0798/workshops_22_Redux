import { createSlice } from "@reduxjs/toolkit";

const cartSlicer = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    changed: false,
  },
  reducers: {
    replaceData(state, action) {
      const { itemsList } = action.payload;
      if (itemsList.length > 0) {
        state.totalQuantity = action.payload.totalQuantity;
        state.itemsList = action.payload.itemsList;
      }
    },
    addToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;
      // check is available/not
      const availableItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );
      if (availableItem) {
        availableItem.quantity += 1;
        availableItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQuantity += 1;
      }
    },
    removeFromCart(state, action) {
      state.changed = true;
      const id = action.payload;
      const availableItem = state.itemsList.find((item) => item.id === id);
      if (availableItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQuantity -= 1;
      } else {
        availableItem.quantity -= 1;
        availableItem.totalPrice -= availableItem.price;
      }
    },
    setShowCart(state) {
      const { showCart } = state;
      state.showCart = !showCart;
    },
  },
});

export const { replaceData, addToCart, removeFromCart, setShowCart } =
  cartSlicer.actions;

export default cartSlicer.reducer;
