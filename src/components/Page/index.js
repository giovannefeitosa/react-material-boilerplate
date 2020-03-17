import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import menuList from '../../routes/menuList';
import * as S from './styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
  contentPadding: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  activeMenu: {
    '&, &:hover, &:focus': {
      background: '#e7e7e7',
    }
  },
}));

function Page(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const history = useHistory();
  
  const classContent = props.noPadding
    ? classes.content
    : classes.contentPadding;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      {menuList.map((menuSection, index) => (
        <div key={index}>
          <List>
            {menuSection.menus.map(menu => (
              <ListItem
                key={`${index}-${menu.id}`}
                className={menu.id === props.currentMenu ? classes.activeMenu : undefined}
                button
                onClick={() => menu.path && history.push(menu.path)}
              >
                <ListItemIcon><menu.icon /></ListItemIcon>
                <ListItemText primary={menu.label} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      ))}
    </div>
  );


  const leftSlotWidth = props.absoluteLeftWidth || 230;
  const rightSlotWidth = props.absoluteRightWidth || 230;

  const leftSlot = contentSlot({
    left: true,
    width: leftSlotWidth,
    style: props.absoluteLeftStyle,
    children: props.absoluteLeftSlot,
  });

  const rightSlot = contentSlot({
    right: true,
    width: rightSlotWidth,
    style: props.absoluteRightStyle,
    children: props.absoluteRightSlot,
  });

  const childrenStyle = {};
  if (leftSlot) childrenStyle.marginLeft = leftSlotWidth;
  if (rightSlot) childrenStyle.marginRight = rightSlotWidth;

  const children = (
    <div style={childrenStyle}>
      {props.children}
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {props.title || ''}
          </Typography>
          {props.toolbarSlot}
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classContent}>
        <div className={classes.toolbar} />
        {leftSlot}
        {rightSlot}
        {children}
      </main>
    </div>
  );
}

function contentSlot(props) {
  return props.children ? (
    <S.AbsoluteSlot
      left={props.left}
      right={props.right}
      width={props.width}
      style={props.style}
    >
      {props.children}
    </S.AbsoluteSlot>
   ) : false;
}

Page.propTypes = {
  title: PropTypes.string,
  currentMenu: PropTypes.string,
};

export default Page;
