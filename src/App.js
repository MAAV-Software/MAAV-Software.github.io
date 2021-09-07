// React Imports
import { useState } from 'react';

// File Imports
import './App.css';
import header from './media/header.png';
import { pages } from './pages/pages';

// Component Imports
import {
  HashRouter as Router,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import MediaQuery from 'react-responsive'
import {
  AppBar,
  Drawer,
  IconButton,
  ThemeProvider,
  Toolbar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {
  NavBarButton,
  SideDrawer,
} from './components';
import HomePage from './pages/homepage/HomePage';

// Styling and Theme Imports
import { createTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import '@fontsource/roboto';

// Define the theme for the website
const theme = createTheme({
  palette: {
    primary: {
      main: blue[900],
      contrastText: '#fff',
    },
    secondary: {
      main: blue[300],
    },
  },
});

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        {/* Setup NavBar */}
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton onClick={toggleDrawer} edge="start" color="inherit" className="MenuButton" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Link to="/">
              <img src={header} alt="Michigan Autonomous Aerial Vehicles" className="TitleImage" />
            </Link>
            <div className="AppBarFiller" />
            {/* Navigation Buttons for pages, based on pages.js config */}
            <MediaQuery minWidth={800}>
              {Object.keys(pages).map((page, index) => (
                <NavBarButton
                  key={`nav-bar-button-${index}`}
                  buttonText={page}
                  to={pages[page].path}
                  {...pages[page].specialNavDisplay ? {disableElevation: false, color: 'secondary'} : null}
                />
              ))}
            </MediaQuery>
          </Toolbar>
        </AppBar>
        {/* Setup the SideDrawer when clicking the hamburger menu */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          <SideDrawer onClick={toggleDrawer} />
        </Drawer>
        <Switch>
          {/* Setup the pages the website will have, based on pages.js config */}
          {Object.keys(pages).map((page, index) => (
            <Route key={`route-${index}`} path={pages[page].path}>
              {pages[page].component}
            </Route>
          ))}
          {/* Default Homepage */}
          <HomePage />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
