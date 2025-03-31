import React, { useState } from "react";
import { CustomerService } from "./CustomerService";
import { Panel } from 'primereact/panel';

function FindCustomer() {
    const [id, setId] = useState("");
    const [customer, setCustomer] = useState(null);
    const customerService = new CustomerService();

    const handleChange = (e) => {
        setId(e.target.value);
    }

    const findCustomer = (e) => {
        e.preventDefault();
        customerService.findCustomerById(id)
            .then((data) => {
                setCustomer(data);
            }).catch((error) => {
                console.error("Error finding customer:", error);
            });
    };

    return (
        <Panel header="Find Customer by ID" style={{ width: '80%', marginTop: '100px', margin: '0 auto' }} className="Panel1" toggleable>
            <form onSubmit={(e) => findCustomer(e)}>
                <label htmlFor="id">Customer ID</label>
                <input
                    name="id"
                    type="number"
                    onChange={(e) => handleChange(e)}
                    value={id}
                />
                <p></p>
                <button type="submit">Find</button>
            </form>
            {customer && (
                <div>
                    <h3>Customer Details</h3>
                    <p>ID: {customer.id}</p>
                    <p>First Name: {customer.firstName}</p>
                    <p>Last Name: {customer.lastName}</p>
                    <p>Address: {customer.address}</p>
                </div>
            )}
        </Panel>
    );
}

export default FindCustomer;