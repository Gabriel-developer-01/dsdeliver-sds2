package com.dev.dsdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dev.dsdeliver.config.dto.OrderDTO;
import com.dev.dsdeliver.config.dto.ProductDTO;
import com.dev.dsdeliver.entities.Order;
import com.dev.dsdeliver.entities.OrderStatus;
import com.dev.dsdeliver.entities.Product;
import com.dev.dsdeliver.repositories.OrderRepository;
import com.dev.dsdeliver.repositories.ProductRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll(){
		List<Order> list = repository.findOrdersWithProducts();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional()
	public OrderDTO insert(OrderDTO dto){
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), Instant.now(), OrderStatus.PENDING);
		
		for(ProductDTO productsdto : dto.getProducts()) {
			Product product = productRepository.getOne(productsdto.getId());
			order.getProducts().add(product);
		}
		order = repository.save(order);
		return new OrderDTO(order);
	}
}
