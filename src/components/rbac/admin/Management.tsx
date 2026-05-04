import { useEffect, useState } from "react";
import { USERS } from "../../../data/users";
import { PRODUCTS } from "../../../data/products";
import { ROLES } from "../../../data/roles";
import { getUsersFromLS, setUsersToLS } from "../../../utils/helper";

export const Management = () => {
  // Constants
  const [users, setUsers] = useState(() => {
    return getUsersFromLS()?.length ? getUsersFromLS() : USERS;
  });
  const filteredUsers = users?.filter((user) => user.role !== ROLES.ADMIN);

  //   Hooks
  useEffect(() => {
    if (!getUsersFromLS()?.length) {
      setUsersToLS(USERS);
    }
  }, []);

  //   Methods
  const onProductToggle = (
    userId: string | number,
    productId: string | number,
  ) => {
    if (!users?.length) return;

    const updatedUsers = users.map((user) => {
      if (user.id !== userId) return user;

      const hasProducts = user.products.includes(productId);

      return {
        ...user,
        products: hasProducts
          ? user.products.filter((pId) => pId !== productId)
          : [...user.products, productId],
      };
    });

    setUsersToLS(updatedUsers);
    setUsers(updatedUsers);
  };

  return (
    <>
      <div className="grid grid-cols-1">
        <div>
          {filteredUsers && filteredUsers.map((user) => (
            <a
              key={user.id}
              className="bg-neutral-primary-soft block p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium"
            >
              <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
                {user.name}
              </h5>
              <div className="text-body">
                {PRODUCTS.map((product) => (
                  <div className="flex items-center" key={product.id}>
                    <input
                      id="checked-checkbox"
                      type="checkbox"
                      checked={user.products.includes(product.id)}
                      value={product.id}
                      onChange={() => onProductToggle(user.id, product.id)}
                      className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="select-none ms-2 text-sm font-medium text-heading"
                    >
                      {product.title}
                    </label>
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
