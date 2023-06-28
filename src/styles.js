import { makeStyles, colors } from '@material-ui/core'

export const useStyles = makeStyles({

    // component containers
    wrapper: {
        padding: '1em 6em',
        height: 'auto'
    },

    container: {
        fontFamily:'AirbnbCereal-Book',
        color: 'white',
        letterSpacing: '1px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },

    // header
    header: {
        fontFamily:'AirbnbCereal-Bold',
        fontSize: '1.5rem',
        marginLeft: '0.5em',
        color: '#212b36',
        padding: '1em 0em 1em 0em'
    },

    form_container: {
        display: 'flex',
        flexDirection: 'row',
    },
    table_wrapper: {
        margin: '0.5em',
    },

    // child of left form container
    customer: {
        flex: 1,
    },
    sales: {
        flex: 1,
    },

    size_1: {
        flex: 1,
        marginLeft: '5px'
    },
    size_2: {
        flex: 2,
    },

    // individual form container
    individual_form: {
        borderRadius: '10px',
        margin: '0.5em',
        padding: '1em',
        boxShadow: '0px 0px 30px 2px rgba(212, 212, 212, 0.3)',
    },

    text_field: {
        transitionDuration: '0.6s',
        padding: '0px 1px 0px 1px',
        margin: '10px 2px 2px 2px',
        borderRadius: '5px',
        backgroundColor: '#fff',
        '&:hover fieldset': {
            borderColor: '#212b36',
            transitionDuration: '0.6s'
        },
        '&:focus': {
            borderColor: '#212b36'
        }
    },

    text_font: {
        color: '#212b36',
        fontFamily: 'AirbnbCereal-Book',
        fontSize: '14px'
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
        borderColor: '#f3f6f8',
        borderStyle: 'dotted',
    },

    table_row_header: {
        color: '#637381',
        fontFamily:'AirbnbCereal-Medium',
        border: 'none',
        whiteSpace: 'nowrap',
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
        height: '100%',
        width: '70%',
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

    table_cell_icon_wrapper: {
        display: 'flex',
        alignItems: 'center', 
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        // marginRight: '100px'
    },

    more_vert: {
        color: '#637381'
    },
    
    moq_modal_button_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: '24px'
    },

    edit_moq_button: {
        marginRight: '1em',
        padding: '0.8em 1.2em 0.8em 1.2em',
        borderRadius: '8px',
        fontFamily:'AirbnbCereal-Bold',
        fontSize: '13px',
        '&:hover': {
            backgroundColor: '#bbc8d6',
            borderColor: '#212b36',
        }
    },

    moq_button: {
        color: '#fff',
        marginRight: '0px',
        padding: '0.8em 1.2em 0.8em 1.2em',
        borderRadius: '8px',
        fontFamily:'AirbnbCereal-Bold',
        fontSize: '13px',
        backgroundColor: '#212b36',
        '&:hover': {
            backgroundColor: '#37485b',
        }
    },

    modal_table: {
        backgroundColor: '#f3f6f8',
        color: 'white',
        "&::before, &::after": {
            borderColor: "red",
        },
        "& .MuiTableCell-sizeSmall": {
            padding: "5px",
        },
        overflow: 'hidden'
    },


    /* price details */
    pd_container: {
        borderRadius: '15px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        padding: '50px 20px 50px 20px',
        backgroundColor: '#fff',
        border: 'none',
        boxShadow: 24,
        p: 4,
        '&:focus': {
            border: 'none'
        }
    },

    pd_modal_header: {
        fontFamily:'AirbnbCereal-Medium',
        padding: '24px 24px 16px 24px',
        fontSize: '17px',
        color: '#212b36',
        width: '100%',
        textAlign: 'left'
    },

    pd_modal_subtitle: {
        fontFamily:'AirbnbCereal-Book',
        fontSize: '13px',
        padding: '0px 24px 0px 24px',
    },

    // edit modal
    edit_container: {
        width: 'calc(100% - 64px)',
        borderRadius: '16px',
        maxWidth: '444px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        border: 'none',
        '&:focus': {
            border: 'none'
        },
        boxShadow: 'rgba(0, 0, 0, 0.24) -40px 40px 80px -8px'
    },

    delete_pd_button: {
        transition: '0.3s',
        fontFamily: 'AirbnbCereal-Book',
        padding: '0.5em 1em 0.5em 1em',
        borderRadius: '8px',
        fontFamily:'AirbnbCereal-Bold',
        fontSize: '13px',
        '&:hover': {
            transition: '0.3s',
        }
    },

    confirm_pd_button: {
        color: '#fff',
        backgroundColor: '#ff5630', 
        marginRight: '10px',
        '&:hover': {
            backgroundColor: '#cd2600',
        }
    },

    cancel_pd_button: {
        color: '#212b36',
        borderWidth: '1px',
        '&:hover': {
            backgroundColor: '#e2e2e2',
            borderColor: '#212b36',
        }
    },

    popover_container: {
        '& .MuiPopover-paper': {
            width: '150px', // Set the desired width
            borderRadius: '8px',
            boxShadow: 'rgba(145, 158, 171, 0.24) 0px 0px 20px 0px'
        },
    },

    popover: {
        flexDirection:'column',
        padding: '4px',
        borderRadius: '8px',
    },

    popover_button: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '10px 0px 10px 15px',
        color: '#212b36'
    },

    popover_divider: {
        border: 'none',
        borderBottomStyle: 'dashed',
        borderColor: 'rgba(145, 158, 171, 0.2)',
        borderWidth: '0px 0px thin'
    },

    popover_text: {
        marginLeft: '5px',
        textTransform: 'capitalize',
        fontSize: '1em'
    },

    // backdrop
    backdrop: {
        backgroundColor: 'rgba(22, 28, 36, 0.8)'
    },

    // edit price detail
    edit_modal_form_row: {
        display: 'flex',
        flexDirection: 'row',
        padding: '0px 24px 0px 24px',
        fontSize: '10px'
    },

    edit_pd_button: {
        transition: '0.3s',
        color: '#fff',
        marginRight: '10px',
        padding: '0.8em 1.2em 0.8em 1.2em',
        borderRadius: '8px',
        fontFamily:'AirbnbCereal-Bold',
        fontSize: '13px',
        backgroundColor: '#2aad79',
        '&:hover': {
            transition: '0.3s',
            backgroundColor: '#228d63',
        }
    },
})