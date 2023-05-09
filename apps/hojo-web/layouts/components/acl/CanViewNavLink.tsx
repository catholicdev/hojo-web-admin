// ** React Imports
// ** Component Imports
// ** Types
import { NavLink } from "@web/@core/layouts/types";
import { AbilityContext } from "@web/layouts/components/acl/Can";
import { ReactNode, useContext } from "react";

interface Props {
  navLink?: NavLink;
  children: ReactNode;
}

const CanViewNavLink = (props: Props) => {
  // ** Props
  const { children, navLink } = props;

  // ** Hook
  const ability = useContext(AbilityContext);

  if (navLink && navLink.auth === false) {
    return <>{children}</>;
  } else {
    return ability && ability.can(navLink?.action, navLink?.subject) ? <>{children}</> : null;
  }
};

export default CanViewNavLink;
