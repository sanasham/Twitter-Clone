import React from "react";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { BiHash, BiUser } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SlEnvolope } from "react-icons/sl";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FiMoreHorizontal } from "react-icons/fi";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

export const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <AiOutlineHome />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <IoMdNotificationsOutline />,
  },
  {
    title: "Messages",
    icon: <SlEnvolope />,
  },
  {
    title: "Lists",
    icon: <LiaClipboardListSolid />,
  },
  {
    title: "Communities",
    icon: <AiOutlineUsergroupDelete />,
  },
  {
    title: "Verified",
    icon: <FaXTwitter />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More",
    icon: <FiMoreHorizontal />,
  },
];
