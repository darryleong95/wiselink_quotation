import React, { useState } from 'react';
import { useStyles } from '../styles'
import { FormControlLabel, Switch, TextField } from '@material-ui/core';
import BasicTable from '../components/QuotationTable';

const CreateQuotation = () => {
    const classes = useStyles()

    const [customer, setCustomer] = useState("")
    const [shipment, setAddress] = useState("")
    const [opportunity, setOpportunity] = useState("")
    const [project, setProject] = useState("")
    const [salesManager, setSalesManager] = useState("")
    const [salesChannelAddress, setSalesChannelAddress] = useState("")
    const [customerContact, setCustomerContact] = useState("")
    const [phone, setPhone] = useState("")
    const [paymentTerms, setPaymentTerms] = useState("")
    const [expiryDate, setExpiryDate] = useState("")

    // date
    const [number, setNumber] = useState("")
    const [date, setDate] = useState("")

    // currency
    const [currency, setCurrency] = useState("")
    const [totalAmount, setTotalAmount] = useState("")
    const [netAmount, setNetAmount] = useState("")
    const [vatAmount, setVatAmount] = useState("")
    const [vatSwitch, setVatSwitch] = useState(false)


    // notes
    const [notes, setNotes] = useState("")

    const handleChange = (e, type) => {
        if (type == 'customer')
            setCustomer(e.target.value)
        if (type == 'address')
            setAddress(e.target.value)
        if (type == 'opportunity')
            setOpportunity(e.target.value)
        if (type == 'project')
            setProject(e.target.value)
        if (type == 'sales_manager')
            setSalesManager(e.target.value)
        if (type == 'sales_channel_manager')
            setSalesChannelAddress(e.target.value)
        if (type == 'customer_contact')
            setCustomerContact(e.target.value)
        if (type == 'phone')
            setPhone(e.target.value)
        if (type == 'payment_terms')
            setPaymentTerms(e.target.value)
        if (type == 'expiry_date')
            setExpiryDate(e.target.value)
        if (type == 'number')
            setNumber(e.target.value)
        if (type == 'date')
            setDate(e.target.value)
        if (type == 'currency')
            setCurrency(e.target.value)
        if (type == 'total_amount')
            setTotalAmount(e.target.value)
        if (type == 'net_amount')
            setNetAmount(e.target.value)
        if (type == 'vat_amount')
            setVatAmount(e.target.value)
        if (type == 'vat_switch')
            setVatSwitch(!vatSwitch)
        if (type == 'notes')
            setNotes(e.target.value)
    }

    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <div className={classes.leftFormContainer}>
                    <div className={classes.customer}>
                        <div className={classes.individual_form}>
                            <TextField
                                className={classes.text_field}
                                required
                                label="Customer"
                                defaultValue={customer}
                                fullWidth={true}
                                variant='outlined'
                                InputProps={{
                                    className: classes.text_font,
                                }}
                                onChange={(e) => handleChange(e, 'customer')}
                            />
                            <TextField
                                className={classes.text_field}
                                required
                                label="Shipment Address"
                                defaultValue={shipment}
                                variant="outlined"
                                fullWidth={true}
                                InputProps={{
                                    className: classes.text_font,
                                }}
                                onChange={(e) => handleChange(e, 'address')}
                            />
                            <TextField
                                className={classes.text_field}
                                required
                                label="Opportunity"
                                defaultValue={opportunity}
                                variant="outlined"
                                fullWidth={true}
                                InputProps={{
                                    className: classes.text_font,
                                }}
                                onChange={(e) => handleChange(e, 'opportunity')}
                            />
                            <TextField
                                className={classes.text_field}
                                required
                                label="Project"
                                defaultValue={project}
                                variant="outlined"
                                fullWidth={true}
                                InputProps={{
                                    className: classes.text_font,
                                }}
                                onChange={(e) => handleChange(e, 'project')}
                            />
                        </div>
                    </div>
                    <div className={classes.sales}>
                        <div className={classes.individual_form}>
                            <TextField
                                className={classes.text_field}
                                required
                                label="Sales Manager"
                                defaultValue={salesManager}
                                fullWidth={true}
                                variant='outlined'
                                InputProps={{
                                    className: classes.text_font,
                                }}
                                onChange={(e) => handleChange(e, 'sales_manager')}
                            />
                            <TextField
                                className={classes.text_field}
                                required
                                label="Sales Channel Address"
                                defaultValue={salesChannelAddress}
                                variant="outlined"
                                fullWidth={true}
                                InputProps={{
                                    className: classes.text_font,
                                }}
                                onChange={(e) => handleChange(e, 'sales_channel_address')}
                            />
                            <TextField
                                className={classes.text_field}
                                required
                                label="Customer Contact"
                                defaultValue={customerContact}
                                variant="outlined"
                                fullWidth={true}
                                InputProps={{
                                    className: classes.text_font,
                                }}
                                onChange={(e) => handleChange(e, 'customer_contact')}
                            />
                            <TextField
                                className={classes.text_field}
                                required
                                label="Phone"
                                defaultValue={phone}
                                variant="outlined"
                                fullWidth={true}
                                InputProps={{
                                    className: classes.text_font,
                                }}
                                onChange={(e) => handleChange(e, 'phone')}
                            />
                        </div>
                    </div>
                    <div className={classes.payment}>
                        <div className={classes.individual_form}>
                            <TextField
                                className={classes.text_field}
                                required
                                label="Payment terms"
                                defaultValue={paymentTerms}
                                variant="outlined"
                                fullWidth={true}
                                InputProps={{
                                    className: classes.text_font,
                                }}
                                onChange={(e) => handleChange(e, 'payment_terms')}
                            />
                            <TextField
                                className={classes.text_field}
                                required
                                label="Expiry Date"
                                defaultValue={expiryDate}
                                variant="outlined"
                                fullWidth={true}
                                InputProps={{
                                    className: classes.text_font,
                                }}
                                onChange={(e) => handleChange(e, 'expiry_date')}
                            />
                        </div>
                    </div>
                </div>
                <div className={classes.lineItemContainer}>
                    <BasicTable/>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.vertical_form_container}>
                    <div className={classes.date}>
                        <div className={classes.date_form}>
                            <TextField
                                className={classes.text_field}
                                required
                                label="Number"
                                defaultValue={number}
                                variant="outlined"
                                fullWidth={true}
                                InputProps={{
                                    className: classes.text_font,
                                }}
                                onChange={(e) => handleChange(e, 'number')}
                            />
                            <TextField
                                className={classes.text_field}
                                required
                                label="Date"
                                defaultValue={date}
                                variant="outlined"
                                fullWidth={true}
                                InputProps={{
                                    className: classes.text_font,
                                }}
                                onChange={(e) => handleChange(e, 'date')}
                            />
                        </div>
                    </div>
                    <div className={classes.currency}>
                        <div className={classes.currency_form}>
                            <div className={classes.currency_form_1}>
                                <TextField
                                    className={classes.text_field}
                                    required
                                    label="Currency"
                                    defaultValue={currency}
                                    variant="outlined"
                                    fullWidth={true}
                                    InputProps={{
                                        className: classes.text_font,
                                    }}
                                    onChange={(e) => handleChange(e, 'currency')}
                                />
                                <TextField
                                    className={classes.text_field}
                                    required
                                    label="Total Amount"
                                    defaultValue={totalAmount}
                                    variant="outlined"
                                    fullWidth={true}
                                    InputProps={{
                                        className: classes.text_font,
                                    }}
                                    onChange={(e) => handleChange(e, 'total_amount')}
                                />
                            </div>
                            <div className={classes.currency_form_1}>
                                <TextField
                                    className={classes.text_field}
                                    required
                                    label="Net Amount"
                                    defaultValue={netAmount}
                                    variant="outlined"
                                    fullWidth={true}
                                    InputProps={{
                                        className: classes.text_font,
                                    }}
                                    onChange={(e) => handleChange(e, 'net_amount')}
                                />
                                <TextField
                                    className={classes.text_field}
                                    required
                                    label="Vat Amount"
                                    defaultValue={vatAmount}
                                    variant="outlined"
                                    fullWidth={true}
                                    InputProps={{
                                        className: classes.text_font,
                                    }}
                                    onChange={(e) => handleChange(e, 'vat_amount')}
                                />
                            </div>
                            <div className={classes.currency_form_1}>
                                <FormControlLabel
                                    control={
                                        <Switch checked={vatSwitch} name="VAT Switch" className={classes.text_font}/>
                                    }
                                    label="price includes VAT"
                                    className={classes.vat_switch}
                                    onChange={(e) => handleChange(e, 'vat_switch')}
                                />
                            </div>
                        </div>
                    </div>
                    {/* <div className={classes.vat}>
                    </div> */}
                    <div className={classes.extra}>
                        <div className={classes.currency_form}>
                            <TextField
                                className={classes.text_field}
                                label="Note"
                                defaultValue={notes}
                                variant="outlined"
                                fullWidth={true}
                                InputProps={{
                                    className: classes.text_font,
                                }}
                                multiline
                                minRows={4}
                                onChange={(e) => handleChange(e, 'notes')}
                            />
                            {/* <TextField
                                className={classes.text_field}
                                required
                                label="Expiry Date"
                                defaultValue=""
                                variant="outlined"
                                fullWidth={true}
                                InputProps={{
                                    className: classes.text_font,
                                }}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CreateQuotation;