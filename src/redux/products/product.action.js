import { ProductActionTypes } from "./product.types";

import axiosInterceptor from "../../utils/api/axiosInterceptor";
import { createAction } from "../utils/reducer.utils";
import { useSelector } from "react-redux";

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
