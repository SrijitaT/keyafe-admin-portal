import React, { useState } from "react";
import FormInput from "../../form-input/form-input.component";
import Button from "../../custom-button/custom-button.component";
import "./add-edit-shape-form.styles.scss";

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

  const { name, desc } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editShapeObject) {
      const newShapeList = [...shapeList];
      newShapeList[editShapeObject.index] = formFields;
      setShapeList(newShapeList);
    } else {
      setShapeList((shapeList) => {
        return [...shapeList, formFields];
      });
    }
    setEditShapeObject(null);
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
          type="text"
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
