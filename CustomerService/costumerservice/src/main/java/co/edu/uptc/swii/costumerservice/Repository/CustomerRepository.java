package co.edu.uptc.swii.costumerservice.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import co.edu.uptc.swii.costumerservice.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    
}
