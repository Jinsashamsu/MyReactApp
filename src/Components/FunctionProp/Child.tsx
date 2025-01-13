import React from "react";

function Child({ onClick2 }) {
    debugger;
    console.log("Child re-rendered!");
    return <button id="btnChild" onClick={onClick2(10)}>Child Button</button>;
  }


  export default Child;