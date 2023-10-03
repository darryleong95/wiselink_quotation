import * as React from 'react';
import { useStyles } from '../styles'
import { Backdrop, Box, Button, Modal, Typography } from '@material-ui/core';

const DeleteForm = (props) => {
    const classes = useStyles()
    const {confirm, cancel, open, item, name} = props

    return (
        <Modal
            open={open}
            onClose={cancel}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            BackdropComponent={Backdrop}
            BackdropProps={{
                classes: {
                    root: classes.backdrop,
                },
            }}
        >
            <Box className={classes.edit_container}>
                <Typography className={`${classes.modal_header} ${classes.pd_modal_header}`}>Delete {name}?</Typography>
                <Typography className={`${classes.pd_modal_subtitle}`}>Are you sure you want to delete?</Typography>
                <div className={`${classes.moq_modal_button_container} ${classes.moq_modal_button_container_padding}`}>
                    <Button onClick={() => {confirm(item)}} variant="contained" className={`${classes.delete_pd_button} ${classes.confirm_pd_button}`}>Delete</Button>
                    <Button onClick={cancel} variant="outlined" className={`${classes.delete_pd_button} ${classes.cancel_pd_button}`}>Cancel</Button>
                </div>
            </Box>
        </Modal>
    )
}

export default DeleteForm