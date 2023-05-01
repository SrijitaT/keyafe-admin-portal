import { ProductActionTypes } from "./product.types";

const INITIAL_STATE = {
  categoryList: [],
  flavourList: [],
  shapeList: [],
  typeList: [],
};

const productReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ProductActionTypes.SET_PRODUCT_CATEGORY:
      return {
        ...state,
        categoryList: [...payload],
      };

    default:
      return state;
  }
};

export default productReducer;
