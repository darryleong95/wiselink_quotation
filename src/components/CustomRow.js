import * as React from 'react';
import { TableCell, TableRow, Button, Typography, IconButton, Popover } from '@material-ui/core'
import { useStyles } from '../styles'
import { GreenCheckbox } from './GreenCheckbox';
import { Delete, Edit, MoreVert } from '@material-ui/icons';
import { useState } from 'react';

const CustomRow = ({ value, popoverId, popoverStatus, popoverOpen, popoverClose, anchor, setDeleteModal, setModal, setType }) => {
    const [item, setItem] = useState(value)
    const classes = useStyles()

    return (
        <TableRow
            key={value.name}
            className={classes.table_row}
        >
            {/* <TableCell className={classes.table_cell} component="th" scope="row">
                <GreenCheckbox
                    checked={value.checked}
                    onChange={() => handleCheck(getKey(value))}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </TableCell> */}
            <TableCell style={{paddingLeft :'20px'}} className={classes.table_cell}>
                {value.line_number}
            </TableCell>
            <TableCell className={classes.table_cell} align="left">{value.cpn}</TableCell>
            <TableCell className={classes.table_cell} align="center">{value.mpn}</TableCell>
            <TableCell className={classes.table_cell} align="center">{value.description}</TableCell>
            <TableCell className={classes.table_cell} align="center">{value.annual_usage}</TableCell>
            <TableCell className={classes.table_cell} align="center">{value.build_site}</TableCell>
            <TableCell className={classes.table_cell} align="center">{value.business}</TableCell>
            <TableCell className={classes.table_cell} align="center">{value.supplier}</TableCell>
            <TableCell className={classes.table_cell} align="center">{value.brand}</TableCell>
            <TableCell className={classes.table_cell} align="center">{value.spq}</TableCell>
            <TableCell className={classes.table_cell} align="center">{value.packaging}</TableCell>
            <TableCell className={classes.table_cell} align="center">{value.target_price}</TableCell>
            <TableCell className={classes.table_cell} align="center">{value.updates}</TableCell>
            <TableCell className={classes.table_cell} align="right">
                <div className={classes.table_cell_icon_wrapper}>
                    <IconButton onClick={(e) => {popoverOpen(e, item)}} aria-label="edit" size="small" className={classes.more_vert}>
                        <MoreVert fontSize="inherit" />
                    </IconButton>
                    <Popover
                        id={popoverId}
                        open={popoverStatus}
                        anchorEl={anchor}
                        onClose={popoverClose}
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
                                    popoverClose()
                                    setType("update")
                                    setModal(true)
                                }} variant="text" className={classes.popover_button} startIcon={<Edit />}>
                                    <Typography className={classes.popover_text}>Edit</Typography>
                                </Button>
                                <div className={classes.popover_divider} /> 
                                <Button onClick={() => {
                                    popoverClose()
                                    setDeleteModal(true)
                                }} style={{color: '#ff5630'}} variant="text" className={classes.popover_button} startIcon={<Delete />}>
                                    <Typography className={classes.popover_text}>Delete</Typography>
                                </Button>
                        </div>
                    </Popover>
                </div>
            </TableCell>
        </TableRow>
    )
}

export default CustomRow