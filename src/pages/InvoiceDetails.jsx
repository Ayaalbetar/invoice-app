import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./InvoiceDetails.css";

export default function InvoiceDetails() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);
  const printRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `Invoice-${id}`,
    onError: () => alert("Print failed!"),
    onPrintError: () => alert("Print error!")
  });

  useEffect(() => {
    const invoices = JSON.parse(localStorage.getItem("invoices") || "[]");
    const inv = invoices.find((i) => i.id === Number(id));
    setInvoice(inv);
  }, [id]);

  if (!invoice) return <p>Invoice not found</p>;

  return (
    <>
      <div className="invoice-details-container" ref={printRef}>
        <h2>Invoice Details</h2>
        <p><strong>Customer:</strong> {invoice.customerName}</p>
        <p><strong>Date:</strong> {invoice.invoiceDate}</p>

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {invoice.products.map((p, index) => (
              <tr key={index}>
                <td>{p.name}</td>
                <td>{p.quantity}</td>
                <td>{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p><strong>Subtotal:</strong> {invoice.subtotal.toFixed(2)}</p>
        <p><strong>Tax:</strong> {invoice.tax.toFixed(2)}</p>
        <p><strong>Total:</strong> {invoice.total.toFixed(2)}</p>
      </div>


      <button onClick={handlePrint}>Print</button>
    </>
  );
}
