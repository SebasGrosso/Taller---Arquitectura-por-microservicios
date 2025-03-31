import "primeicons/primeicons.css";
import 'primereact/resources/themes/saga-blue/theme.css';
import React from 'react';
import 'primeflex/primeflex.css';
import Navigation from './Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import Home from './Home';
import AllCustomers from "./AllCustomers";
import SaveCustomer from "./SaveCustomer";
import DeleteCustomer from "./DeleteCustomer";
import FindCustomer from "./FindCustomer";

export default function Menu() {
    return (
        <div className="App">
            <Navigation />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/allcustomers' element={<AllCustomers />} />
                    <Route path='/savecustomer' element={<SaveCustomer />} />
                    <Route path='/deletecustomer' element={<DeleteCustomer />} />
                    <Route path='/findcustomer' element={<FindCustomer />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}