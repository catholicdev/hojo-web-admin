// ** React Imports
// ** Component Imports
// ** Types
import { NavGroup, NavLink } from "@web/@core/layouts/types";
import { AbilityContext } from "@web/layouts/components/acl/Can";
import { ReactNode, useContext } from "react";

interface Props {
  navGroup?: NavGroup;
  children: ReactNode;
}

const CanViewNavGroup = (props: Props) => {
  // ** Props
  const { children, navGroup } = props;

  // ** Hook
  const ability = useContext(AbilityContext);

  const canViewMenuGroup = (item: NavGroup) => {
    const hasAnyVisibleChild =
      item.children && item.children.some((i: NavLink) => ability && ability.can(i.action, i.subject));

    if (!(item.action && item.subject)) {
      return hasAnyVisibleChild;
    }

    return ability && ability.can(item.action, item.subject) && hasAnyVisibleChild;
  };

  if (navGroup && navGroup.auth === false) {
    return <>{children}</>;
  } else {
    return navGroup && canViewMenuGroup(navGroup) ? <>{children}</> : null;
  }
};

export default CanViewNavGroup;
