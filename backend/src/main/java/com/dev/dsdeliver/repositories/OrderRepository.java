package com.dev.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dev.dsdeliver.entities.Order;
import com.dev.dsdeliver.entities.Product;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long>{

}
