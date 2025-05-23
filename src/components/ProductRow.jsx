export default  function ProductRow({ product, index, onChange, onRemove }) {
  return (
    <tr> 
      <td><input value={product.name} onChange={e => onChange(index, "name", e.target.value)} /></td>
      <td><input type="number" value={product.quantity} onChange={e => onChange(index, "quantity", +e.target.value)} /></td>
      <td><input type="number" value={product.price} onChange={e => onChange(index, "price", +e.target.value)} /></td>
      <td><button onClick={() => onRemove(index)}>Remove</button></td>
    </tr>
  );
}


