import { USERS } from "../../data/users";
import { useEffect, useState } from "react";
import type { User } from "../../types/userTypes";
import { getLoggedinUser, setLoggedinUser } from "../../utils/helper";

export const LoginMenu = () => {
  // State
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Methods
  const onUserSelect = (user: User) => {
    // Update user in local storage
    setLoggedinUser(user);
    // Update user in local state
    setSelectedUser(user);
    // Dispatch custom event to notify user changes
    window.dispatchEvent(new Event("userChanged"));
    // Close the menu
    setOpenMenu(false);
  };

  //   Hooks
  useEffect(() => {
    const loggedInUser = getLoggedinUser();
    loggedInUser ? setSelectedUser(loggedInUser) : setSelectedUser(USERS[0]);
  }, []);

  return (
    <>
      <button
        className="inline-flex items-center justify-center text-white bg-brand hover:bg-brand-strong rounded-base text-sm px-4 py-2.5"
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        {selectedUser && selectedUser.name}
      </button>

      {openMenu && (
        <div className="absolute right-0 mt-2 z-10 bg-white border rounded shadow-lg w-44">
          <ul className="p-2 text-sm">
            {USERS.map((user) => (
              <li onClick={() => onUserSelect(user)} key={user.id}>
                <a className="block p-2 hover:bg-gray-100 rounded text-black">
                  {user.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
