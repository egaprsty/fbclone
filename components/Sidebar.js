import React from 'react';
import SidebarRow from './SidebarRow';
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from "@heroicons/react/outline";
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from "@heroicons/react/solid";


function Sidebar() {
    return(
        <div className="p-2 pt-4 ml-5 max-w-[600px] xl:min-w[300px]">
            <SidebarRow Icon={UsersIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Friends" />
            <SidebarRow Icon={DesktopComputerIcon} title="Friends" />
            <SidebarRow Icon={CalendarIcon} title="Friends" />
            <SidebarRow Icon={ClockIcon} title="Friends" />
            <SidebarRow Icon={ChevronDownIcon} title="Friends" />
        </div>
    )
}

export default Sidebar;