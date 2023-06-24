import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';
import { Collapse, Typography } from '@material-ui/core';
import routes from '../routes'

import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { Add, Edit } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    '& .MuiDrawer-paperAnchorDockedLeft': {
        borderRightWidth: 0
    },
    header: {
        fontSize: 18,
        color: '#fff',
    },
    listBody: {
        backgroundColor: '#3f5c7c'
    },
    text: {
        fontSize: 14,
        color: '#2aad79',
    },
    listItem: {
        width: '90%',
        borderRadius: '8px',
        margin: '10px',
        backgroundColor: '#eff8f3',
        '&:hover': {
            backgroundColor: '#e1f6e6',
            transition: '0.3s'
        },
        transition: '0.3s',
        cursor: 'pointer',
        userSelect: 'none',
        verticalAlign: 'middle',
        appearance: 'none',
        display: 'flex',
        flexGrow: '1',
        alignSelf: 'center',
        transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        // padding: '4px 8px 4px 12px',
        minHeight: '44px',
        backgroundColor: 'rgba(0, 167, 111, 0.08)',
    },
    edit_icon: {
        marginRight: '10px',
        color: '#01a76e',
        fontSize: '15px'
    },
}));


const Sidebar = (props) => {

    const classes = useStyles();
    const [plexus, setPlexus] = useState(true)

    const togglePlexus = () => {
        setPlexus(!plexus)
    }

    return (
        <div className={classes.sidebar}>
            <List component="div">
                <ListItem key={routes[0].name} component={Link} to={routes[0].path} className={classes.listItem}>
                    <Edit className={classes.edit_icon} /> <Typography className={classes.text}>{routes[0].name}</Typography>
                </ListItem>
            </List>
        </div>
    );

}

export default Sidebar;