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
    case ProductActionTypes.SET_PRODUCT_FLAVOUR:
      return {
        ...state,
        flavourList: [...payload],
      };

    case ProductActionTypes.SET_PRODUCT_SHAPE:
      return {
        ...state,
        shapeList: [...payload],
      };

<<<<<<< Updated upstream
=======
    case ProductActionTypes.SET_PRODUCT_TYPE:
      return {
        ...state,
        typeList: [...payload],
      };
    case ProductActionTypes.UPDATE_PRODUCT_SHAPE:
      return {
        ...state,
        shapeList: [...payload],
      };
>>>>>>> Stashed changes
    default:
      return state;
  }
};

export default productReducer;
