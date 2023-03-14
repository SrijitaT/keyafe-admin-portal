import React, { useState } from "react";
import FormInput from "../../form-input/form-input.component";
import Button from "../../custom-button/custom-button.component";
import "./add-edit-shape-form.styles.scss";
import axiosInterceptor from "../../../utils/api/axiosInterceptor";

const defaultShapeFields = {
  name: "",
  desc: "",
};

const AddEditShapeForm = ({
  shapeList,
  setEditShapeObject,
  setShapeList,
  setToggleShapeForm,
  editShapeObject,
}) => {
  const [formFields, setFormFields] = useState(
    editShapeObject ? editShapeObject : defaultShapeFields
  );
  const [shapePatchRequest, setShapePatchRequest] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { name, desc } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
    if (editShapeObject) {
      setShapePatchRequest((shapePatch) => {
        return {
          ...shapePatch,
          [name]: value,
        };
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editShapeObject && Object.keys(shapePatchRequest).length) {
      setIsLoading(true);
      // await axiosInterceptor.patch(
      //   `shapes/${editShapeObject.index}`,
      //   shapePatchRequest
      // );
      // setShapeList(() => {
      //   return [
      //     ...shapeList.slice(0, editShapeObject.index),
      //     formFields,
      //     ...shapeList.slice(editShapeObject.index + 1),
      //   ];
      // });
      // setShapePatchRequest({});

      const newShapeList = [...shapeList];
      newShapeList[editShapeObject.index] = formFields;
      setShapeList(newShapeList);
    } else {
      setShapeList((shapeList) => {
        return [...shapeList, formFields];
      });
    }
    setEditShapeObject(null);
    setIsLoading(false);
    setToggleShapeForm(false);
  };

  return (
    <div className="add-edit-shape-form-container">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Shape Name"
          type="text"
          required
          onChange={handleChange}
          name="name"
          value={name}
        />
        <FormInput
          label="Shape Description"
          type="textarea"
          rows="5"
          cols="35"
          required
          onChange={handleChange}
          name="desc"
          value={desc}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddEditShapeForm;
