import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InvoiceHeader from "./components/InvoiceHeader";
import InvoiceCreate from "./pages/InvoiceCreate";
import InvoiceList from "./pages/InvoiceList";
import InvoiceDetails from "./pages/InvoiceDetails";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <InvoiceHeader />
        <div className="p-4">
          <Routes>
           
            <Route path="/create" element={<InvoiceCreate />} />
            <Route path="/invoices" element={<InvoiceList />} />
            <Route path="/invoice/:id" element={<InvoiceDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
