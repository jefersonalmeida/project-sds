package com.jefersonalmeida.dsvendas.repositories;

import com.jefersonalmeida.dsvendas.dto.SaleSuccessDTO;
import com.jefersonalmeida.dsvendas.dto.SaleSumDTO;
import com.jefersonalmeida.dsvendas.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SaleRepository extends JpaRepository<Sale, Long> {

    @Query(
            "select new com.jefersonalmeida.dsvendas.dto.SaleSumDTO(obj.seller, sum(obj.amount))"
                    + " from Sale as obj group by obj.seller"
    )
    List<SaleSumDTO> amountGroupedBySeller();

    @Query(
            "select new com.jefersonalmeida.dsvendas.dto.SaleSuccessDTO(obj.seller, sum(obj.visited), sum(obj.deals))"
                    + " from Sale as obj group by obj.seller"
    )
    List<SaleSuccessDTO> successGroupedBySeller();
}
