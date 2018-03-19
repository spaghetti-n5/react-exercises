import React from 'react';

import classes from './Layout.css';
import Toolbar from '../../components/Toolbar/Toolbar';

const Layout = (props) => (
  <div>
    <Toolbar />
    <main className={classes.Content}>
       {props.children}
    </main>
  </div>
);

export default Layout;
