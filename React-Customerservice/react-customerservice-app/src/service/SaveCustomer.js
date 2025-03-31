import React, { useState } from "react";
import { CustomerService } from "./CustomerService";
import { Panel } from 'primereact/panel';

function SaveCustomer() {
    const [values, setValues] = useState({
        id: "",
        firstName: "",
        lastName: "",
        address: ""
    });
    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setValues({ ...values, [e.target.name]: value });
    }

    const RegisterCustomer = (e) => {
        e.preventDefault();
        new CustomerService().saveCustomer(values)
            .then((res) => {
                setMsg("Customer saved successfully!");
                setValues({
                    id: "",
                    firstName: "",
                    lastName: "",
                    address: ""
                });
            }).catch((error) => {
            setMsg("Error saving customer.");
            console.error(error);
        });
    };

    return (
        <Panel header="React Customer App - Save customers" style={{ width: '80%', marginTop: '100px', margin: '0 auto' }} className="Panel1" toggleable>
            <form onSubmit={(e) => RegisterCustomer(e)}>
                <label htmlFor="id">Customer ID</label>
                <input
                    name="id"
                    type="number"
                    onChange={(e) => handleChange(e)}
                    value={values.id}
                />
                <p></p>
                <label htmlFor="firstName">First Name</label>
                <input
                    name="firstName"
                    type="text"
                    onChange={(e) => handleChange(e)}
                    value={values.firstName}
                />
                <p></p>
                <label htmlFor="lastName">Last Name</label>
                <input
                    name="lastName"
                    type="text"
                    onChange={(e) => handleChange(e)}
                    value={values.lastName}
                />
                <p></p>
                <label htmlFor="address">Address</label>
                <input
                    name="address"
                    type="text"
                    onChange={(e) => handleChange(e)}
                    value={values.address}
                />
                <p></p>
                <button type="submit">Registrar</button>
            </form>
            {msg && <p>{msg}</p>}
        </Panel>
    );
}

export default SaveCustomer;