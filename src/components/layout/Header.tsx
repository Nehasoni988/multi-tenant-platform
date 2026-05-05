import { useNavigate } from "react-router";
import { LoginMenu } from "./LoginMenu";

export const Header = () => {
  // Hooks
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 flex items-center px-6 bg-white border-b border-gray-200 shadow-sm">
      {/* Brand */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-sm font-bold text-gray-900 leading-none">
            Canara HSBC
          </h1>
          <p className="text-xs text-gray-400 leading-none mt-0.5">
            Learning Portal
          </p>
        </div>
      </div>

      <div className="ml-auto relative">
        <LoginMenu />
      </div>
    </header>
  );
};
