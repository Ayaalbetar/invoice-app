import { useReactToPrint } from "react-to-print";

export default function PrintButton({ printRef }) {
  const handlePrint =

     useReactToPrint({
    
    content: () =>{  if (printRef.current) return printRef.current;
  alert("Nothing to print!");
  return null;
    }
  });

  return <button onClick={handlePrint}>Print</button>;
}


