
import { useState } from "react";
import ProductTable from "../components/ProductTable";
import InvoiceSummary from "../components/InvoiceSummary";
import "./InvoiceCreate.css";

export default function InvoiceCreate() {
  const [customerName, setCustomerName] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [products, setProducts] = useState([{ name: "", quantity: 1, price: 0 }]);
  const subtotal = products.reduce((sum, p) => sum + p.quantity * p.price, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;
 const saveInvoice = () => {

  if (!customerName.trim()) {
    alert("Please enter the customer name.");
    return;
  }
  if (!invoiceDate) {
    alert("Please select an invoice date.");
    return;
  }

 
  const validProducts = products.filter(p => p.name.trim() && p.quantity > 0 && p.price > 0);
  if (validProducts.length === 0) {
    alert("Please add at least one valid product (with name, quantity > 0, and price > 0).");
    return;
  }

 
  const id = Date.now();
  const newInvoice = {
    id,
    customerName,
    invoiceDate,
    products: validProducts,
    subtotal,
    tax,
    total
  };

  const saved = JSON.parse(localStorage.getItem("invoices") || "[]");
  saved.push(newInvoice);
  localStorage.setItem("invoices", JSON.stringify(saved));
  alert("Invoice saved!");
};


  return (
    <div className="invoice-create-container" >
      <h2>Create Invoice</h2>
      <input type="text" placeholder="Customer Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
      <input type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} />

      <ProductTable
        products={products}
        onChange={(index, field, value) => {
          const updated = [...products];
          updated[index][field] = value;
          setProducts(updated);
        }}
        onAdd={() => setProducts([...products, { name: "", quantity: 1, price: 0 }])}
        onRemove={(index) => setProducts(products.filter((_, i) => i !== index))}
      />

      <InvoiceSummary subtotal={subtotal} tax={tax} total={total} />

      <button onClick={saveInvoice}>Save Invoice</button>
    </div>
  );
}