package com.jefersonalmeida.dsvendas.repositories;

import com.jefersonalmeida.dsvendas.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sale, Long> {
}
