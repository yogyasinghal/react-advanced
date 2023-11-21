import React, { useState } from "react";

function DynamicForm() {
  const [formData, setFormData] = useState([{ field: "" }]);

  const addField = () => {
    setFormData([...formData, { field: "" }]);
  };

  const removeField = (index) => {
    const newFormData = [...formData];
    newFormData.splice(index, 1);
    setFormData(newFormData);
  };

  const handleInputChange = (index, value) => {
    const newFormData = [...formData];
    newFormData[index].field = value;
    setFormData(newFormData);
  };

  return (
    <div>
      {formData.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            value={field.field}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
          <button onClick={() => removeField(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addField}>Add Field</button>
    </div>
  );
}

export default DynamicForm;
