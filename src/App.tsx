import { BrowserRouter, Routes, Route } from "react-router-dom";
import CashFlow from "./components/CashFlow/CashFlow";
import BalanceSheet from "./components/BalanceSheet/BalanceSheet";
import Wrapper from "./components/Wrapper";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBmnlgNRMPXub8N6sqUDCOJh5OalHY5g1U",
  authDomain: "mibal-89ea5.firebaseapp.com",
  projectId: "mibal-89ea5",
  storageBucket: "mibal-89ea5.appspot.com",
  messagingSenderId: "448391525478",
  appId: "1:448391525478:web:13f6251c3baab9e8d9e9a7",
  measurementId: "G-2V56T8QBD2"
};


function App(){
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
  