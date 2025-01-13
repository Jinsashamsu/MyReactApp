//Tabs.tsx
import React from 'react';
import { TabsProvider } from './TabContext';

 
export const Tabs: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <TabsProvider>{children}</TabsProvider>;
};