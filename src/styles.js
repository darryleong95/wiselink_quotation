import { makeStyles, colors } from '@material-ui/core'

export const useStyles = makeStyles({

    // component containers
    container: {
        fontFamily:'AirbnbCereal-Book',
        color: 'white',
        letterSpacing: '1px',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        padding: '1em',
    },


    // create quotation
    left: {
        // backgroundColor: '#f8f8f8',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '75%'
    },
    right: {
        height: '100%',
        width: '25%'
    },

    leftFormContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    lineItemContainer: {
        margin: '0.5em',
    },

    // child of left form container
    customer: {
        flex: 4,
    },
    sales: {
        flex: 3,
    },
    payment: {
        flex: 3,
    },

    // individual form container
    individual_form: {
        borderRadius: '10px',
        margin: '0.5em',
        padding: '1em',
        boxShadow: '0px 0px 30px 2px rgba(212, 212, 212, 0.3)',
    },

    text_field: {
        padding: '3px 2px 3px 2px',
        margin: '5px 2px 2px 2px',
        borderRadius: '5px'
    },

    text_font: {
        color: '#212b36',
        fontFamily: 'AirbnbCereal-Book'
    },

    // right form container
    vertical_form_container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },

    date: {
    },

    currency: {
    },

    vat: {
        flex: 3,
    },

    extra: {
        flex: 3,
    },

    date_form: {
        borderRadius: '10px',
        margin: '0.5em',
        padding: '1em',
        boxShadow: '0px 0px 30px 2px rgba(212, 212, 212, 0.3)',
        flexDirection: 'row',
        display: 'flex',
    },

    currency_form: {
        borderRadius: '10px',
        margin: '0.5em',
        padding: '1em',
        boxShadow: '0px 0px 30px 2px rgba(212, 212, 212, 0.3)',
        flexDirection: 'row',
        display: 'flex',
        flexDirection: 'column'
    },

    currency_form_1: {
        display: 'flex',
        flexDirection: 'row'

    },

    vat_switch: {
        margin: '5px 0px 5px 0px'
    },

    // quotation table
    table_container: {
        boxShadow: '0px 0px 30px 2px rgba(212, 212, 212, 0.3)',
        borderRadius: '15px',
        maxWidth: '100%',
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

    table_all_selected: {
        backgroundColor: '#c8fbd6'
    },

    table_row: {
        backgroundColor: '#fff',
        // color: 'white',
        borderColor: '#f3f6f8',
        borderStyle: 'dotted',
    },

    table_cell_header: {
        color: '#637381',
        fontFamily:'AirbnbCereal-Medium',
        border: 'none',
        whiteSpace: 'nowrap', 
        // width: '200px'
    },

    table_cell: {
        color: '#262f3a',
        fontFamily:'AirbnbCereal-Book',
        border: 'none',
        // width: '100px'
    },

    button_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    edit_button: {
        marginRight: '1em',
        marginBottom: '1em',
        padding: '0.8em 1.2em 0.8em 1.2em',
        borderRadius: '8px',
        fontFamily:'AirbnbCereal-Bold',
        fontSize: '13px',
        '&:hover': {
            backgroundColor: '#bbc8d6',
            borderColor: '#212b36',
        }
    },

    button: {
        color: '#fff',
        marginRight: '0px',
        marginBottom: '1em',
        padding: '0.8em 1.2em 0.8em 1.2em',
        borderRadius: '8px',
        fontFamily:'AirbnbCereal-Bold',
        fontSize: '13px',
        backgroundColor: '#212b36',
        '&:hover': {
            backgroundColor: '#37485b',
        }
    },


    // 
    label: {
        fontWeight: 'bold',
        fontSize: '20px',
        paddingTop: '5px',
        paddingBottom: '5px',
        width: '100%',
        textAlign: 'left'
    },
    inputWrapper: {
        margin: '20px 0px'
    },
    input: {
        padding: '5px'
    },

    download: {
        backgroundColor: 'darkorange',
        color: 'white',
        width: '180px',
        height: '50px',
        borderRadius: '5px',
        fontSize: '1.1em',
        border: 'none',
        transition: '1s',
        textTransform: 'uppercase',
        '&:hover': {
            backgroundColor: '#ff6500',
            transition: '1s',
            cursor: 'pointer'
        },
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    // modal
    modal_container: {
        borderRadius: '15px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        padding: '50px 20px 50px 20px',
        backgroundColor: '#fff',
        border: 'none',
        boxShadow: 24,
        p: 4,
        '&:focus': {
            border: 'none'
        }
    },

    modal_form_row: {
        display: 'flex',
        flexDirection: 'row',
    },

    modal_button_container: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '3px 2px 3px 2px',
    },

    modal_header: {
        padding: '3px 2px 0px 2px',
        color: '#212b36',
        fontFamily: 'AirbnbCereal-Bold',
        fontSize: '20px'
    },

    modal_subtext: {
        marginBottom: '10px',
        padding: '0px 2px 3px 5px',
        color: '#909eab',
        fontFamily: 'AirbnbCereal-Book',
        fontSize: '14px',
    },

})