package co.edu.uptc.swii.costumerservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.edu.uptc.swii.costumerservice.Repository.CustomerRepository;
import co.edu.uptc.swii.costumerservice.model.Customer;

@Service
public class CustomerService {
    
    @Autowired
    private CustomerRepository customerRepository;

    public void save(Customer customer) {
        customerRepository.save(customer);
    }

    public void delete(Customer customer) {
        customerRepository.delete(customer);
    }

    public Customer findById(Integer id){
        return customerRepository.findById(id).get();
    }

    public List <Customer> findAll(){
        return customerRepository.findAll();
    }
}
