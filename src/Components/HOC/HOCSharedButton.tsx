import React from "react";
 
const HOCSharedButton = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};
 
export default HOCSharedButton;