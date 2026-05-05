import { USERS } from "../../data/users";
import { useEffect, useState } from "react";
import type { User } from "../../types/userTypes";
import { getLoggedinUserFromLS, getUsersFromLS, setLoggedinUserToLS } from "../../utils/helper";
import { useLocation, useNavigate } from "react-router";

export const LoginMenu = () => {
  // State
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [allUsers, setAllUsers] = useState<User[]>(() => {
    return getUsersFromLS() ?? USERS;
  });

  // Router Hooks
  const location = useLocation();
  const navigate = useNavigate();

  // Methods
  const onUserSelect = (user: User) => {
    // Update user in local storage
    setLoggedinUserToLS(user.id);
    // Update user in local state
    setSelectedUser(user);
    // Dispatch custom event to notify user changes
    window.dispatchEvent(new Event("userChanged"));
    // Close the menu
    setOpenMenu(false);
    // Check on which route we are, if we are not on dashboard redirect
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  // Hooks
  useEffect(() => {
    const loggedInUser = getLoggedinUserFromLS();
    const users = getUsersFromLS() ?? USERS;
    setAllUsers(users);
    loggedInUser ? setSelectedUser(loggedInUser) : setSelectedUser(users[0]);
  }, []);

  // Re-sync the user list when admin creates / deletes a user
  useEffect(() => {
    const onUsersUpdated = () => {
      const users = getUsersFromLS() ?? USERS;
      setAllUsers(users);
    };
    window.addEventListener("usersUpdated", onUsersUpdated);
    return () => window.removeEventListener("usersUpdated", onUsersUpdated);
  }, []);

  // Keep selectedUser in sync if their products were toggled
  useEffect(() => {
    const onUserChanged = () => {
      const loggedInUser = getLoggedinUserFromLS();
      if (loggedInUser) setSelectedUser(loggedInUser);
    };
    window.addEventListener("userChanged", onUserChanged);
    return () => window.removeEventListener("userChanged", onUserChanged);
  }, []);

  const initials = selectedUser?.name
    ? selectedUser.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
    : "?";

  return (
    <div
      tabIndex={0}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setOpenMenu(false);
        }
      }}
      className="outline-none"
    >
      <button
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all text-sm text-gray-700 font-medium"
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-semibold flex-shrink-0">
          {initials}
        </span>
        <span>{selectedUser?.name}</span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform ${openMenu ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {openMenu && (
        <div className="absolute right-0 mt-2 z-10 bg-white border border-gray-200 rounded-xl shadow-lg w-48 py-1 overflow-hidden">
          <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Switch User</p>
          {allUsers.map((user) => {
            const isActive = user.id === selectedUser?.id;
            const userInitials = user.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
            return (
              <button
                key={user.id}
                onClick={() => onUserSelect(user)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left transition-colors ${
                  isActive ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className={`w-6 h-6 rounded-full text-white text-xs flex items-center justify-center font-semibold flex-shrink-0 ${isActive ? "bg-blue-600" : "bg-gray-400"}`}>
                  {userInitials}
                </span>
                {user.name}
                {isActive && (
                  <svg className="ml-auto w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
