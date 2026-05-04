import { ChannelList } from "./components/channel/ChannelList";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Route, Routes } from "react-router";
import { Dashboard } from "./components/layout/Dashboard";

function App() {
  
  return (
    <>
      <div className="h-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto pt-16 pb-16 bg-gray-100">
          <div className="p-4 space-y-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/product/:productId/channels"
                element={<ChannelList />}
              />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
