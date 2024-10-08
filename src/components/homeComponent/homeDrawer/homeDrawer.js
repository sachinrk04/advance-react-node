import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import { drawerStyles } from './drawerStyles';
import './homeDrawer.scss';
import AppRoutes from '../../../router/appRoutes';

export default function HomeDrawer() {
  const classes = drawerStyles('drawer');
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <NavLink exact={true} activeClassName='is-active' to='/'>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Home' />
            </ListItem>
          </NavLink>
          <NavLink activeClassName='is-active' to='/dynamic-Objective'>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Objective' />
            </ListItem>
          </NavLink>
          <NavLink activeClassName='is-active' to='/chart'>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='Chart' />
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <AppRoutes />
      </main>
    </div>
  );
}