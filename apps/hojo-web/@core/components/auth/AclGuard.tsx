// ** React Imports
// ** Next Import
import { useRouter } from "next/router";

import Spinner from "@web/@core/components/spinner";
import BlankLayout from "@web/@core/layouts/BlankLayout";
// ** Types
import type { ACLObj, AppAbility } from "@web/configs/acl";
// ** Config Import
import { buildAbilityFor } from "@web/configs/acl";
// ** Hooks
import { useAuth } from "@web/hooks/useAuth";
// ** Context Imports
import { AbilityContext } from "@web/layouts/components/acl/Can";
// ** Util Import
import getHomeRoute from "@web/layouts/components/acl/getHomeRoute";
// ** Component Import
import NotAuthorized from "@web/pages/401";
import { ReactNode, useEffect } from "react";

interface AclGuardProps {
  children: ReactNode;
  authGuard?: boolean;
  guestGuard?: boolean;
  aclAbilities: ACLObj;
}

const AclGuard = (props: AclGuardProps) => {
  // ** Props
  const { aclAbilities, children, guestGuard = false, authGuard = true } = props;

  // ** Hooks
  const auth = useAuth();
  const router = useRouter();

  // ** Vars
  let ability: AppAbility;

  useEffect(() => {
    if (auth.user && auth.user.role && !guestGuard && router.route === "/") {
      const homeRoute = getHomeRoute(auth.user.role);
      router.replace(homeRoute);
    }
  }, [auth.user, guestGuard, router]);

  // User is logged in, build ability for the user based on his role
  if (auth.user && !ability) {
    ability = buildAbilityFor(auth.user.role, aclAbilities.subject);
    if (router.route === "/") {
      return <Spinner />;
    }
  }

  // If guest guard or no guard is true or any error page
  if (guestGuard || router.route === "/404" || router.route === "/500" || !authGuard) {
    // If user is logged in and his ability is built
    if (auth.user && ability) {
      return <AbilityContext.Provider value={ability}>{children}</AbilityContext.Provider>;
    } else {
      // If user is not logged in (render pages like login, register etc..)
      return <>{children}</>;
    }
  }

  // Check the access of current user and render pages
  if (ability && auth.user && ability.can(aclAbilities.action, aclAbilities.subject)) {
    if (router.route === "/") {
      return <Spinner />;
    }

    return <AbilityContext.Provider value={ability}>{children}</AbilityContext.Provider>;
  }

  // Render Not Authorized component if the current user has limited access
  return (
    <BlankLayout>
      <NotAuthorized />
    </BlankLayout>
  );
};

export default AclGuard;
