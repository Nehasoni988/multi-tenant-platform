import { useEffect, useState } from "react";
import { ROLES } from "../../data/roles";
import { getLoggedinUserFromLS } from "../../utils/helper";
import { ProductList } from "../product/ProductList";
import { Management } from "../rbac/admin/Management";

export const Dashboard = () => {
  const Components = {
    management: Management,
    productList: ProductList,
  };

  // Store component type
  const [SelectedComponent, setSelectedComponent] =
    useState<React.ElementType | null>(null);

  useEffect(() => {
    const updateComponent = () => {
      const user = getLoggedinUserFromLS(); // ⚠️ re-fetch here

      if (user?.role === ROLES.USER) {
        setSelectedComponent(() => Components.productList);
      } else {
        setSelectedComponent(() => Components.management);
      }
    };

    window.addEventListener("userChanged", updateComponent);

    updateComponent();

    return () => window.removeEventListener("userChanged", updateComponent);
  }, []);

  return <div>{SelectedComponent && <SelectedComponent />}</div>;
};
