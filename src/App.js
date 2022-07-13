import './App.css';
import Navbar from './components/Navbar';
import BalanceSheetPage from './pages/balance-sheet/BalanceSheetPage';
import CashFlowPage from './pages/cash-flow/CashFlowPage';
import MainPage from './pages/main/MainPage';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div >
      <Navbar />
      <div >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/balance-sheet" element={<BalanceSheetPage />} />
          <Route path="/cash-flow" element={<CashFlowPage />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;
