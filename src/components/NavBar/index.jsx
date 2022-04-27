import { Link } from 'react-router-dom'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import './styled.css'
import Logo from './images/logo.png'

const pages = ['home', 'projetos', 'contato', 'curriculo'];

export const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'black' }}>
      <Container margin='auto'>
        <Toolbar disableGutters>
            <Link to='/'>
              <Box
                component="img"
                sx={{ height: '30px', maxWidth: '90px'}}
                src={Logo}
                alt='minha logo'
              />
            </Link>
          <Box sx={{ ml:'60%', flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            {pages.map((page) => (
              <Link to={`/${page}`} style={{textDecoration: 'none'}}>
                <Button
                  className='itemMenu'
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{my: 1, color: 'white', display: 'block'}}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ ml:'60%', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu} className='itemMenu'>
                    <Typography textAlign="center">
                      <Link to={`/${page}`} style={{ color:'#000', textDecoration:'none'}}>
                        {page}
                      </Link>
                    </Typography>
                  </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
