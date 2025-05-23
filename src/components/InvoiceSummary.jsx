import "./InvoiceSummary.css";

export default function InvoiceSummary({ subtotal, tax, total }) {
  return (
    <div className="invoice-summary">
      <div className="row">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="row">
        <span>Tax (5%):</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="row total">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
