// ** React Imports
// ** Type Import
import { HorizontalNavItemsType } from "@web/@core/layouts/types";
// ** Axios Import
import axios from "axios";
import { useEffect, useState } from "react";

const ServerSideNavItems = () => {
  // ** State
  const [menuItems, setMenuItems] = useState<HorizontalNavItemsType>([]);

  useEffect(() => {
    axios.get("/api/horizontal-nav/data").then((response) => {
      const menuArray = response.data;

      setMenuItems(menuArray);
    });
  }, []);

  return { menuItems };
};

export default ServerSideNavItems;
