import React, {useState} from 'react';
import { Routes, Route, Link, BrowserRouter as Router} from "react-router-dom";
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PublicIcon from '@material-ui/icons/Public';
import AppsIcon from '@material-ui/icons/Apps';
import GitHubIcon from '@material-ui/icons/GitHub';
import TopStories from './pages/TopStories'
import Category from './pages/Category'
import SelectCategory from './pages/SelectCategory';
import { Typography } from '@material-ui/core';
import { SearchResults} from './pages/SearchResults'




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
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  sinput: {
    height: '40px',
    padding: '5px',
    borderRadius: '5px'
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
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('')

  const mediaQuery = window.matchMedia('(max-width: 767px)');
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    window.location.href = `/SearchResults/${searchTerm}`
  }

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>{
          [
            {name: 'Top Stories', icon: PublicIcon, url: '/Top%20Stories'}, 
            {name: 'Category', icon: AppsIcon, url: '/Category'}, 
            {name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/adebayooriyomi/ReactJS-WebApp'}
          ]
            .map((menu, key) => (
              menu.name === 'GitHub' 
              ? 
              <ListItem button key={key} component="a" href={menu.url} target="_blank" rel="noopener noreferrer">
                <ListItemIcon>{<menu.icon color="primary"/>}</ListItemIcon>
                <ListItemText primary={menu.name} />
              </ListItem>
              :
              <ListItem button key={key} component={Link} to={menu.url} onClick={mediaQuery.matches ? handleDrawerToggle : null}>
                <ListItemIcon>{<menu.icon color="primary"/>}</ListItemIcon>
                <ListItemText primary={menu.name} />
              </ListItem>
          ))}
        </List>
    </div>
  );

  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.header}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{fontWeight: "bold"}} variant="h6" noWrap>
           World News
          </Typography>
          <form onSubmit={handleSearch}>
            <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="Search for Topics..." className={classes.sinput}/>
          </form>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Routes>
              <Route path="/" element={<TopStories />} />
              <Route path="/Top Stories" element={<TopStories />} />
              <Route path="/Category" element={<Category />} />
              <Route path="/SearchResults/:searchTerm" element={<SearchResults />} />
              <Route path="/SelectCategory/:id" element={<SelectCategory />} />
          </Routes>
      </main>
      
    </div>
    </Router>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;

  
