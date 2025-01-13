//TabPanel.tsx
import React from 'react';
import { useTabsContext } from './TabContext';

 
export const TabPanel: React.FC<{ index: number; children: React.ReactNode }> = ({ index, children }) => {
    debugger;
  const { activeIndex } = useTabsContext();
 
  return activeIndex === index ? <div>{children}</div> : null;
};