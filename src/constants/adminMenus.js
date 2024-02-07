import {
    sidebarHomeIcon,
    sidebarHomeActiveIcon,
    sidebarFileIcon,
    sidebarUserIcon,
    sidebarUserActiveIcon,
    sidebarSettingIcon,
    sidebarSettingActiveIcon
} from '../assets/icons';

import { ROUTES } from './routes';

export const adminSidebarMenu = [
    {
        name: "Home",
        icon: sidebarHomeIcon,
        activeIcon: sidebarHomeActiveIcon,
        url: ROUTES.adminHome
    },
    {
        name: "My Students",
        icon: sidebarUserIcon,
        activeIcon: sidebarUserActiveIcon,
        url: ROUTES.adminStudents
    },
    {
        name: "Settings",
        icon: sidebarSettingIcon,
        activeIcon: sidebarSettingActiveIcon,
        url: ROUTES.adminSettings
    }
]