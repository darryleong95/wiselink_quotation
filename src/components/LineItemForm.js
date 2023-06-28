import * as React from 'react';
import { useStyles } from '../styles'
import { Backdrop, Box, Button, IconButton, Modal, Popover, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@material-ui/core'
import { useState } from 'react'
import { getKey } from '../utils'
import { GreenCheckbox } from './GreenCheckbox'
import { Delete, Edit, MoreVert } from '@material-ui/icons'
import { useEffect } from 'react'
import PriceDetailForm from './PriceDetails'
import DeleteForm from './DeleteForm'
import EditPriceDetail from './EditPriceDetail'
import TextField from './TextField'

function createData(moq, customer_price, supplier_currency, supplier_price, lead_time, cancellation) {
    return { moq, customer_price, supplier_currency, supplier_price, lead_time, cancellation };
}
  
const rows = [
    createData(100, 5.0, "SGD", 4.0, 10, 5),
    createData(200, 4.5, "SGD", 4.0, 10, 5),
    createData(300, 4.0, "SGD", 4.0, 10, 5),
    createData(400, 3.5, "SGD", 4.0, 10, 5),
    createData(500, 3.0, "SGD", 4.0, 10, 5),
    createData(600, 2.5, "SGD", 4.0, 10, 5),
];

const LineItemForm = (props) => {
    const classes = useStyles()
    const { modal, closeModal, newItem, addLineItem, updateLineItem, type } = props
    const [all, setAll] = useState(false)
    const [priceDetailItems, setPriceDetailItems] = useState([])
    const [rowsPerPage ,setRowsPerPage] = useState(5)
    const [page, setPage] = useState(1)
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

    const addPD = (item) => {
        setPriceDetailItems([...priceDetailItems, item])
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
                    <Typography className={classes.modal_subtext}>ensure all fields marked with * are filled</Typography>
                    <div className={classes.modal_form_row}>
                        <TextField
                            value={newItem.line_number}
                            label="Line No."
                            handle={(e) => {newItem.line_number = e.target.value}}
                        />
                        <TextField
                            value={newItem.cpn}
                            label="CPN"
                            handle={(e) => {newItem.cpn = e.target.value}}
                        />
                        <TextField
                            value={newItem.mpn}
                            label="MPN"
                            handle={(e) => {newItem.mpn = e.target.value}}
                        />
                    </div>
                    <div className={classes.modal_form_row}>
                        <TextField
                            value={newItem.annual_usage}
                            label="Annual Usage"
                            handle={(e) => {newItem.annual_usage = e.target.value}}
                        />
                        <TextField
                            value={newItem.build_site}
                            label="Build Site"
                            handle={(e) => {newItem.build_site = e.target.value}}
                        />
                        <TextField
                            value={newItem.business}
                            label="Business"
                            handle={(e) => {newItem.business = e.target.value}}
                        />
                    </div>
                    <div className={classes.modal_form_row}>
                        <TextField
                            value={newItem.brand}
                            label="Brand"
                            handle={(e) => {newItem.brand = e.target.value}}
                        />
                        <TextField
                            value={newItem.spn}
                            label="SPN"
                            handle={(e) => {newItem.spn = e.target.value}}
                        />
                        <TextField
                            value={newItem.spq}
                            label="SPQ"
                            handle={(e) => {newItem.spq = e.target.value}}
                        />
                        <TextField
                            value={newItem.packaging}
                            label="Packaging"
                            handle={(e) => {newItem.packaging = e.target.value}}
                        />
                    </div>
                    <div className={classes.modal_form_row}>
                        <TextField
                            value={newItem.description}
                            label="Description"
                            handle={(e) => {newItem.description = e.target.value}}
                        />
                    </div>
                    <div className={classes.moq_modal_button_container}>
                        <Button onClick={() => setPriceDetailOpen(!priceDetailOpen)} variant="contained" className={classes.moq_button}>Add MOQ</Button>
                    </div>
                    <div>
                        <TableContainer component="div" className={classes.table_container}>
                            <Table className={`${classes.modal_table} ${all && classes.table_all_selected}`} size='small'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <GreenCheckbox
                                                checked={all}
                                                onChange={() => {setAll(!all)}}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                            />
                                        </TableCell>
                                        <TableCell className={classes.table_cell_header} align="left">MOQ</TableCell>
                                        <TableCell className={classes.table_cell_header} align="right">Customer Price</TableCell>
                                        <TableCell className={classes.table_cell_header} align="right">Supplier Currency</TableCell>
                                        <TableCell className={classes.table_cell_header} align="right">Supplier Price</TableCell>
                                        <TableCell className={classes.table_cell_header} align="right">Lead Time (wks)</TableCell>
                                        <TableCell className={classes.table_cell_header} align="right">Cancellation (wks)</TableCell>
                                        <TableCell style={{width: '200px'}} className={classes.table_cell_header} align="right"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {displayedData.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            className={classes.table_row}
                                        >
                                            <TableCell className={classes.table_cell} component="th" scope="row">
                                                <GreenCheckbox
                                                    checked={row.checked}
                                                    onChange={() => handleCheck(getKey(row))}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />
                                            </TableCell>
                                            <TableCell className={classes.table_cell} align="left">{row.moq}</TableCell>
                                            <TableCell className={classes.table_cell} align="right">{row.customer_price}</TableCell>
                                            <TableCell className={classes.table_cell} align="right">{row.supplier_currency}</TableCell>
                                            <TableCell className={classes.table_cell} align="right">{row.supplier_price}</TableCell>
                                            <TableCell className={classes.table_cell} align="right">{row.lead_time}</TableCell>
                                            <TableCell className={classes.table_cell} align="right">{row.cancellation}</TableCell>
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
                                                                    setEditModal(!editModal)
                                                                }} variant="text" className={classes.popover_button} startIcon={<Edit />}>
                                                                    <Typography className={classes.popover_text}>Edit</Typography>
                                                                </Button>
                                                                <div className={classes.popover_divider} /> 
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
                                                height: 53.500 * emptyRows,
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