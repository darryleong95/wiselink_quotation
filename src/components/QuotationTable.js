import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Checkbox, withStyles, Modal, Box, Typography, TextField, TablePagination, IconButton, Popover } from '@material-ui/core'
import { useStyles } from '../styles'
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import LineItemForm from './LineItemForm';
import { getKey } from '../utils';
import { GreenCheckbox } from './GreenCheckbox';
import DeleteForm from './DeleteForm';
import CustomRow from './CustomRow';

function createData(checked, line_number, cpn, mpn, description, annual_usage, project, build_site, business, supplier, brand, spq, packaging, target_price, updates) {
  return { checked, line_number, cpn, mpn, description, annual_usage, project, build_site, business, supplier, brand, spq, packaging, target_price, updates };
}

const rows = [
  createData(false, '100', 'CPN100', 'MPN100', 'random description', 1000, 'project#1', 'site#1', 'business#1', 'supplier#1', 'brand#1', 'SPQ#1', 'PKG#1', 10.000, '-'),
  createData(false, '200', 'CPN200', 'MPN200', 'random description', 2000, 'project#2','site#2', 'business#2', 'supplier#2', 'brand#2', 'SPQ#2', 'PKG#2', 10.000, '-'),
  createData(false, '300', 'CPN300', 'MPN300', 'random description', 3000, 'project#3','site#3', 'business#3', 'supplier#3', 'brand#3', 'SPQ#3', 'PKG#3', 10.000, '-'),
  createData(false, '400', 'CPN400', 'MPN400', 'random description', 4000, 'project#4','site#4', 'business#4', 'supplier#4', 'brand#4', 'SPQ#4', 'PKG#4', 10.000, '-'),
  createData(false, '500', 'CPN500', 'MPN500', 'random description', 5000, 'project#5','site#5', 'business#5', 'supplier#5', 'brand#5', 'SPQ#5', 'PKG#5', 10.000, '-'),
  createData(false, '600', 'CPN600', 'MPN600', 'random description', 6000, 'project#6','site#6', 'business#6', 'supplier#6', 'brand#6', 'SPQ#6', 'PKG#6', 10.000, '-')
];

export default function BasicTable() {

    const classes = useStyles()
    /**
     * [
     *      {
     *          info...
     *          price_details: [
     *              {...}, {...}
     *          ]
     *      }
     * ]
     */
    const [lineItems, setLineItems] = useState(rows)
    const [modal, setModal] = useState(false)
    const [all, setAll] = useState(false)
    const [newItem, setNewItem] = useState({
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
    const [rowsPerPage ,setRowsPerPage] = useState(5)
    const [page, setPage] = useState(0)
    const [deleteLineItem, setDeleteLineItem] = useState({})
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [editPd, setEditPd] = useState({})
    const [anchorEl, setAnchorEl] = useState(null)
    const [selectLineItem, setSelectLineItem] = useState({})
    const [type, setType] = useState("")

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    const getSelectedCount = () => {
        let i = 0
        lineItems.map((item, j) => {
            if (item.checked) {
                i+=1
            }
        })
        console.log(i)
        return i
    }

    const resetNewItem = () => {
        setNewItem({
            cpn: '',
            mpn: '',
            description: '',
            build_site: '',
            annual_usage: '',
            line_number: '',
            business: '',
            brand: '',
            spn: '',
            packaging: '',
            updates: '',
            target_price: '',
            supplier: '',
            price_details: []
        })
    }

    const closeModal = () => {
        resetNewItem()
        setModal(false)
    }

    const addLineItem = () => {
        setLineItems([...lineItems, newItem])
        closeModal()
    }

    const updateLineItem = (item) => {
        const updated = lineItems
        for (let i = 0; i < updated.length; i++) {
            if (updated[i] == editPd) {
                updated[i] = item
            }
        }
        setLineItems(updated)
        closeModal()
    }

    const closeDeleteLineItem = () => {
        setDeleteModal({})
        setDeleteModal(!deleteModal)
    }

    const removeLineItem = (item) => {
        const updated = lineItems.filter((el) => el !== item)
        setLineItems(updated)
        setSelectLineItem({})
        setDeleteModal(false)
    }

    const handleCheck = (key) => {
        let updatedItems = lineItems.map((item, i) => {
            if (key === getKey(item))
                item.checked = !item.checked 
            return item; // Keep the existing item
        });
        setLineItems(updatedItems)
    }

    const handleMore = (e, row) => {
        setAnchorEl(e.currentTarget)
        setSelectLineItem(row)
        setNewItem(row)
    }

    const handleMoreClose = () => {
        setAnchorEl(null);
    }

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - lineItems.length) : 0
    const displayedData = lineItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    const moreOpen = Boolean(anchorEl)
    const moreId = moreOpen ? 'simple-popover' : undefined

    return (
        <>
            <div className={classes.button_container}>
                <Button onClick={() => {
                    setType("create")
                    setModal(!modal)
                }} variant="contained" className={classes.button} startIcon={<AddIcon style={{ fontSize: '14px' }} />}>Line Item</Button>
            </div>
            <TableContainer component={Paper} className={classes.table_container}>
                <Table aria-label="simple table" className={`${classes.table}`} size='small'>
                    <TableHead>
                        <TableRow className={classes.table_row_header}>
                            {/* <TableCell>
                                <GreenCheckbox
                                    checked={all}
                                    onChange={() => {setAll(!all)}}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </TableCell> */}
                            {
                                !all ? (
                                    <>
                                        <TableCell align="center">Line no.</TableCell>
                                        <TableCell align="center">CPN</TableCell>
                                        <TableCell align="center">MPN</TableCell>
                                        <TableCell align="center">Description</TableCell>
                                        <TableCell align="center">Usage</TableCell>
                                        <TableCell align="center">Build Site</TableCell>
                                        <TableCell align="center">Business</TableCell>
                                        <TableCell align="center">Supplier</TableCell>
                                        <TableCell align="center">Brand</TableCell>
                                        <TableCell align="center">SPQ</TableCell>
                                        <TableCell align="center">Packaging</TableCell>
                                        <TableCell align="center">Target Price</TableCell>
                                        <TableCell align="center">Update</TableCell>
                                    </>
                                ): 
                                ( 
                                    <>
                                        <TableCell/>
                                        <TableCell/>
                                        <TableCell/>
                                        <TableCell/>
                                        <TableCell/>
                                        <TableCell/>
                                        <TableCell/>
                                        <TableCell/>
                                        <TableCell/>
                                        <TableCell/>
                                        <TableCell/>
                                        <TableCell/>
                                        <TableCell/>
                                    </>
                                )
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {displayedData.map((row, index) => (
                            <CustomRow key={index} k={index} value={row} handleCheck={handleCheck} popoverId={moreId} popoverStatus={moreOpen} popoverOpen={handleMore} popoverClose={handleMoreClose} anchor={anchorEl} setDeleteModal={setDeleteModal} setModal={setModal} setType={setType}/>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 55.5 * emptyRows }}>
                                <TableCell style={{ border: 'none' }} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={lineItems.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <LineItemForm modal={modal} closeModal={closeModal} newItem={newItem} addLineItem={addLineItem} updateLineItem={updateLineItem} type={type}/>
            <DeleteForm confirm={removeLineItem} cancel={closeDeleteLineItem} open={deleteModal} item={selectLineItem} name="Line item"/>
        </>
    );
}