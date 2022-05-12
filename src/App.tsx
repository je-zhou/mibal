import { BrowserRouter, Routes, Route } from "react-router-dom";
import CashFlow from "./components/CashFlow/CashFlow";
import BalanceSheet from "./components/BalanceSheet/BalanceSheet";
import Wrapper from "./components/Wrapper";
  
function App(){
return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Wrapper/>}>
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
  