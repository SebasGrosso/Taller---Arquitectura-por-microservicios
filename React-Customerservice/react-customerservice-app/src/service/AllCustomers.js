import React, { Component } from "react";
import { CustomerService } from "./CustomerService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default class AllCustomers extends Component {
    constructor() {
        super();
        this.state = {};
        this.customerService = new CustomerService();
    }

    componentDidMount() {
        this.customerService.getAll().then(data => this.setState({ customers: data }));
    }

    render() {
        return (
            <DataTable value={this.state.customers}>
                <Column field="id" header="ID"></Column>
                <Column field="firstName" header="First Name"></Column>
                <Column field="lastName" header="Last Name"></Column>
                <Column field="address" header="Address"></Column>
            </DataTable>
        );
    }
}
