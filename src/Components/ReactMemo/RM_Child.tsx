import React from "react";


interface ChildProps
{
    count: number
};

const RM_Child: React.FC<ChildProps> = React.memo(function Child({ count }) {
    console.log("Child re-rendered");
    return <p>Child Count: {count}</p>;
  });

  export default RM_Child;