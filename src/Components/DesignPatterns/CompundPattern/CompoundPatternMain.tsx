/* compound pattern
multiple components working together as a group , sharing states or context, to accomplish the task

it is implemented in tabcontext and imported in all child components

index being clicked an dpassed is stored in context api and shared between components

panel si dispalyed based on the index of tab shared in the context. so match checking is done by comparing in tabpanel

tab, tabpanels etc work together as a group sharing context and state

parent component is the one that shares the context to other child components. parent compoent is given as the context component in the provider context
react context information is shared
tab is the component which update its
tab panel is the one that matches and show the content */


import { Tab } from "./Tab";
import { TabList } from "./TabList";
import { TabPanel } from "./TabPanel";
import { TabPanels } from "./TabPanels";
import { Tabs } from "./Tabs";

const TabsAsCompound: React.FC = () => {
    return (
  <Tabs>
  <TabList>
  <Tab index={0} label="Tab 1" />
  <Tab index={1} label="Tab 2" />
  <Tab index={2} label="Tab 3" />
  </TabList>
  <TabPanels>
  <TabPanel index={0}>Content for Tab 1</TabPanel>
  <TabPanel index={1}>Content for Tab 2</TabPanel>
  <TabPanel index={2}>Content for Tab 3</TabPanel>
  </TabPanels>
  </Tabs>
    );
  };

  export default TabsAsCompound;