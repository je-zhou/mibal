import { BrowserRouter, Routes, Route } from "react-router-dom";
import CashFlow from "./pages/CashFlow/CashFlow";
import BalanceSheet from "./pages/BalanceSheet/BalanceSheet";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ResetPage from "./pages/Auth/ResetPage";
import { AuthWrapper } from "./pages/Auth/AuthWrapper";
import SideBar from "./components/SideBar";
import { useStateContext } from "./contexts/ContextProvider";
import Navbar from "./components/Navbar";

function App() {
  const { activeMenu } = useStateContext()

  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
          ToolTip
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <SideBar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <SideBar />
          </div>
        )}
        <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"}`}>
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<AuthWrapper />} />

          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reset" element={<ResetPage />} />

          {/* Pages */}
          <Route path="/balance-sheet" element={<BalanceSheet />} />
          <Route path="/cash-flow" element={<CashFlow />} />
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>)
}
export default App
