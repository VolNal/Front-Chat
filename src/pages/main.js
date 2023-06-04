import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

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

function Main() {
    return (
        <Container>
            <Box>
                <Grid container spacing={0}>
                    <Grid item >
                        <Box>
                            <Box sx={{ display: 'flex' }}>
                                <Avatar>

                                </Avatar>
                                <Typography>
                                    dasdsad
                                </Typography>
                            </Box>
                            <Box>
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />   
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                            </Box>
                            <Box>
                                <Typography>
                                    asdasd
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item>

                    </Grid>
                    <Grid item>

                    </Grid>
                </Grid>
            </Box>
        </Container >
    );
}

export default Main;