import { useContext } from 'react';
import classNames from 'classnames';
import { TabsContext } from "./TabsContext";

export const Panel = props => {
    const { activeTab } = useContext(TabsContext);
    return <div className={classNames("tab-pane", { active: activeTab === props.label })}>{props.children}</div>
}