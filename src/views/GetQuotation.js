import React, { useState } from 'react'
import { Button, Typography, makeStyles, TextField, InputAdornment, IconButton, TableHead, TableRow, TableCell, TableBody, Table, Paper, TableContainer, Popover } from '@material-ui/core'
import { Search, PictureAsPdf, FontDownload, CloudDownload, MoreVert } from '@material-ui/icons'
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    wrapper: {
        padding: '1em 6em',
        height: '100vh',
        fontFamily: 'AirbnbCereal-Medium',
    },
    header: {
        fontFamily:'AirbnbCereal-Bold',
        fontSize: '1.5rem',
        marginLeft: '0.5em',
        color: '#212b36',
        padding: '1em 0em 0.5em 0em'
    },
    container: {
        color: 'white',
        letterSpacing: '1px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        display: 'flex',
        width: '100%',
    },
    text_field: {
        width: '300px',
        transitionDuration: '0.6s',
        padding: '0px 1px 0px 1px',
        margin: '10px 2px 2px 2px',
        backgroundColor: '#fff',
        '&:hover fieldset': {
            borderColor: '#212b36',
            transitionDuration: '0.6s'
        },
        '&:focus': {
            borderColor: '#212b36'
        },
        '& .MuiOutlinedInput-root': {
            position: 'relative',
            borderRadius: '50px'
        }
    },
    text_font: {
        paddingLeft: '10px',
        fontFamily: 'AirbnbCereal-Book',
        fontSize: '13px'
    },

    // results - 2nd half
    resultContainer: {
        margin: '2em 0em',
        display: 'flex',
        width: '100%',
        alignItems: 'flex-start'
    },
    tableContainer: {
        width: 'auto',
        minWidth:'400px',
        boxShadow: '0px 0px 30px 2px rgba(212, 212, 212, 0.3)',
        borderRadius: '15px',
    },
    table: {
        backgroundColor: '#f3f6f8',
        color: 'white',
        "&::before, &::after": {
            borderColor: "red",
        },
        "& .MuiTableCell-sizeSmall": {
            padding: "20px",
        },
        overflow: 'hidden'
    },
    tableRowHeader: {
        border: 'none',
        whiteSpace: 'nowrap',
    },
    tableHeaderText: {
        color: '#637381',
        fontFamily:'AirbnbCereal-Medium',
    },
    tableText: {
        color: '#212b36',
        fontFamily:'AirbnbCereal-Book',
    },
    tableRow: {
        backgroundColor: '#fff',
        borderColor: '#f3f6f8',
        borderStyle: 'dotted',
    },
    tableCellIconWrapper: {
        display: 'flex',
        alignItems: 'center', 
        height: '100%',
        width: '150px',
        justifyContent: 'flex-end',
    },
    pdf: {
        color: '#212b36',
        borderRadius: 'none'

    },
    excel: {
        color: '#01a76e',
        borderRadius: 'none'
    },

    // pop over
    popoverContainer: {
        '& .MuiPopover-paper': {
            width: '150px', // Set the desired width
            borderRadius: '8px',
            boxShadow: 'rgba(145, 158, 171, 0.24) 0px 0px 20px 0px'
        },
    },
    popoverButton: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '10px 0px 10px 15px',
        color: '#212b36'
    },
    popoverText: {
        marginLeft: '5px',
        textTransform: 'capitalize',
        fontFamily: 'AirbnbCereal-Book',
        fontSize: '13px',
    },
    popoverDivider: {
        border: 'none',
        borderBottomStyle: 'dashed',
        borderColor: 'rgba(145, 158, 171, 0.2)',
        borderWidth: '0px 0px thin'
    },

}));

function createData(quotation, excel_link, pdf_link) {
    return { quotation, excel_link, pdf_link };
  }
  
const rows = [
    createData('100-A'),
    createData('100-B'),
];

const GetQuotation = () => {
    const classes = useStyles()
    const [quote, setQuote] = useState("")
    const [results, setResults] = useState([])
    const [anchorEl, setAnchorEl] = useState(null)
    const [selected, setSelected] = useState({})
    const [popover, setPopover] = useState(false)
    
    useEffect(() => {
        setResults(rows)
    }, []) 

    const updateQuotationValue = (e) => {
        setQuote(e.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key !== 'Enter') {
            return
        }
        handleSearch(event.target.value)
    }

    const handleSearch = (term) => {
        if (term.trim() === "") {
            alert('ensure search is not empty')
            return
        }
        if (term.trim().length < 2) { // variable value
            alert('ensure search is more specific')
            return
        }
        // retrieve results here...
        const results = rows
        const updated = results.filter((el) => {
            return el.quotation.toLowerCase().includes(term.trim().toLowerCase())
        });
        setResults(updated)
    }

    const excel = () => {
        setAnchorEl(null)
        // download excel_link
    }

    const pdf = () => {
        setAnchorEl(null)
        // download pdf_link
    }

    const openPopover = (e, row) => {
        setAnchorEl(e.currentTarget)
        setSelected(row)
    }

    const closePopover = () => {
        setAnchorEl(null);
    }

    const popoverOpen = Boolean(anchorEl)
    const popoverId = popoverOpen ? 'simple-popover' : undefined

    return (
        <div className={classes.wrapper}>
            <Typography className={classes.header}>Retrieve</Typography>
            <div className={classes.container}>
                <div className={classes.inputContainer}>
                    <TextField
                        placeholder={"Quote number"}
                        className={classes.text_field}
                        defaultValue={quote}
                        fullWidth={true}
                        variant='outlined'
                        onChange={updateQuotationValue}
                        onKeyDown={handleKeyDown}
                        InputProps={{
                            className: classes.text_font,
                            endAdornment: (
                                <InputAdornment position="start">
                                    <IconButton onClick={() => {handleSearch(quote)}}>
                                        <Search />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        
                    />
                </div>
                <div className={classes.resultContainer}>
                    <TableContainer component={Paper} className={classes.tableContainer}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow className={classes.tableRowHeader}>
                                    <TableCell className={classes.tableHeaderText}>Quotation Number</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    results.map((result) => {
                                        return (
                                            <TableRow className={classes.tableRow}>
                                                <TableCell className={classes.tableText}>{result.quotation}</TableCell>
                                                <TableCell className={classes.table_cell} align="right">
                                                    <div className={classes.tableCellIconWrapper}>
                                                        <IconButton onClick={(e) => {openPopover(e, result)}} aria-label="edit" size="small" className={classes.moreVert}>
                                                            <MoreVert fontSize="inherit" />
                                                        </IconButton>
                                                        <Popover
                                                            id={popoverId}
                                                            open={popoverOpen}
                                                            anchorEl={anchorEl}
                                                            onClose={closePopover}
                                                            className={classes.popoverContainer}
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
                                                                <Button onClick={excel} variant="text" className={classes.popoverButton} startIcon={<CloudDownload />}>
                                                                    <Typography style={{color: '#212b36'}} className={classes.popoverText}>Excel export</Typography>
                                                                </Button>
                                                                <div className={classes.popoverDivider} /> 
                                                                <Button
                                                                    onClick={pdf} style={{color: '#FF0000'}} variant="text" className={classes.popoverButton} startIcon={<PictureAsPdf />}>
                                                                    <Typography className={classes.popoverText}>PDF export</Typography>
                                                                </Button>
                                                            </div>
                                                        </Popover>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}

export default GetQuotation