import React, { useEffect } from "react";

function PageComponent({ title }) {
  useEffect(() => {
    document.title = `My App - ${title}`;

    return () => {
      document.title = "My App"; // Reset document title on unmount
    };
  }, [title]); // Run when title changes

  return <div>Content of the page</div>;
}

export default PageComponent;
