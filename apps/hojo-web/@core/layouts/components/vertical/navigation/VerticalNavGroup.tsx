// ** React Imports
// ** Next Import
import { useRouter } from "next/router";

// ** Icon Imports
import Icon from "@web/@core/components/icon";
// ** Type Import
import { LayoutProps, NavGroup } from "@web/@core/layouts/types";
// ** Utils
import { hasActiveChild, removeChildren } from "@web/@core/layouts/utils";
// ** Configs Import
import themeConfig from "@web/configs/themeConfig";
import Translations from "@web/layouts/components/Translations";
import UserIcon from "@web/layouts/components/UserIcon";
import CanViewNavGroup from "@web/layouts/components/acl/CanViewNavGroup";
// ** Third Party Imports
import clsx from "clsx";
import { Fragment, useEffect } from "react";

import Box, { BoxProps } from "@mui/material/Box";
// ** MUI Imports
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

// ** Custom Components Imports
import VerticalNavItems from "./VerticalNavItems";

interface Props {
  item: NavGroup;
  navHover: boolean;
  parent?: NavGroup;
  navVisible?: boolean;
  groupActive: string[];
  collapsedNavWidth: number;
  currentActiveGroup: string[];
  navigationBorderWidth: number;
  settings: LayoutProps["settings"];
  isSubToSub?: NavGroup | undefined;
  saveSettings: LayoutProps["saveSettings"];
  setGroupActive: (values: string[]) => void;
  setCurrentActiveGroup: (items: string[]) => void;
}

const MenuItemTextWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  justifyContent: "space-between",
  transition: "opacity .25s ease-in-out",
  ...(themeConfig.menuTextTruncate && { overflow: "hidden" }),
}));

const VerticalNavGroup = (props: Props) => {
  // ** Props
  const {
    item,
    parent,
    settings,
    navHover,
    navVisible,
    isSubToSub,
    groupActive,
    setGroupActive,
    collapsedNavWidth,
    currentActiveGroup,
    setCurrentActiveGroup,
    navigationBorderWidth,
  } = props;

  // ** Hooks & Vars
  const router = useRouter();
  const currentURL = router.asPath;
  const { direction, navCollapsed, verticalNavToggleType } = settings;

  // ** Accordion menu group open toggle
  const toggleActiveGroup = (item: NavGroup, parent: NavGroup | undefined) => {
    let openGroup = groupActive;

    // ** If Group is already open and clicked, close the group
    if (openGroup.includes(item.title)) {
      openGroup.splice(openGroup.indexOf(item.title), 1);

      // If clicked Group has open group children, Also remove those children to close those groups
      if (item.children) {
        removeChildren(item.children, openGroup, currentActiveGroup);
      }
    } else if (parent) {
      // ** If Group clicked is the child of an open group, first remove all the open groups under that parent
      if (parent.children) {
        removeChildren(parent.children, openGroup, currentActiveGroup);
      }

      // ** After removing all the open groups under that parent, add the clicked group to open group array
      if (!openGroup.includes(item.title)) {
        openGroup.push(item.title);
      }
    } else {
      // ** If clicked on another group that is not active or open, create openGroup array from scratch

      // ** Empty Open Group array
      openGroup = [];

      // ** push Current Active Group To Open Group array
      if (currentActiveGroup.every((elem) => groupActive.includes(elem))) {
        openGroup.push(...currentActiveGroup);
      }

      // ** Push current clicked group item to Open Group array
      if (!openGroup.includes(item.title)) {
        openGroup.push(item.title);
      }
    }
    setGroupActive([...openGroup]);
  };

  // ** Menu Group Click
  const handleGroupClick = () => {
    const openGroup = groupActive;
    if (verticalNavToggleType === "collapse") {
      if (openGroup.includes(item.title)) {
        openGroup.splice(openGroup.indexOf(item.title), 1);
      } else {
        openGroup.push(item.title);
      }
      setGroupActive([...openGroup]);
    } else {
      toggleActiveGroup(item, parent);
    }
  };

  useEffect(() => {
    if (hasActiveChild(item, currentURL)) {
      if (!groupActive.includes(item.title)) groupActive.push(item.title);
    } else {
      const index = groupActive.indexOf(item.title);
      if (index > -1) groupActive.splice(index, 1);
    }
    setGroupActive([...groupActive]);
    setCurrentActiveGroup([...groupActive]);

    // Empty Active Group When Menu is collapsed and not hovered, to fix issue route change
    if (navCollapsed && !navHover) {
      setGroupActive([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  useEffect(() => {
    if (navCollapsed && !navHover) {
      setGroupActive([]);
    }

    if ((navCollapsed && navHover) || (groupActive.length === 0 && !navCollapsed)) {
      setGroupActive([...currentActiveGroup]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navCollapsed, navHover]);

  useEffect(() => {
    if (groupActive.length === 0 && !navCollapsed) {
      setGroupActive([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navHover]);

  const icon = parent && !item.icon ? themeConfig.navSubItemIcon : item.icon;

  const menuGroupCollapsedStyles = navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 };

  return (
    <CanViewNavGroup navGroup={item}>
      <Fragment>
        <ListItem
          disablePadding
          className="nav-group"
          onClick={handleGroupClick}
          sx={{ mt: 1.5, px: "0 !important", flexDirection: "column" }}>
          <ListItemButton
            className={clsx({
              "Mui-selected": groupActive.includes(item.title) || currentActiveGroup.includes(item.title),
            })}
            sx={{
              py: 2.25,
              width: "100%",
              borderTopRightRadius: 100,
              borderBottomRightRadius: 100,
              transition: "padding-left .25s ease-in-out",
              pl: navCollapsed && !navHover ? (collapsedNavWidth - navigationBorderWidth - 24) / 8 : 5.5,
              pr: navCollapsed && !navHover ? ((collapsedNavWidth - navigationBorderWidth - 24) / 2 - 5) / 4 : 3.5,
              "&.Mui-selected": {
                backgroundColor: "action.hover",
                "&:hover": {
                  backgroundColor: "action.hover",
                },
              },
              "&.Mui-selected.Mui-focusVisible": {
                backgroundColor: "action.focus",
                "&:hover": {
                  backgroundColor: "action.focus",
                },
              },
            }}>
            {isSubToSub ? null : (
              <ListItemIcon
                sx={{
                  color: "text.primary",
                  transition: "margin .25s ease-in-out",
                  ...(parent && navCollapsed && !navHover ? {} : { mr: 2.5 }),
                  ...(navCollapsed && !navHover ? { mr: 0 } : {}), // this condition should come after (parent && navCollapsed && !navHover) condition for proper styling
                  ...(parent && item.children ? { ml: 1.25, mr: 3.75 } : {}),
                }}>
                <UserIcon icon={icon as string} {...(parent && { fontSize: "0.875rem" })} />
              </ListItemIcon>
            )}
            <MenuItemTextWrapper sx={{ ...menuGroupCollapsedStyles, ...(isSubToSub ? { ml: 9 } : {}) }}>
              <Typography
                {...((themeConfig.menuTextTruncate || (!themeConfig.menuTextTruncate && navCollapsed && !navHover)) && {
                  noWrap: true,
                })}>
                <Translations text={item.title} />
              </Typography>
              <Box
                className="menu-item-meta"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& svg": {
                    color: "text.primary",
                    transition: "transform .25s ease-in-out",
                    ...(groupActive.includes(item.title) && {
                      transform: direction === "ltr" ? "rotate(90deg)" : "rotate(-90deg)",
                    }),
                  },
                }}>
                {item.badgeContent ? (
                  <Chip
                    label={item.badgeContent}
                    color={item.badgeColor || "primary"}
                    sx={{
                      mr: 1.5,
                      height: 20,
                      fontWeight: 500,
                      "& .MuiChip-label": { px: 1.5, textTransform: "capitalize" },
                    }}
                  />
                ) : null}
                <Icon icon={direction === "ltr" ? "mdi:chevron-right" : "mdi:chevron-left"} />
              </Box>
            </MenuItemTextWrapper>
          </ListItemButton>
          <Collapse
            component="ul"
            onClick={(e) => e.stopPropagation()}
            in={groupActive.includes(item.title)}
            sx={{
              pl: 0,
              width: "100%",
              ...menuGroupCollapsedStyles,
              transition: "all 0.25s ease-in-out",
            }}>
            <VerticalNavItems
              {...props}
              parent={item}
              navVisible={navVisible}
              verticalNavItems={item.children}
              isSubToSub={parent && item.children ? item : undefined}
            />
          </Collapse>
        </ListItem>
      </Fragment>
    </CanViewNavGroup>
  );
};

export default VerticalNavGroup;