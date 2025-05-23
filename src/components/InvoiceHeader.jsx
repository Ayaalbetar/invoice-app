import { Link } from "react-router-dom";
import "./InvoiceHeader.css";

export default InvoiceHeader  = () => {
  return (
    <header className="header">
      <h1>Invoice Generator</h1>
      <nav className="nav-links">
        <Link to="/create">Create Invoice</Link>
        <Link to="/invoices">View Invoices</Link>
      </nav>
    </header>
  );
};

;
