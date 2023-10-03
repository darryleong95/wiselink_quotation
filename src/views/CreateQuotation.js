import React, { useEffect, useState } from 'react';
import { useStyles } from '../styles'
import { Backdrop, Box, Button, FormControlLabel, Modal, Switch, Typography, TextField as NativeTextField } from '@material-ui/core';
import TextField from '../components/TextField'
import BasicTable from '../components/QuotationTable';
import QuotationContext from '../components/QuotationContext';

function createData(checked, line_number, cpn, mpn, description, annual_usage, project, build_site, business, supplier, brand, spq, packaging, target_price, updates) {
    return { checked, line_number, cpn, mpn, description, annual_usage, project, build_site, business, supplier, brand, spq, packaging, target_price, updates };
}

function createPriceData(moq, customer_price, lead_time, cancellation) {
    return { moq, customer_price, lead_time, cancellation };
}
  
const rows = [
    createData(false, '100', 'CPN100', 'MPN100', 'random description', 1000, 'project#1', 'site#1', 'business#1', 'supplier#1', 'brand#1', 'SPQ#1', 'PKG#1', 10.000, '-'),
    createData(false, '200', 'CPN200', 'MPN200', 'random description', 2000, 'project#2','site#2', 'business#2', 'supplier#2', 'brand#2', 'SPQ#2', 'PKG#2', 10.000, '-'),
    createData(false, '300', 'CPN300', 'MPN300', 'random description', 3000, 'project#3','site#3', 'business#3', 'supplier#3', 'brand#3', 'SPQ#3', 'PKG#3', 10.000, '-'),
    createData(false, '400', 'CPN400', 'MPN400', 'random description', 4000, 'project#4','site#4', 'business#4', 'supplier#4', 'brand#4', 'SPQ#4', 'PKG#4', 10.000, '-'),
    createData(false, '500', 'CPN500', 'MPN500', 'random description', 5000, 'project#5','site#5', 'business#5', 'supplier#5', 'brand#5', 'SPQ#5', 'PKG#5', 10.000, '-'),
    createData(false, '600', 'CPN600', 'MPN600', 'random description', 6000, 'project#6','site#6', 'business#6', 'supplier#6', 'brand#6', 'SPQ#6', 'PKG#6', 10.000, '-')
];

const qq = {
    number: "100",
    customer: "Phoenix",
    attention: "Attention",
    reference: "XX00XXYY",
    status: "DONE",
    phone: "91919177",
    extension: "+65",
    fax: "62855162",
    date: "10/07/23",
    sales_manager: "MRS LIM",
    currency: "SGD",
    payment: "10000",
    shipment: "10000",
    validity: "yes"
}

const stub = {
    line_number: '100',
    cpn: '100-CPN',
    mpn: '100-MPN',
    description: 'Random descriptor',
    annual_usage: '1000',
    project: 'Project Varitos',
    build_site: 'Singapore',
    business: 'Vietnam',
    supplier: 'BNParibas',
    brand: 'Nike',
    spq: '10000',
    packaging: 'Parcel',
    target_price: '10.00',
    updates: 'new item, no updates',
    price_details: [
        createPriceData(100, 5.0, 10, 5),
        createPriceData(200, 4.5, 10, 5),
        createPriceData(300, 4.0, 10, 5),
        createPriceData(400, 3.5, 10, 5),
        createPriceData(500, 3.0, 10, 5),
        createPriceData(600, 2.5, 10, 5),
    ]
}

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

    const [quotation, setQuotation] = useState({
        number: "",
        customer: "",
        attention: "",
        reference: "",
        status: "",
        phone: "",
        extension: "",
        fax: "",
        date: "",
        sales_manager: "",
        currency: "",
        payment: "",
        shipment: "",
        validity: "",
    })
    
    // amounts
    const [totalAmount, setTotalAmount] = useState("")
    const [netAmount, setNetAmount] = useState("")
    const [vatAmount, setVatAmount] = useState("")

    // retrieve
    const [retrieve, setRetrieve] = useState(false)
    const [search, setSearch] = useState("")

    // item information
    const [item, setItem] = useState({
        line_number: '',
        cpn: '',
        mpn: '',
        description: '',
        annual_usage: '',
        project: '',
        build_site: '',
        business: '',
        supplier: '',
        brand: '',
        spq: '',
        packaging: '',
        target_price: '',
        updates: '',
        price_details: []
    })

    useEffect(() => {
        console.log(quotation)
    }, [quotation])

    const handleChange = (e, _) => {
        const { name, value } = e.target
        setQuotation((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const updateRetrieve = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = () => {
        setQuotation(qq)
        setRetrieve(false)
        setSearch("")
    }

    const handleCreate = () => {

    }

    return (
        <div className={classes.wrapper}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography className={classes.header}>Create</Typography>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Button onClick={() => {setRetrieve(true)}} className={classes.retrieve}>Retrieve</Button>
                    <Button onClick={handleCreate} className={classes.create}>Create</Button>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.form_container}>
                    <div className={classes.customer}>
                        <div className={classes.individual_form}>
                            <div style={{display:'flex'}}>
                                {quotation.number && 
                                <TextField
                                    value={quotation.number}
                                    label="No."
                                    name="line_number"
                                    handle={handleChange}
                                    key={quotation.number}
                                />}
                            </div>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                {quotation.customer && 
                                <TextField
                                    value={quotation.customer}
                                    label="Customer"
                                    name="customer"
                                    handle={handleChange}
                                    key={quotation.customer}
                                />}
                            </div>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                {quotation.attention && 
                                <TextField
                                    value={quotation.attention}
                                    label="Attention"
                                    name="attention"
                                    handle={handleChange}
                                    flexSize={2}
                                    key={quotation.attention}
                                />}
                                {quotation.phone && 
                                <TextField
                                    value={quotation.phone}
                                    label="Phone"
                                    name="phone"
                                    handle={handleChange}
                                    flexSize={1}
                                    key={quotation.phone}
                                />}
                            </div>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                {quotation.reference &&
                                <TextField
                                    value={quotation.reference}
                                    label="Reference"
                                    name="reference"
                                    handle={handleChange}
                                    flexSize={2}
                                    key={quotation.reference}
                                />}
                                {quotation.extension &&
                                <TextField
                                    value={quotation.extension}
                                    label="Ext"
                                    name="extension"
                                    handle={handleChange}
                                    flexSize={1}
                                    key={quotation.extension}
                                />}
                            </div>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                {quotation.status &&
                                <TextField
                                    value={quotation.status}
                                    label="Status"
                                    name="status"
                                    handle={handleChange}
                                    flexSize={2}
                                    key={quotation.status}
                                />}
                                {quotation.fax &&
                                <TextField
                                    value={quotation.fax}
                                    label="Fax"
                                    name="fax"
                                    handle={handleChange}
                                    flexSize={1}
                                    key={quotation.fax}
                                />}
                            </div>
                        </div>
                    </div>
                    <div className={classes.sales}>
                        <div className={classes.individual_form}>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                {quotation.date &&
                                <TextField
                                    value={quotation.date}
                                    label="Date"
                                    name="date"
                                    handle={handleChange}
                                    key={quotation.date}
                                />}
                            </div>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                {quotation.sales_manager &&
                                <TextField
                                    value={quotation.sales_manager}
                                    label="Sales Person"
                                    name="sales_manager"
                                    handle={handleChange}
                                    key={quotation.sales_manager}
                                />}
                            </div>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                {quotation.currency &&
                                <TextField
                                    value={quotation.currency}
                                    label="Currency"
                                    name="currency"
                                    handle={handleChange}
                                    key={quotation.currency}
                                />}
                            </div>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                {quotation.shipment &&
                                <TextField
                                    value={quotation.shipment}
                                    label="Shipment Terms"
                                    name="shipment"
                                    handle={handleChange}
                                    key={quotation.shipment}
                                />}
                                <div style={{paddingLeft: '5px'}}/>
                                {quotation.payment &&
                                <TextField
                                    value={quotation.payment}
                                    label="Payment Terms"
                                    name="payment"
                                    handle={handleChange}
                                    key={quotation.payment}
                                />}
                            </div>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                {quotation.validity &&
                                <TextField
                                    value={quotation.validity}
                                    label="Validity"
                                    name="validity"
                                    handle={handleChange}
                                    key={quotation.validity}
                                />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.table_wrapper}>
                    <BasicTable item={item} populateItem={setItem}/>
                </div>
            </div>
            <Modal
                open={retrieve}
                onClose={() => {
                    setRetrieve(false)
                    setSearch("")
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    classes: {
                        root: classes.backdrop,
                    },
                }}
            >
                <Box className={classes.edit_container}>
                    <Typography className={`${classes.modal_header} ${classes.pd_modal_header}`}>Quotation number</Typography>
                    <Typography className={`${classes.pd_modal_subtitle}`}>existing information will be replaced</Typography>
                    <div style={{marginTop: '20px'}}/>
                    <div className={`${classes.moq_modal_button_container} ${classes.moq_modal_button_container_padding}`}>
                        <NativeTextField variant={"outlined"} fullWidth={true} value={search} onChange={(e) => {updateRetrieve(e)}} />
                    </div>
                    <div style={{marginTop: '20px'}}/>
                    <div className={`${classes.moq_modal_button_container} ${classes.moq_modal_button_container_padding}`}>
                        <Button onClick={handleSearch} variant="contained" className={`${classes.delete_pd_button} ${classes.green_pd_button}`}>Search</Button>
                        <Button onClick={() => {
                            setRetrieve(false)
                            setSearch("")
                        }} 
                        variant="outlined" className={`${classes.delete_pd_button} ${classes.cancel_pd_button}`}>Cancel</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}


export default CreateQuotation;