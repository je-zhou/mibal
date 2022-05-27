import { BrowserRouter, Routes, Route } from "react-router-dom";
import CashFlow from "./pages/CashFlow/CashFlow";
import BalanceSheet from "./pages/BalanceSheet/BalanceSheet";
import Wrapper from "./components/Wrapper";
import LoginPage from "./pages/LoginPage/LoginPage";



function App() {

  return (<BrowserRouter>
    <Routes>
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/" element={<Wrapper />}>
        <Route path="balance-sheet" element={<BalanceSheet />} />
        <Route path="cash-flow" element={<CashFlow />} />
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>)
}
export default App
