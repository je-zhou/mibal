import { BrowserRouter, Routes, Route } from "react-router-dom";
import CashFlow from "./pages/CashFlow/CashFlow";
import BalanceSheet from "./pages/BalanceSheet/BalanceSheet";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ResetPage from "./pages/Auth/ResetPage";
import { AuthWrapper } from "./pages/Auth/AuthWrapper";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>)
}
export default App
