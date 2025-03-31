import axios from 'axios';
export class CustomerService {
    baseUrl = "http://localhost:8080/allcustomers";

    getAll() {
        return axios.get(this.baseUrl).then(res => res.data);
    }

    saveCustomer(values) {
        return axios.post(this.baseUrl+"/addCustomer", values);
    }

    deleteCustomer(id) {
        return axios.delete(`${this.baseUrl}/deleteCustomer/${id}`);
    }

    findCustomerById(id) {
        return axios.get(`${this.baseUrl}/findCustomerById/${id}`).then(res => res.data);
    }


}
