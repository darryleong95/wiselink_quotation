import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from './components/Sidebar.js';
import Drawer from '@material-ui/core/Drawer';

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Route, Switch } from 'react-router-dom';
import CreateQuotation from './views/CreateQuotation.js';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
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
    borderColor: '#f3f6f8',
    borderStyle: 'dotted',
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
        </Switch>
      </main>
    </div>
  );
}

export default App;
