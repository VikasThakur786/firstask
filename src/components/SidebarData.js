import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SettingsIcon from "@material-ui/icons/Settings";
import WorkIcon from "@material-ui/icons/Work";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PhoneIcon from "@material-ui/icons/Phone";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "About",
    icon: <PersonPinIcon />,
    link: "/about",
  },
  {
    title: "Resume",
    icon: <AssignmentIcon />,
    link: "/resume",
  },
  {
    title: "Services",
    icon: <SettingsIcon />,
    link: "/services",
  },
  {
    title: "Portfolio",
    icon: <WorkIcon />,
    link: "/portfolio",
  },
  {
    title: "Pricing",
    icon: <ViewCarouselIcon />,
    link: "/pricing",
  },
  {
    title: "Blog",
    icon: <LibraryBooksIcon />,
    link: "/blog",
  },
  {
    title: "Contact",
    icon: <PhoneIcon />,
    link: "/contact",
  },
];
