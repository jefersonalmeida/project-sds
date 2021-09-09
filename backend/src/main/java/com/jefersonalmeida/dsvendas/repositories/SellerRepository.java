package com.jefersonalmeida.dsvendas.repositories;

import com.jefersonalmeida.dsvendas.entities.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerRepository extends JpaRepository<Seller, Long> {
}
