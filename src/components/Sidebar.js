import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import routes from '../routes'
import Logo from '../assets/logo.png'

import { Edit, GetApp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    '& .MuiDrawer-paperAnchorDockedLeft': {
        borderRightWidth: 0
    },
    listWrapper: {
        marginTop: '20px'
    },
    list: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px',
        padding: '0px',
    },
    listItem: {
        padding: '1em',
        borderRadius: '4px',
        margin: '0px 10px 0px 10px',
        color: '#637381',
        '&:hover': {
            backgroundColor: '#e1f6e6',
            transitionDuration: '0.3s',
            color: '#01a76e'
        },
        transitionDuration: '0.3s',
        cursor: 'pointer',
        userSelect: 'none',
        verticalAlign: 'middle',
        appearance: 'none',
        display: 'flex',
        flexGrow: '1',
        alignSelf: 'center',
        transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        minHeight: '44px',
    },
    icon: {
        marginRight: '10px',
        fontSize: '15px'
    },
    text: {
        fontFamily: 'AirbnbCereal-Book',
        fontSize: 14,
    },
    logoWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px'
    },
    logo: {
        width: '70%',
    }
}));


const Sidebar = () => {
    const classes = useStyles();
    return (
        <div className={classes.listWrapper}>
            <div className={classes.logoWrapper}>
                <img src={Logo} alt="logo" className={classes.logo}/>
            </div>
            <List component="div" className={classes.list}>
                <ListItem key={routes[0].name} component={Link} to={routes[0].path} className={classes.listItem}>
                    <Edit className={classes.icon} /> <Typography className={classes.text}>{routes[0].name}</Typography>
                </ListItem>
            </List>
            <List component="div" className={classes.list}>
                <ListItem key={routes[1].name} component={Link} to={routes[1].path} className={classes.listItem}>
                    <GetApp className={classes.icon} /> <Typography className={classes.text}>{routes[1].name}</Typography>
                </ListItem>
            </List>
        </div>
    );

}

export default Sidebar;