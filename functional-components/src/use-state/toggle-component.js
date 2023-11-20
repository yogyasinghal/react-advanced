import React, { useState } from "react";

function ToggleComponent() {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled((prevToggled) => !prevToggled);
  };

  return (
    <div>
      <p>{isToggled ? "Toggled On" : "Toggled Off"}</p>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}

export default ToggleComponent;
