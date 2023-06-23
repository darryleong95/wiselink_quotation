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
        color: '#fff',
        marginLeft: '15px',
    },
    listItem: {
        '&:hover': {
            backgroundColor: '#324963',
            transition: '0.3s'
        },
        transition: '0.3s'
    }
}));


const Sidebar = (props) => {

    const classes = useStyles();
    const [plexus, setPlexus] = useState(true)

    const togglePlexus = () => {
        setPlexus(!plexus)
    }

    return (
        <div>
            <List>
                <ListItem onClick={togglePlexus}>
                    <ListItemText primary="Plexus" className={classes.header} />
                    {plexus ? <ExpandLess style={{ color: '#fff' }} /> : <ExpandMore style={{ color: '#fff' }} />}
                </ListItem>
                <Collapse in={plexus} timeout="auto" unmountOnExit className={classes.listBody}>
                    <List component="div" disablePadding>
                        <ListItem key={routes[0].name} component={Link} to={routes[0].path} className={classes.listItem}>
                            <Typography className={classes.text}>{routes[0].name}</Typography>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </div>
    );

}

export default Sidebar;