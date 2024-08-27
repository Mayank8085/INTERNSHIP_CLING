import { useContext } from 'react';
import classNames from 'classnames';
import { TabsContext } from "./TabsContext";

export const Tab = props => {
    const { activeTab, setActiveTab } = useContext(TabsContext)
    return (
        <a data-bs-toggle="tab" className={classNames({ active: activeTab === props.label })} onClick={() => setActiveTab(props.label)}>
            {props.children}
        </a>
    )
}
