import * as React from 'react';
import { useStyles } from '../styles'
import { Backdrop, Box, Button, IconButton, Modal, Popover, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@material-ui/core'
import { TextField as MuiTextField } from '@material-ui/core';
import { useState } from 'react'
import { getKey } from '../utils'
import { GreenCheckbox } from './GreenCheckbox'
import { Delete, Edit, MoreVert } from '@material-ui/icons'
import AddIcon from '@material-ui/icons/Add';
import { useEffect } from 'react'
import PriceDetailForm from './PriceDetails'
import DeleteForm from './DeleteForm'
import EditPriceDetail from './EditPriceDetail'
import TextField from './TextField'
import InputSpacer from './InputSpace';

function createData(moq, customer_price, lead_time, cancellation) {
    return { moq, customer_price, lead_time, cancellation };
}
  
const rows = [
    createData(100, 5.0, 10, 5),
    createData(200, 4.5, 10, 5),
    createData(300, 4.0, 10, 5),
    createData(400, 3.5, 10, 5),
    createData(500, 3.0, 10, 5),
    createData(600, 2.5, 10, 5),
    createData(600, 2.5, 10, 5),
    createData(600, 2.5, 10, 5),
    createData(600, 2.5, 10, 5),
    createData(600, 2.5, 10, 5),
    createData(600, 2.5, 10, 5),
    createData(600, 2.5, 10, 5),
    createData(600, 2.5, 10, 5),
    createData(600, 2.5, 10, 5),
    createData(600, 2.5, 10, 5),
    createData(600, 2.5, 10, 5),
    createData(600, 2.5, 10, 5),
    createData(600, 2.5, 10, 5),
    createData(600, 2.5, 10, 5),
];

const LineItemForm = (props) => {
    const classes = useStyles()
    const { modal, closeModal, newItem, addLineItem, updateLineItem, type } = props
    const [all, setAll] = useState(false)
    const [priceDetailItems, setPriceDetailItems] = useState([])
    const [rowsPerPage ,setRowsPerPage] = useState(5)
    const [page, setPage] = useState(0)
    const [priceDetailOpen, setPriceDetailOpen] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [deletePd, setDeletePd] = useState({})
    const [editPd, setEditPd] = useState({})
    const [anchorEl, setAnchorEl] = useState(null)

    useEffect(() => {
        setPriceDetailItems(rows)
    }, []) 

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    const handleCheck = (key) => {
        let updatedItems = priceDetailItems.map((item, i) => {
            if (key === getKey(item))
                item.checked = !item.checked 
            return item; // Keep the existing item
        });
        setPriceDetailItems(updatedItems)
    }

    const closePriceDetail = () => {
        setPriceDetailOpen(false)
    }

    const addPD = () => {
        const newItem = {
            moq: 0,
            customer_price: 0,
            lead_time: 0,
            cancellation: 0,
        }
        for (let i = 0; i < priceDetailItems.length; i++) {
            let key = priceDetailItems[i].moq + "_" + priceDetailItems[i].customer_price + "_" + priceDetailItems[i].lead_time + "_" + priceDetailItems[i].cancellation
            if (key === "0_0_0_0") {
                alert("there is a new unfilled moq, please fill it up before creating another")
                return;
            }
        }
        setPriceDetailItems([...priceDetailItems, newItem])
    }

    const removePd = (item) => {
        const updated = priceDetailItems.filter((el) => el !== item)
        setPriceDetailItems(updated)
        setDeletePd({})
        setDeleteModal(false)
    }

    const updatePd = (item) => {
        const updated = priceDetailItems
        for (let i = 0; i < updated.length; i++) {
            if (updated[i] == editPd) {
                updated[i] = item
            }
        }
        setPriceDetailItems(updated)
        setEditPd({})
        setEditModal(false)
    }

    const add = () => {
        if (!newItem.line_number || !newItem.cpn || !newItem.mpn || !newItem.build_site ||
            !newItem.annual_usage || !newItem.business || !newItem.brand || !newItem.spn || !newItem.spq || 
            !newItem.packaging || priceDetailItems.length <= 0) {
            alert('ensure all fields are filled')
            return
        }
        newItem.price_details = priceDetailItems
        if (type == "create") {
            addLineItem()
        } else {
            updateLineItem()
        }
    }

    const handleMore = (e, row) => {
        setAnchorEl(e.currentTarget)
        setDeletePd(row)
        setEditPd(row)
    }

    const handleMoreClose = () => {
        setAnchorEl(null);
    }

    const closeDeletePd = () => {
        setDeleteModal({})
        setDeleteModal(!deleteModal)
    }

    const closeEditPd = () => {
        setEditPd({})
        setEditModal(!editModal)
    }

    const updateMOQ = (event, row, type) => {
        let id = row.moq + "_" + row.customer_price + "_" + row.lead_time + "_" + row.cancellation
        const updatedData = priceDetailItems.map((item) => {
            let itemId = item.moq + "_" + item.customer_price + "_" + item.lead_time + "_" + item.cancellation
            if (itemId === id) {
                if (type === "moq") {
                    return { ...item, moq: event.target.value };
                } else if (type === "customer_price") {
                    return { ...item, customer_price: event.target.value };
                } else if (type === 'lead_time') {
                    return { ...item, lead_time: event.target.value };
                } else if (type === 'cancellation') {
                    return { ...item, cancellation: event.target.value };
                }
            }
            return item;
        });
        setPriceDetailItems(updatedData);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - priceDetailItems.length) : 0;
    const displayedData = priceDetailItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    const moreOpen = Boolean(anchorEl)
    const moreId = moreOpen ? 'simple-popover' : undefined

    return (
        <>
            <Modal
                open={modal}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                BackdropComponent={Backdrop}
                BackdropProps={{
                    classes: {
                        root: classes.backdrop,
                    },
                }}
            >
                <Box className={classes.modal_container}>
                    <Typography className={classes.modal_header}>Line Item</Typography>
                    <div className={classes.modal_form}>
                        <div className={classes.modal_form_row}>
                            <TextField
                                value={newItem.line_number}
                                label="Line No."
                                handle={(e) => {newItem.line_number = e.target.value}}
                            />
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <TextField
                                    value={newItem.cpn}
                                    label="CPN"
                                    handle={(e) => {newItem.cpn = e.target.value}}
                                />
                                <InputSpacer/>
                                <TextField
                                    value={newItem.mpn}
                                    label="MPN"
                                    handle={(e) => {newItem.mpn = e.target.value}}
                                />
                            </div>
                            
                            <TextField
                                value={newItem.description}
                                label="Description"
                                handle={(e) => {newItem.description = e.target.value}}
                            />
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <TextField
                                    value={newItem.annual_usage}
                                    label="Annual Usage"
                                    handle={(e) => {newItem.annual_usage = e.target.value}}
                                />
                                <InputSpacer/>
                                <TextField
                                    value={newItem.project}
                                    label="Project"
                                    handle={(e) => {newItem.project = e.target.value}}
                                />
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <TextField
                                    value={newItem.build_site}
                                    label="Build Site"
                                    handle={(e) => {newItem.build_site = e.target.value}}
                                />
                                <InputSpacer/>
                                <TextField
                                    value={newItem.business}
                                    label="Business"
                                    handle={(e) => {newItem.business = e.target.value}}
                                />
                            </div>
                        </div>
                        <div style={{marginLeft: '10px'}} className={classes.modal_form_row}>
                            <TextField
                                value={newItem.supplier}
                                label="Supplier"
                                handle={(e) => {newItem.supplier = e.target.value}}
                            />
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <TextField
                                    value={newItem.brand}
                                    label="Brand"
                                    handle={(e) => {newItem.brand = e.target.value}}
                                />
                                <InputSpacer/>
                                <TextField
                                    value={newItem.spq}
                                    label="SPQ"
                                    handle={(e) => {newItem.spq = e.target.value}}
                                />
                            </div>
                            <TextField
                                value={newItem.packaging}
                                label="Packaging"
                                handle={(e) => {newItem.packaging = e.target.value}}
                            />
                            <TextField
                                value={newItem.target_price}
                                label="Target Price"
                                handle={(e) => {newItem.target_price = e.target.value}}
                            />
                            <TextField
                                value={newItem.updates}
                                label="Follow-up Updates"
                                handle={(e) => {newItem.updates = e.target.value}}
                            />
                        </div>
                    </div>
                    <div style={{marginTop: '1em'}}/>
                    <div>
                        <TableContainer component="div" className={classes.table_container}>
                            <Table className={`${classes.modal_table} ${all && classes.table_all_selected}`} size='small'>
                                <TableHead>
                                    <TableRow>
                                        {/* <TableCell>
                                            <GreenCheckbox
                                                checked={all}
                                                onChange={() => {setAll(!all)}}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                            />
                                        </TableCell> */}
                                        <TableCell className={classes.table_cell_header} align="left">MOQ</TableCell>
                                        <TableCell className={classes.table_cell_header} align="left">Customer Price</TableCell>
                                        <TableCell className={classes.table_cell_header} align="left">Lead Time (wks)</TableCell>
                                        <TableCell className={classes.table_cell_header} align="left">Cancellation (wks)</TableCell>
                                        <TableCell style={{width: '200px'}} className={classes.table_cell_header} align="right">
                                            <div className={classes.moq_modal_button_container}>
                                                <Button onClick={addPD} variant="contained" className={classes.moq_button} startIcon={<AddIcon style={{fontSize: '14px'}}/>}>MOQ</Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {displayedData.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            className={classes.table_row}
                                        >
                                            {/* <TableCell className={classes.table_cell} component="th" scope="row">
                                                <GreenCheckbox
                                                    checked={row.checked}
                                                    onChange={() => handleCheck(getKey(row))}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />
                                            </TableCell> */}
                                            {/* <TableCell className={classes.table_cell} align="left">{row.moq}</TableCell> */}
                                            <TableCell className={classes.table_cell} align="left">
                                                <MuiTextField variant='standard' 
                                                    fullWidth={true}
                                                    onChange={(e) => {updateMOQ(e, row, 'moq')}}
                                                    InputProps={{
                                                        className: classes.text_font,
                                                        classes: {
                                                            underline: classes.underline,
                                                            disabled: classes.disabled
                                                        }
                                                    }} value={row.moq}/>
                                            </TableCell>
                                            <TableCell className={classes.table_cell} align="left">
                                                <MuiTextField variant='standard'
                                                    onChange={(e) => {updateMOQ(e, row, 'customer_price')}} 
                                                    InputProps={{
                                                        className: classes.text_font,
                                                        classes: {
                                                            underline: classes.underline,
                                                            disabled: classes.disabled
                                                        }
                                                    }} value={row.customer_price}/>
                                            </TableCell>
                                            <TableCell className={classes.table_cell} align="left">
                                                <MuiTextField variant='standard' 
                                                    onChange={(e) => {updateMOQ(e, row, 'lead_time')}} 
                                                    InputProps={{
                                                        className: classes.text_font,
                                                        classes: {
                                                            underline: classes.underline,
                                                            disabled: classes.disabled
                                                        }
                                                    }} value={row.lead_time}/>
                                            </TableCell>
                                            <TableCell className={classes.table_cell} align="left">
                                                <MuiTextField variant='standard'
                                                    onChange={(e) => {updateMOQ(e, row, 'cancellation')}} 
                                                    InputProps={{
                                                        className: classes.text_font,
                                                        classes: {
                                                            underline: classes.underline,
                                                            disabled: classes.disabled
                                                        }
                                                    }} value={row.cancellation}/>
                                            </TableCell>
                                            <TableCell style={{width: '200px'}} className={`${classes.table_cell}`} align="right">
                                                <div className={classes.table_cell_icon_wrapper}>
                                                    <IconButton onClick={(e) => {handleMore(e, row)}} aria-label="edit" size="small" className={classes.more_vert}>
                                                        <MoreVert fontSize="inherit" />
                                                    </IconButton>
                                                    <Popover
                                                        id={moreId}
                                                        open={moreOpen}
                                                        anchorEl={anchorEl}
                                                        onClose={handleMoreClose}
                                                        className={classes.popover_container}
                                                        anchorOrigin={{
                                                            vertical: 'top',
                                                            horizontal: 'left',
                                                        }}
                                                        transformOrigin={{
                                                            vertical: 'top',
                                                            horizontal: 'right',
                                                        }}
                                                        >
                                                        <div className={classes.popover}>
                                                                <Button onClick={() => { 
                                                                    handleMoreClose()
                                                                    setDeleteModal(!deleteModal)
                                                                }} style={{color: '#ff5630'}} variant="text" className={classes.popover_button} startIcon={<Delete />}>
                                                                    <Typography className={classes.popover_text}>Delete</Typography>
                                                                </Button>
                                                        </div>
                                                    </Popover>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {emptyRows > 0 && (
                                        <TableRow
                                            style={{
                                                height: 50 * emptyRows,
                                            }}
                                        >
                                            <TableCell style={{border:'none'}} />
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={priceDetailItems.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </div>
                    <div className={classes.modal_button_container}>
                        <Button variant="outlined" onClick={closeModal} className={classes.edit_button}>Cancel</Button>
                        <Button variant="contained" onClick={() => {add(priceDetailItems)}} className={classes.button}>{type == "create" ? "Create" : "Update"} & Add</Button>
                    </div>
                </Box>
            </Modal>
            <PriceDetailForm open={priceDetailOpen} closeModal={closePriceDetail} addMoq={addPD} />
            <DeleteForm confirm={removePd} cancel={closeDeletePd} open={deleteModal} item={deletePd} name="MOQ"/>
            <EditPriceDetail save={updatePd} cancel={closeEditPd} open={editModal} item={editPd}/>
        </>
    )
}

export default LineItemForm