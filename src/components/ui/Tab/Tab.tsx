'use client'

import React, { FC, PropsWithChildren } from "react";
import { TabRoot } from "./Tab.styles";
import { Status } from "@/lib/services/providers/types";

export type TabProps = PropsWithChildren<{
    active: boolean;
    onClick?: () => void;
    value?: Status
}>;

const Tab: FC<TabProps> = ({ children, active, value, onClick, ...props }) => {
    return (
        <TabRoot
            onClick={onClick}
            $active={active}
            value={value}
            {...props}
        >
            {children}
        </TabRoot>
    );
};

export default Tab;
