// ** React Imports
// ** Type Import
import { VerticalNavItemsType } from "@web/@core/layouts/types";
// ** Axios Import
import axios from "axios";
import { useEffect, useState } from "react";

const ServerSideNavItems = () => {
  // ** State
  const [menuItems, setMenuItems] = useState<VerticalNavItemsType>([]);

  useEffect(() => {
    axios.get("/api/vertical-nav/data").then((response) => {
      const menuArray = response.data;

      setMenuItems(menuArray);
    });
  }, []);

  return { menuItems };
};

export default ServerSideNavItems;
