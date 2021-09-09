const DataTable = () => {
  
  let trs = [];
  for (let i = 1; i <= 5; i++) {
    trs.push(<tr>
      <td>{20 + i}/04/2021</td>
      <td>Barry Allen - {i}</td>
      <td>{34 + i}</td>
      <td>{25 + i}</td>
      <td>{(15017.21 * i).toFixed(2)}</td>
    </tr>);
  }
  
  return (
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
          </thead>
          <tbody>
          {trs }
          </tbody>
        </table>
      </div>
  );
};

export default DataTable;
