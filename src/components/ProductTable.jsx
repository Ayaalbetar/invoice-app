import "./ProductTable.css";

export default function ProductTable({ products, onChange, onAdd, onRemove }) {
  return (
    <div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => (
            <tr key={index}>
              <td>
                <input className="textInput"
                  type="text"
                  value={p.name}
                  onChange={(e) => onChange(index, "name", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={p.quantity}
                  onChange={(e) => onChange(index, "quantity", +e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={p.price}
                  onChange={(e) => onChange(index, "price", +e.target.value)}
                />
              </td>
              <td className="actions">
                <button onClick={() => onRemove(index)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-button" onClick={onAdd}>+ Add Product</button>
    </div>
  );
}
