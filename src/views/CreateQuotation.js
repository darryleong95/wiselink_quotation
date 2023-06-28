import React, { useState } from 'react';
import { useStyles } from '../styles'
import { FormControlLabel, Switch, Typography } from '@material-ui/core';
import TextField from '../components/TextField'
import BasicTable from '../components/QuotationTable';

const CreateQuotation = () => {
    const classes = useStyles()

    const [number, setNumber] = useState("")
    const [customer, setCustomer] = useState("")
    const [attention, setAttention] = useState("")
    const [reference, setReference] = useState("")
    const [status, setStatus] = useState("")

    const [phone, setPhone] = useState("")
    const [extension, setExtension] = useState("")
    const [fax, setFax] = useState("")

    const [date, setDate] = useState("")
    const [salesManager, setSalesManager] = useState("")
    const [currency, setCurrency] = useState("")
    const [payment, setPayment] = useState("")
    const [shipment, setShipment] = useState("")
    const [validity, setValidity] = useState("")
    
    // amounts
    const [totalAmount, setTotalAmount] = useState("")
    const [netAmount, setNetAmount] = useState("")
    const [vatAmount, setVatAmount] = useState("")

    const handleChange = (e, type) => {
        if (type == 'No.')
            setNumber(e.target.value)
        if (type == 'Customer')
            setCustomer(e.target.value)
        if (type == 'Attention')
            setAttention(e.target.value)
        if (type == 'Reference')
            setReference(e.target.value)
        if (type == 'Status')
            setStatus(e.target.value)     
        // contacts
        if (type == 'Phone')
            setPhone(e.target.value)
        if (type == 'Extension')
            setExtension(e.target.value) 
        if (type == 'Fax')
            setFax(e.target.value) 
        // right half form
        if (type == 'Date')
            setDate(e.target.value)
        if (type == 'Sales Manager')
            setSalesManager(e.target.value) 
        if (type == 'Currency')
            setCurrency(e.target.value)
        if (type == 'Payment Terms')
            setPayment(e.target.value)
        if (type == 'Shipment Terms')
            setShipment(e.target.value)
        if (type == "Validity")
            setValidity(e.target.value)
        // amounts
        if (type == 'Total Amount')
            setTotalAmount(e.target.value)
        if (type == 'Net Amount')
            setNetAmount(e.target.value)
        if (type == 'Vat Amount')
            setVatAmount(e.target.value)
    }

    return (
        <div className={classes.wrapper}>
            <div>
                <Typography className={classes.header}>Create</Typography>
            </div>
            <div className={classes.container}>
                <div className={classes.form_container}>
                    <div className={classes.customer}>
                        <div className={classes.individual_form}>
                            <div style={{display:'flex'}}>
                                <TextField
                                    value={number}
                                    label="No."
                                    handle={handleChange}
                                />
                            </div>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                <TextField
                                    value={customer}
                                    label="Customer"
                                    handle={handleChange}
                                />
                            </div>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                <TextField
                                    value={attention}
                                    label="Attention"
                                    handle={handleChange}
                                    flexSize={2}
                                />
                                <TextField
                                    value={phone}
                                    label="Phone"
                                    handle={handleChange}
                                    flexSize={1}
                                />
                            </div>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                <TextField
                                    value={reference}
                                    label="Reference"
                                    handle={handleChange}
                                    flexSize={2}
                                />
                                <TextField
                                    value={extension}
                                    label="Ext"
                                    handle={handleChange}
                                    flexSize={1}
                                />
                            </div>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                <TextField
                                    value={status}
                                    label="Status"
                                    handle={handleChange}
                                    flexSize={2}
                                />
                                <TextField
                                    value={fax}
                                    label="Fax"
                                    handle={handleChange}
                                    flexSize={1}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={classes.sales}>
                        <div className={classes.individual_form}>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                <TextField
                                    value={date}
                                    label="Date"
                                    handle={handleChange}
                                />
                            </div>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                <TextField
                                    value={salesManager}
                                    label="Sales Person"
                                    handle={handleChange}
                                />
                            </div>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                <TextField
                                    value={currency}
                                    label="Currency"
                                    handle={handleChange}
                                />
                            </div>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                <TextField
                                    value={shipment}
                                    label="Shipment Terms"
                                    handle={handleChange}
                                />
                                <div style={{paddingLeft: '5px'}}/>
                                <TextField
                                    value={payment}
                                    label="Payment Terms"
                                    handle={handleChange}
                                />
                            </div>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                <TextField
                                    value={validity}
                                    label="Validity"
                                    handle={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.table_wrapper}>
                    <BasicTable/>
                </div>
            </div>
        </div>
    );
}


export default CreateQuotation;