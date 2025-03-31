import React, { useState, useEffect } from "react";
import { CustomerService } from "./CustomerService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

function DeleteCustomer() {
    const [customers, setCustomers] = useState([]);
    const customerService = new CustomerService();

    useEffect(() => {
        customerService.getAll().then(data => setCustomers(data));
    }, []);

    const deleteCustomer = (id) => {
        customerService.deleteCustomer(id).then(() => {
            setCustomers(customers.filter(customer => customer.id !== id));
        }).catch(error => {
            console.error("Error deleting customer:", error);
        });
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <Button label="Delete" icon="pi pi-times" className="p-button-danger" onClick={() => deleteCustomer(rowData.id)} />
        );
    };

    return (
        <div>
            <h2>Delete Customer</h2>
            <DataTable value={customers}>
                <Column field="id" header="ID"></Column>
                <Column field="firstName" header="First Name"></Column>
                <Column field="lastName" header="Last Name"></Column>
                <Column field="address" header="Address"></Column>
                <Column body={actionBodyTemplate} header="Actions"></Column>
            </DataTable>
        </div>
    );
}

export default DeleteCustomer;