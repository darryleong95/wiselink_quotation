import { makeStyles, colors } from '@material-ui/core'

export const useStyles = makeStyles({
    grow: {
        flexGrow: 1,
    },
    linkContainer: {
        display: 'flex'
    },
    link: {
        margin: '5px',
        padding: '10px 20px 10px 20px',
        backgroundColor: '#f8f8f8',
        color: '#434343',
        textDecoration: 'none',
        borderRadius: '5px',
        transition: '0.5s',
        textTransform: 'uppercase',
        fontSize: '1em',
        fontWeight: 'bold',

        '&:hover': {
            backgroundColor: '#d5d5d5',
            transition: '0.5s',
        },
    },

    // component containers
    container: {
        // justifyContent: 'center',
        fontFamily:'AirbnbCereal-Book',
        color: 'white',
        letterSpacing: '1px',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'red',
        height: '100%',
        padding: '1em',
    },


    // create quotation
    left: {
        // backgroundColor: '#f8f8f8',
        flex: 3,
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    right: {
        flex: 1,
        height: '100%'
    },

    leftFormContainer: {
        // backgroundColor: 'purple',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    lineItemContainer: {
        marginTop: '1em',
        flex: 1,
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
        boxShadow: '0px 0px 20px 15px rgba(15, 19, 25, 0.3)',
    },

    text_field: {
        padding: '3px 2px 3px 2px',
        margin: '2px 2px 2px 2px',
        borderRadius: '5px'
    },

    text_font: {
        color: 'white'
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
        boxShadow: '0px 0px 20px 15px rgba(15, 19, 25, 0.3)',
        flexDirection: 'row',
        display: 'flex',
    },

    currency_form: {
        borderRadius: '10px',
        margin: '0.5em',
        padding: '1em',
        boxShadow: '0px 0px 20px 15px rgba(15, 19, 25, 0.3)',
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
        boxShadow: '0px 0px 20px 15px rgba(15, 19, 25, 0.3)',
        width: 'auto',
        backgroundColor: '#161c24',
        margin: '0.5em',
    },

    table: {
        minWidth: '650px',
        color: 'white',
        "&::before, &::after": {
            borderColor: "red",
        },
        "& .MuiTableCell-sizeSmall": {
            padding: "20px 30px 20px 30px"
        }
    },
    
    table_row: {
        color: 'white',
    },

    table_cell: {
        color: 'white',
        fontFamily:'AirbnbCereal-Medium',
        borderColor: '#212b36',
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
    }
})