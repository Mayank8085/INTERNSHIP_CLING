import { useState } from 'react';
import { TabsContext } from "./TabsContext";
import { Tab } from "./Tab";
import { Panel } from "./Panel";

const Tabs = props => {
    const [activeTab, setActiveTab] = useState(props.initTab);
    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            {props.children}
        </TabsContext.Provider>
    )
}

Tabs.Tab = Tab;
Tabs.Panel = Panel;

export { Tabs };