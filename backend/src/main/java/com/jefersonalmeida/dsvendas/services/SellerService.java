package com.jefersonalmeida.dsvendas.services;

import com.jefersonalmeida.dsvendas.dto.SellerDTO;
import com.jefersonalmeida.dsvendas.entities.Seller;
import com.jefersonalmeida.dsvendas.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SellerService {

    @Autowired
    private SellerRepository repository;

    public List<SellerDTO> findAll() {
        List<Seller> result = repository.findAll();
        return result.stream().map(SellerDTO::new).collect(Collectors.toList());
    }
}
