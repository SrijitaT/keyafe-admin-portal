import { ProductActionTypes } from "./product.types";

import axiosInterceptor from "../../utils/api/axiosInterceptor";
import { createAction } from "../utils/reducer.utils";

export const getProductCategory = () => async (dispatch) => {
  //   let categoryListing = useSelector((state) => state.categoryList);
  //   if (categoryListing.length === 0) {
  console.log("in action categoryListing");
  const response = await axiosInterceptor.get("categories");
  console.log("category listing in redux action", response?.data?.data);
  // categoryListing = response?.data;
  //   }
  dispatch(
    createAction(ProductActionTypes.SET_PRODUCT_CATEGORY, response.data.data)
  );
};

export const getAvailableFlavour = () => async (dispatch) => {
  const response = await axiosInterceptor.get("flavours");
  console.log("available Flavour", response);
  if (response.data.data) {
    dispatch(
      createAction(ProductActionTypes.SET_PRODUCT_FLAVOUR, response.data.data)
    );
  }
};
export const getAvailableShapes = () => async (dispatch) => {
  const response = await axiosInterceptor.get("shapes");
  console.log("available shapes ", response);
  if (response.data.data) {
    dispatch(
      createAction(ProductActionTypes.SET_PRODUCT_SHAPE, response.data.data)
    );
  }
};
export const getAvailableType = (cat_id) => async (dispatch) => {
  const response = await axiosInterceptor.get(`types/${cat_id}`);
  console.log("available types ", response);
  if (response.data.data) {
    dispatch(
      createAction(ProductActionTypes.SET_PRODUCT_TYPE, response.data.data)
    );
  }
};

export const updateProductShape =
  (shape_id, updatedShape) => async (dispatch) => {
    const response = await axiosInterceptor.patch(
      `shapes/${shape_id}`,
      updatedShape
    );
    console.log("updated list of shapes", response.data.data);
    if (response.type === "success" && response.data.data.length > 0) {
      dispatch(
        createAction(
          ProductActionTypes.UPDATE_PRODUCT_SHAPE,
          response.data.data
        )
      );
    }
  };
