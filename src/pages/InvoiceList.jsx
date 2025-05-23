
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./InvoiceList.css";


export default function InvoiceList() {

  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("invoices") || "[]");
    setInvoices(data);
  }, []);

  return (
    <div className="invoice-list-container">

      <h2>Invoices List</h2>
      <table>
        <thead>
          <tr><th>ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv) => (
            <tr key={inv.id}>
              <td>{inv.id}</td>
              <td>{inv.customerName}</td>
              <td>{inv.invoiceDate}</td>
              <td>{inv.total.toFixed(2)}</td>
              <td><Link to={`/invoice/${inv.id}`}>View</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}