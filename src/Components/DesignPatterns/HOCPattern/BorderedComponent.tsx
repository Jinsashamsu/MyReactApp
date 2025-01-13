import React from "react";

const withBorder = (WrappedComponent) => {
  return (props) => {
    const style = {
      border: "2px solid black",
      padding: "10px", // Optional, to avoid content overlapping the border
      margin: "10px", //To restrict border getting hidden in the screen edge
    };

    return (
      <div style={style}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withBorder;