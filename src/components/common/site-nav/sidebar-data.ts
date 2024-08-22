/*
|-----------------------------------------
| setting up sidebar-data for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { Url } from "url";
import { ReactNode } from "react";

export type LINKTYPE = {
  name: string;
  link: Url | string;
  badge?: string;
  id?: string | number;
  icon?: ReactNode | string;
};

export type SIDEBARTYPE = {
  name: string;
  icon?: ReactNode | null;
  content: Array<LINKTYPE>;
  isDropdown?: boolean;
  isActive?: boolean;
  link?: Url | string;
};
import {

  iconMdOutlineDashboard,
} from "./side-nav-react-icons";


export const sidebarDashboard: SIDEBARTYPE = {
  name: "Dashboard",
  icon: iconMdOutlineDashboard,
  content: [
    { name: "Dashboard", link: "/", id: 1 },
  ],
  
};
export const sidebarReturnOrderList: SIDEBARTYPE = {
  name: "Return Order List",
  icon: iconMdOutlineDashboard,
  content: [
    { name: "Return Order List", link: "/", id: 1 },
  ],
  
};
export const sidebarWebOrders: SIDEBARTYPE = {
  name: "WebOrders",
  icon: iconMdOutlineDashboard,
  content: [
    { name: "Web Orders", link: "/", id: 1 },
  ],
  
};
export const sidebarSearch: SIDEBARTYPE = {
  name: "Search",
  icon: iconMdOutlineDashboard,
  content: [
    { name: "Search", link: "/", id: 1 },
  ],
  
};
export const sidebarOrders: SIDEBARTYPE = {
  name: "Orders",
  icon: iconMdOutlineDashboard,
  content: [
    { name: "Orders", link: "/", id: 1 },
  ],
  
};
