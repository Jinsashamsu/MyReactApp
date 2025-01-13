//Tab.tsx
import React from 'react';
import { useTabsContext } from './TabContext';
 
export const Tab: React.FC<{ index: number; label: string }> = ({ index, label }) => {
  const { activeIndex, setActiveIndex } = useTabsContext();
 debugger;
  const isActive = activeIndex === index;
 debugger;
  return (
<div
      style={{
        padding: '10px 20px',
        borderBottom: isActive ? '2px solid blue' : '2px solid gray',
        fontWeight: isActive ? 'bold' : 'normal',
      }}
      onClick={() => {debugger; setActiveIndex(index);}}
>
      {label}
</div>
  );
};