import { useEffect, useState } from "react";
import { USERS } from "../../../data/users";
import { PRODUCTS } from "../../../data/products";
import { ROLES } from "../../../data/roles";
import { getUsersFromLS, setUsersToLS } from "../../../utils/helper";
import type { User } from "../../../types/userTypes";

export const Management = () => {
  // State
  const [users, setUsers] = useState<User[]>(() => {
    return getUsersFromLS()?.length ? getUsersFromLS()! : USERS;
  });
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [nameError, setNameError] = useState("");

  // Constants
  const filteredUsers = users?.filter((user) => user.role !== ROLES.ADMIN);

  // Hooks
  useEffect(() => {
    if (!getUsersFromLS()?.length) {
      setUsersToLS(USERS);
    }
  }, []);

  // Methods
  const onProductToggle = (
    userId: string | number,
    productId: string | number,
  ) => {
    if (!users?.length) return;

    const updatedUsers = users.map((user) => {
      if (user.id !== userId) return user;

      const hasProduct = user.products.includes(productId);

      return {
        ...user,
        products: hasProduct
          ? user.products.filter((pId) => pId !== productId)
          : [...user.products, productId],
      };
    });
    setUsersToLS(updatedUsers);
    setUsers(updatedUsers);
    window.dispatchEvent(new Event("userChanged"));
  };

  const onCreateUser = () => {
    const trimmed = newName.trim();
    if (!trimmed) {
      setNameError("Name is required.");
      return;
    }
    const duplicate = users.some(
      (u) => u.name.toLowerCase() === trimmed.toLowerCase(),
    );
    if (duplicate) {
      setNameError("A user with this name already exists.");
      return;
    }
    const maxId = users.reduce((max, u) => Math.max(max, Number(u.id)), 0);
    const newUser: User = {
      id: maxId + 1,
      name: trimmed,
      role: ROLES.USER,
      products: [],
    };
    const updatedUsers = [...users, newUser];
    setUsersToLS(updatedUsers);
    setUsers(updatedUsers);
    window.dispatchEvent(new Event("usersUpdated"));
    setNewName("");
    setNameError("");
    setShowForm(false);
  };

  const onDeleteUser = (userId: string | number) => {
    const updatedUsers = users.filter((u) => u.id !== userId);
    setUsersToLS(updatedUsers);
    setUsers(updatedUsers);
    window.dispatchEvent(new Event("usersUpdated"));
  };

  const Toggle = ({
    checked,
    onChange,
  }: {
    checked: boolean;
    onChange: () => void;
  }) => (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      <div
        className={`w-9 h-5 rounded-full transition-colors duration-200 ${
          checked ? "bg-blue-600" : "bg-gray-200"
        } peer-focus:ring-2 peer-focus:ring-blue-500 peer-focus:ring-offset-1`}
      >
        <div
          className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${
            checked ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </div>
    </label>
  );

  const DeleteButton = ({ onClick }: { onClick: () => void }) => (
    <button
      onClick={onClick}
      title="Delete user"
      className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-50 transition-colors"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button>
  );

  const emptyState = (
    <div className="py-12 text-center text-sm text-gray-400">
      No users yet. Click{" "}
      <span className="font-medium text-gray-500">Add User</span> to create one.
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage product access for {filteredUsers?.length ?? 0} users
          </p>
        </div>
        <button
          onClick={() => { setShowForm((p) => !p); setNameError(""); }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add User
        </button>
      </div>

      {/* Create User Form */}
      {showForm && (
        <div className="mb-5 bg-white border border-blue-100 rounded-2xl p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 mb-3">New User</h3>
          <div className="flex flex-col sm:flex-row gap-3 items-start">
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder="Enter full name"
                value={newName}
                onChange={(e) => { setNewName(e.target.value); setNameError(""); }}
                onKeyDown={(e) => e.key === "Enter" && onCreateUser()}
                className={`w-full px-3 py-2 text-sm border rounded-xl outline-none transition-colors ${
                  nameError
                    ? "border-red-400 focus:border-red-500"
                    : "border-gray-200 focus:border-blue-400"
                }`}
              />
              {nameError && (
                <p className="text-xs text-red-500 mt-1.5">{nameError}</p>
              )}
              <p className="text-xs text-gray-400 mt-1.5">
                New user will have the{" "}
                <span className="font-medium text-gray-500">User</span> role
                with no products assigned.
              </p>
            </div>
            <div className="flex gap-2 sm:flex-shrink-0">
              <button
                onClick={onCreateUser}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors"
              >
                Create
              </button>
              <button
                onClick={() => { setShowForm(false); setNewName(""); setNameError(""); }}
                className="px-4 py-2 border border-gray-200 hover:bg-gray-50 text-gray-600 text-sm font-medium rounded-xl transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── MOBILE: card list (hidden on md+) ── */}
      <div className="md:hidden space-y-3">
        {(!filteredUsers || filteredUsers.length === 0) && emptyState}

        {filteredUsers?.map((user) => {
          const initials = user.name
            .split(" ")
            .map((n: string) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();
          const grantedCount = user.products.length;

          return (
            <div
              key={user.id}
              className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm"
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-blue-700">{initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-400">
                      {grantedCount} product{grantedCount !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
                <DeleteButton onClick={() => onDeleteUser(user.id)} />
              </div>

              {/* Product rows */}
              <div className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
                {PRODUCTS.map((product) => {
                  const isChecked = user.products.includes(product.id);
                  return (
                    <div
                      key={product.id}
                      className="flex items-center justify-between px-3 py-2.5 bg-gray-50"
                    >
                      <span className="text-sm text-gray-700">{product.title}</span>
                      <Toggle
                        checked={isChecked}
                        onChange={() => onProductToggle(user.id, product.id)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── DESKTOP: table (hidden below md) ── */}
      <div className="hidden md:block bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        {/* Table Header */}
        <div
          className="grid bg-gray-50 border-b border-gray-200 px-5 py-3"
          style={{ gridTemplateColumns: `200px repeat(${PRODUCTS.length}, 1fr) 48px` }}
        >
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">User</span>
          {PRODUCTS.map((product) => (
            <span
              key={product.id}
              className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center"
            >
              {product.title}
            </span>
          ))}
          <span />
        </div>

        {(!filteredUsers || filteredUsers.length === 0) && emptyState}

        {filteredUsers?.map((user, index) => {
          const initials = user.name
            .split(" ")
            .map((n: string) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();
          const grantedCount = user.products.length;

          return (
            <div
              key={user.id}
              className={`grid items-center px-5 py-4 transition-colors hover:bg-gray-50 ${
                index !== filteredUsers.length - 1 ? "border-b border-gray-100" : ""
              }`}
              style={{ gridTemplateColumns: `200px repeat(${PRODUCTS.length}, 1fr) 48px` }}
            >
              {/* User info */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-blue-700">{initials}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-400">
                    {grantedCount} product{grantedCount !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              {/* Product toggles */}
              {PRODUCTS.map((product) => {
                const isChecked = user.products.includes(product.id);
                return (
                  <div key={product.id} className="flex justify-center">
                    <Toggle
                      checked={isChecked}
                      onChange={() => onProductToggle(user.id, product.id)}
                    />
                  </div>
                );
              })}

              {/* Delete */}
              <div className="flex justify-center">
                <DeleteButton onClick={() => onDeleteUser(user.id)} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
