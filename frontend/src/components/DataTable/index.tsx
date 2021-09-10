import { useEffect, useState } from 'react';
import { Sale } from 'types/sale';
import axios from 'axios';
import { BASE_URL } from 'utils/requests';
import { formatLocalDate } from 'utils/format';
import Pagination from 'components/Pagination';
import { Paginate } from 'types/pagination';

const DataTable = () => {
  
  const [activePage, setActivePage] = useState(0);
  
  const [page, setPage] = useState<Paginate<Sale>>({
    first        : true,
    last         : true,
    number       : 0,
    totalElements: 0,
    totalPages   : 0
  });
  
  useEffect(() => {
    axios.get<Paginate<Sale>>(`${ BASE_URL }/sales?page=${ activePage }&size=20&sort=date,desc`)
        .then(result => setPage(result.data));
    
  }, [activePage]);
  
  const changePage = (i: number) => setActivePage(i);
  
  return (
      <>
        <Pagination page={ page } onChange={ changePage }/>
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
            { page.content?.map(item => (
                <tr key={ item.id }>
                  <td>{ formatLocalDate(item.date, 'dd/MM/yyyy') }</td>
                  <td>{ item.seller.name }</td>
                  <td>{ item.visited }</td>
                  <td>{ item.deals }</td>
                  <td>{ item.amount.toFixed(2) }</td>
                </tr>
            )) }
            </tbody>
          </table>
        </div>
      </>
  );
};

export default DataTable;
