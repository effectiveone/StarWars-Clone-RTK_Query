import  {useState, useEffect, useRef} from 'react';
import * as React from "react";
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
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import { useNavigate } from "react-router-dom";
import { useGetSearchMutation } from "../../services/starWarsApi";
import SearchPortal from "../SearchPortal/SearchPortal"
import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import ReactDOM from 'react-dom';

const pages = [
    {
      label: "people",
      value: "people",
    },
    {
      label: "planets",
      value: "planets",
    },
    {
      label: "films",
      value: "films",
    },
    {
      label: "species",
      value: "species",
    },
    {
      label: "vehicles",
      value: "vehicles",
    },
    {
      label: "starships",
      value: "starships"
    },
  ];const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {


  // const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);

    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  

    const [getSearch, { isLoading, data }] = useGetSearchMutation({
      fixedCacheKey: 'shared-update-post',
    })

  const [query, setQuery] = useState("");

  useEffect(() => {
    getSearchData();
  }, [query]);

 

  const getSearchData = async () => {
    await getSearch({ query });
  };

  const inputElement = useRef<HTMLInputElement | null>(null);
  const [open, setOpen] = useState(false)

  const handleSearch = (e: any) => {
    const search: any = e.target.value
    setOpen(true);
    setQuery(search);
  
   
    
  };

  
const Portals = () => {
  if (!open) return null;
  return ReactDOM.createPortal(
<SearchPortal/> ,document.body);
  }

  useEffect(() => {
    window.onclick = (event: HTMLElement | any | null) => {
      if (event.target.contains(inputElement.current)
        && event.target !== inputElement.current) {     
          setOpen(false)
      }
    }
}, []);

    return (
      <>
      <AppBar position="sticky" style={{ background: "black"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                flexGrow: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
             
            >
<div>


              <TwitterIcon/>
              <InstagramIcon/>
              <FacebookIcon/>
              <YouTubeIcon/>
</div>
            </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                  display: { xs: 'block', md: 'flex' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.value} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" 
                    //  onClick={()=> navigate(`/${page.label}`)}
                     >                    {page.value}
</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <div style={{marginRight: "40%"}}>
            <img src="/Star_Wars_Logo.svg" alt="React Logo" width="100px" height="50px"
            // onClick={()=> navigate("/")}
            />
</div>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              
            </Typography>

  
            <Box sx={{ flexGrow: 0 }}>
         
              <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              data-testid="searchInput"
              ref={inputElement}
              // fullWidth
              onChange={handleSearch}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            </Box>
          </Toolbar>
        </Container>
        <Container maxWidth="xl">

      <Box sx={{ justifyContent: "center", display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (<>
                  <Button
                  key={page.value}
                  // onClick={()=>      navigate(`/${page.value}`)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page.value}
                </Button></>
              ))}
            </Box>
     
        </Container>
      </AppBar>
      {/* <input type="text" onChange={handleSearch} />
  {data?.results.map(({name}:any) => name)} */}
  {/* <TextField
          ref={inputElement}
          type="text"
          // fullWidth
          onChange={handleSearch}
          className="input trans"
          style={{ backgroundColor: "white"}}
          
          // sx={{ m: 1, }}
         
        /> */}
<Portals/>
      {/* <SearchPortal/> */}
      </>
  )
}

export default Navbar


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
