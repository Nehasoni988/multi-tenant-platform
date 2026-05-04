
import { LoginMenu } from "./LoginMenu";

export const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-blue-600 text-white flex items-center px-4 z-50">
        <h1 className="text-lg font-semibold">Canara HSBC Assignment</h1>

        <div className="ml-auto relative">
          <LoginMenu />
        </div>
      </header>
    </>
  );
};
