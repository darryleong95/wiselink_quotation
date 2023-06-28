import React, { useState } from 'react';
import { useStyles } from '../styles'
import { Box, Button, Modal, Typography } from '@material-ui/core'
import TextField from './TextField'

const PriceDetailForm = (props) => {
    const { open, closeModal, addMoq } = props
    const classes = useStyles()
    const [moq, setMoq] = useState({
        moq: 0,
        customer_price: 0,
        supplier_currency: "",
        supplier_price: 0,
        lead_time: 0,
        cancellation: 0,
    })

    const resetMoq = () => {
        setMoq({
            moq: 0,
            customer_price: 0,
            supplier_currency: "",
            supplier_price: 0,
            lead_time: 0,
            cancellation: 0,
        })
    }

    const add = () => {
        if (!moq.moq || !moq.customer_price || !moq.supplier_currency || !moq.supplier_price || !moq.lead_time || !moq.cancellation) {
            alert('ensure all fields are filled up')
            return
        }
        closeModal()
        addMoq(moq)
        resetMoq()
    }

    return (
        <Modal
            open={open}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={classes.edit_container}>
                <Typography className={`${classes.modal_header} ${classes.pd_modal_header}`}>Add MOQ</Typography>
                <div className={classes.edit_modal_form_row}>
                    <TextField
                        value={moq.moq}
                        label="MOQ"
                        handle={(e) => {moq.moq = e.target.value}}
                        type="number"
                    />
                    <TextField
                        value={moq.customer_price}
                        label="Customer price"
                        handle={(e) => {moq.customer_price = e.target.value}}
                        type="number"
                    />
                </div>
                <div className={classes.edit_modal_form_row}>
                    <TextField
                        value={moq.supplier_price}
                        label="Supplier price"
                        handle={(e) => {moq.supplier_price = e.target.value}}
                        type="number"
                    />
                    <TextField
                        value={moq.supplier_currency}
                        label="Supplier currency"
                        handle={(e) => {moq.supplier_currency = e.target.value}}
                        type="text"
                    />
                </div>
                <div className={classes.edit_modal_form_row}>
                    <TextField
                        value={moq.lead_time}
                        label="Lead Time (weeks)"
                        handle={(e) => {moq.lead_time = e.target.value}}
                        type="number"
                    />
                    <TextField
                        value={moq.cancellation}
                        label="Cancellation (weeks)"
                        handle={(e) => {moq.cancellation = e.target.value}}
                        type="number"
                    />
                </div>
                <div className={classes.moq_modal_button_container}>
                    <Button onClick={add} variant="contained" className={classes.edit_pd_button}>Add & Save</Button>
                    <Button onClick={closeModal} variant="outlined" className={`${classes.delete_pd_button} ${classes.cancel_pd_button}`}>Cancel</Button>
                </div>
            </Box>
        </Modal>
    )
}

export default PriceDetailForm