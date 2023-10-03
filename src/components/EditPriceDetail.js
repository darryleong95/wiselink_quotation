import React, { useEffect, useState } from 'react';
import { useStyles } from '../styles'
import { Box, Button, Modal, Typography } from '@material-ui/core';
import TextField from './TextField'
import InputSpacer from './InputSpace';

const EditDetailForm = (props) => {
    const { save, cancel, open, item } = props
    const classes = useStyles()
    const [update, setUpdate] = useState({})

    useEffect(() => {
        setUpdate(item)
    }, [item]) 

    const savePd = () => {
        if (!update.moq || !update.customer_price || !update.lead_time || !update.cancellation) {
            alert('ensure all fields are filled up')
            return
        }
        save(update)
        setUpdate({})
    }

    const close = () => {
        setUpdate({})
        cancel()
    }

    return (
        <Modal
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={classes.edit_container}>
                <Typography className={`${classes.modal_header} ${classes.pd_modal_header}`}>Edit</Typography>
                <div className={classes.edit_modal_form_row}>
                    <TextField
                        value={update.moq}
                        label="MOQ"
                        handle={(e) => {update.moq = e.target.value}}
                        type="number"
                    />
                    <InputSpacer/>
                    <TextField
                        value={update.customer_price}
                        label="Customer Price"
                        handle={(e) => {update.customer_price = e.target.value}}
                        type="number"
                    />
                </div>
                <div className={classes.edit_modal_form_row}>
                    <TextField
                        value={update.lead_time}
                        label="Lead Time (weeks)"
                        handle={(e) => {update.lead_time = e.target.value}}
                        type="number"
                    />
                    <InputSpacer/>
                    <TextField
                        value={update.cancellation}
                        label="Cancellation (weeks)"
                        handle={(e) => {update.cancellation = e.target.value}}
                        type="number"
                    />
                </div>
                <div className={`${classes.moq_modal_button_container} ${classes.moq_modal_button_container_padding}`}>
                    <Button onClick={() => {savePd(update)}} variant="contained" className={classes.edit_pd_button}>Update & Save</Button>
                    <Button onClick={close} variant="outlined" className={`${classes.delete_pd_button} ${classes.cancel_pd_button}`}>Cancel</Button>
                </div>
            </Box>
        </Modal>
    )
}

export default EditDetailForm