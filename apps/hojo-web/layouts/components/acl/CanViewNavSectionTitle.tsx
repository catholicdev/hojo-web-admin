// ** React Imports
// ** Component Imports
// ** Types
import { NavSectionTitle } from "@web/@core/layouts/types";
import { AbilityContext } from "@web/layouts/components/acl/Can";
import { ReactNode, useContext } from "react";

interface Props {
  children: ReactNode;
  navTitle?: NavSectionTitle;
}

const CanViewNavSectionTitle = (props: Props) => {
  // ** Props
  const { children, navTitle } = props;

  // ** Hook
  const ability = useContext(AbilityContext);

  if (navTitle && navTitle.auth === false) {
    return <>{children}</>;
  } else {
    return ability && ability.can(navTitle?.action, navTitle?.subject) ? <>{children}</> : null;
  }
};

export default CanViewNavSectionTitle;
