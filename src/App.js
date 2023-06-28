import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from './components/Sidebar.js';
import Drawer from '@material-ui/core/Drawer';

import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from 'react-router-dom';
import CreateQuotation from './views/CreateQuotation.js';
import GetQuotation from './views/GetQuotation.js';

const drawerWidth = 240;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    backgroundColor: '#ffffff',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#ffffff',
    border: 'none',
    borderRightColor: '#e9edef',
    borderRightStyle: 'dashed',
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
}));


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="navigation-tabs">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          <Sidebar />
        </Drawer>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/" render={() => <div>WISELINK</div>} />
          <Route path="/quotation/create" render={() => <CreateQuotation />} />
          <Route path="/quotation/get" render={() => <GetQuotation />} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
