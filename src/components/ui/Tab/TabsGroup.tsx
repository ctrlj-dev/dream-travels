'use client'

import React, { FC, useState, ReactElement, forwardRef } from "react";
import { TabsContainerRoot } from "./Tab.styles";
import { TabProps } from "./Tab";

type TabsProps = {
    children: ReactElement<TabProps>[];
};

const TabsGroup: FC<TabsProps> = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleTabClick = (index: number, onClick?: () => void) => {
        setActiveIndex(index);
        if (onClick) {
            onClick();
        }
    };

    return (
        <TabsContainerRoot>
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child, {
                    active: index === activeIndex,
                    onClick: () => handleTabClick(index, child.props.onClick),
                })
            )}
        </TabsContainerRoot>
    );
}

export default TabsGroup;
