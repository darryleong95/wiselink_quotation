import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Checkbox, withStyles, Modal, Box, Typography, TextField, TablePagination } from '@material-ui/core'
import { useStyles } from '../styles'
import AddIcon from '@material-ui/icons/Add';
import { DeleteOutline, Edit } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
function createData(checked, line_number, cpn, mpn, description, annual_usage, build_site, business, brand, spn, spq, packaging) {
  return { checked, line_number, cpn, mpn, description, annual_usage, build_site, business, brand, spn, spq, packaging };
}

const rows = [
  createData(false, '100', 'CPN100', 'MPN100', 'random description', 1000, 'site#1', 'business#1', 'brand#1', 'SPN#1', 'SPN#1', 'PKG#1'),
  createData(false, '200', 'CPN200', 'MPN200', 'random description', 2000, 'site#2', 'business#2', 'brand#2', 'SPN#2', 'SPQ#2', 'PKG#2'),
  createData(false, '300', 'CPN300', 'MPN300', 'random description', 3000, 'site#3', 'business#3', 'brand#3', 'SPN#3', 'SPQ#3', 'PKG#3'),
  createData(false, '400', 'CPN400', 'MPN400', 'random description', 4000, 'site#4', 'business#4', 'brand#4', 'SPN#4', 'SPQ#4', 'PKG#4'),
  createData(false, '500', 'CPN500', 'MPN500', 'random description', 5000, 'site#5', 'business#5', 'brand#5', 'SPN#5', 'SPQ#5', 'PKG#5'),
  createData(false, '600', 'CPN600', 'MPN600', 'random description', 6000, 'site#6', 'business#6', 'brand#6', 'SPN#6', 'SPQ#6', 'PKG#6'),
];

const GreenCheckbox = withStyles({
    root: {
        color: 'gray',
        '&$checked': {
            color: '#01a76e',
        },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

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
    const [lineItems, setLineItems] = useState([])
    const [modal, setModal] = useState(false)
    const [all, setAll] = useState(false)
    const [newItem, setNewItem] = useState({
        cpn: '',
        mpn: '',
        description: '',
        build_site: '',
        annual_usage: '',
        line_number: '',
        business: '',
        brand: '',
        spn: '',
        spq: '',
        packaging: '',
    })
    const [rowsPerPage ,setRowsPerPage] = useState(5)
    const [page, setPage] = useState(1)
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');

    useEffect(() => {
        console.log('page render')
        setLineItems(rows)
    }, []) 

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    const getKey = (row) => {
        return row.line_number + ".." + row.cpn + ".." + row.mpn
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
            spq: '',
            packaging: '',
        })
    }

    const closeModal = () => {
        resetNewItem()
        setModal(!modal)
    }

    const addLineItem = () => {
        setLineItems([...lineItems, newItem])
        closeModal()
    }

    const updateLineItem = () => {

    }

    const deleteLineItem = () => {

    }


    const addPriceDetails = () => {

    }

    const updatePriceDetails = () => {

    }

    const deletePriceDetails = () => {

    }

    const handleCheck = (key) => {
        let updatedItems = lineItems.map((item, i) => {
            if (key === getKey(item))
                item.checked = !item.checked 
            return item; // Keep the existing item
        });
        setLineItems(updatedItems)
    }

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - lineItems.length) : 0;
    const displayedData = lineItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <div>
            <div className={classes.button_container}>
                <Button variant="outlined" className={classes.edit_button} startIcon={<Edit />}>Edit Item</Button>
                <Button onClick={() => setModal(!modal)} variant="contained" className={classes.button} startIcon={<AddIcon />}>New Item</Button>
            </div>
            <TableContainer component="div" className={classes.table_container}>
                <Table aria-label="simple table" className={`${classes.table} ${all && classes.table_all_selected}`} size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <GreenCheckbox
                                    checked={all}
                                    onChange={() => {setAll(!all)}}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </TableCell>
                            {
                                !all ? (
                                    <>
                                        <TableCell style={{width: '120px'}} className={classes.table_cell_header} align="center">Line no.</TableCell>
                                        <TableCell style={{width: '100px'}} className={classes.table_cell_header} align="center">CPN</TableCell>
                                        <TableCell style={{width: '100px'}} className={classes.table_cell_header} align="center">MPN</TableCell>
                                        <TableCell style={{width: '100px'}} className={classes.table_cell_header} align="center">Annual Usage</TableCell>
                                        <TableCell style={{width: '100px'}} className={classes.table_cell_header} align="center">Build Site</TableCell>
                                        <TableCell style={{width: '100px'}} className={classes.table_cell_header} align="center">Business</TableCell>
                                        <TableCell style={{width: '100px'}} className={classes.table_cell_header} align="center">Brand</TableCell>
                                        <TableCell style={{width: '100px'}} className={classes.table_cell_header} align="center">SPN</TableCell>
                                        <TableCell style={{width: '100px'}} className={classes.table_cell_header} align="center">SPQ</TableCell>
                                        <TableCell style={{width: '100px'}} className={classes.table_cell_header} align="center">Packaging</TableCell>
                                        <TableCell style={{width: '100px'}} className={classes.table_cell_header} align="center">Description</TableCell>
                                    </>
                                ): 
                                ( 
                                    <>
                                        <TableCell style={{width: '120px'}} className={classes.table_cell_header}>{getSelectedCount()} Selected</TableCell>
                                        <TableCell style={{width: '100px'}}/>
                                        <TableCell style={{width: '100px'}}/>
                                        <TableCell style={{width: '100px'}}/>
                                        <TableCell style={{width: '100px'}}/>
                                        <TableCell style={{width: '100px'}}/>
                                        <TableCell style={{width: '100px'}}/>
                                        <TableCell style={{width: '100px'}}/>
                                        <TableCell style={{width: '100px'}}/>
                                        <TableCell style={{width: '100px'}}/>
                                        <TableCell style={{width: '100px'}}/>
                                    </>
                                )
                            }
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
                                <TableCell style={{width: '120px'}} className={classes.table_cell}>
                                    {row.line_number}
                                </TableCell>
                                <TableCell style={{width: '100px'}} className={classes.table_cell} align="left">{row.cpn}</TableCell>
                                <TableCell style={{width: '100px'}} className={classes.table_cell} align="center">{row.mpn}</TableCell>
                                <TableCell style={{width: '100px'}} className={classes.table_cell} align="center">{row.annual_usage}</TableCell>
                                <TableCell style={{width: '100px'}} className={classes.table_cell} align="center">{row.build_site}</TableCell>
                                <TableCell style={{width: '100px'}} className={classes.table_cell} align="center">{row.business}</TableCell>
                                <TableCell style={{width: '100px'}} className={classes.table_cell} align="center">{row.brand}</TableCell>
                                <TableCell style={{width: '100px'}} className={classes.table_cell} align="center">{row.spn}</TableCell>
                                <TableCell style={{width: '100px'}} className={classes.table_cell} align="center">{row.spq}</TableCell>
                                <TableCell style={{width: '100px'}} className={classes.table_cell} align="center">{row.packaging}</TableCell>
                                <TableCell style={{width: '100px'}} className={classes.table_cell} align="center">{row.description}</TableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow
                            style={{
                              height: 83.500 * emptyRows,
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
                count={lineItems.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Modal
                open={modal}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal_container}>
                    <Typography className={classes.modal_header}>Create a new Line Item</Typography>
                    <Typography className={classes.modal_subtext}>ensure all fields marked with * are filled</Typography>
                    <div className={classes.modal_form_row}>
                        <TextField
                            className={classes.text_field}
                            label="Line number"
                            required
                            defaultValue={newItem.line_number}
                            variant="outlined"
                            fullWidth={true}
                            InputProps={{
                                className: classes.text_font,
                            }}
                            onChange={(e) => {newItem.line_number = e.target.value}}
                        />
                        <TextField
                            className={classes.text_field}
                            label="CPN"
                            required
                            defaultValue={newItem.cpn}
                            variant="outlined"
                            fullWidth={true}
                            InputProps={{
                                className: classes.text_font,
                            }}
                            onChange={(e) => {newItem.cpn = e.target.value}}
                        />
                        <TextField
                            className={classes.text_field}
                            label="MPN"
                            required
                            defaultValue={newItem.mpn}
                            variant="outlined"
                            fullWidth={true}
                            InputProps={{
                                className: classes.text_font,
                            }}
                            onChange={(e) => {newItem.mpn = e.target.value}}
                        />
                    </div>
                    <div className={classes.modal_form_row}>
                        <TextField
                            className={classes.text_field}
                            label="Annual usage"
                            required
                            defaultValue={newItem.annual_usage}
                            variant="outlined"
                            fullWidth={true}
                            InputProps={{
                                className: classes.text_font,
                            }}
                            onChange={(e) => {newItem.annual_usage = e.target.value}}
                        />
                        <TextField
                            className={classes.text_field}
                            label="Build site"
                            required
                            defaultValue={newItem.build_site}
                            variant="outlined"
                            fullWidth={true}
                            InputProps={{
                                className: classes.text_font,
                            }}
                            onChange={(e) => {newItem.build_site = e.target.value}}
                        />
                        <TextField
                            className={classes.text_field}
                            label="Business"
                            required
                            defaultValue={newItem.business}
                            variant="outlined"
                            fullWidth={true}
                            InputProps={{
                                className: classes.text_font,
                            }}
                            onChange={(e) => {newItem.business = e.target.value}}
                        />
                    </div>
                    <div className={classes.modal_form_row}>
                        <TextField
                            className={classes.text_field}
                            label="Brand"
                            required
                            defaultValue={newItem.brand}
                            variant="outlined"
                            fullWidth={true}
                            InputProps={{
                                className: classes.text_font,
                            }}
                            onChange={(e) => {newItem.brand = e.target.value}}
                        />
                        <TextField
                            className={classes.text_field}
                            label="SPN"
                            required
                            defaultValue={newItem.spn}
                            variant="outlined"
                            fullWidth={true}
                            InputProps={{
                                className: classes.text_font,
                            }}
                            onChange={(e) => {newItem.spn = e.target.value}}
                        />
                        <TextField
                            className={classes.text_field}
                            label="SPQ"
                            required
                            defaultValue={newItem.spq}
                            variant="outlined"
                            fullWidth={true}
                            InputProps={{
                                className: classes.text_font,
                            }}
                            onChange={(e) => {newItem.spq = e.target.value}}
                        />
                        <TextField
                            className={classes.text_field}
                            label="Packaging"
                            required
                            defaultValue={newItem.packaging}
                            variant="outlined"
                            fullWidth={true}
                            InputProps={{
                                className: classes.text_font,
                            }}
                            onChange={(e) => {newItem.packaging = e.target.value}}
                        />
                    </div>
                    <div className={classes.modal_form_row}>
                        <TextField
                            label="Description"
                            className={classes.text_field}
                            defaultValue={newItem.description}
                            variant="outlined"
                            fullWidth={true}
                            InputProps={{
                                className: classes.text_font,
                            }}
                            onChange={(e) => {newItem.description = e.target.value}}
                            minRows={4}
                            multiline
                        />
                    </div>
                    <div className={classes.modal_button_container}>
                        <Button variant="outlined" onClick={closeModal} className={classes.edit_button}>Cancel</Button>
                        <Button variant="contained" onClick={addLineItem} className={classes.button}>Create & Add</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}