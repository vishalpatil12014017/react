import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import DrawerOpen from './DrawerOpen';

export default function ButtonAppBar() {
    return (
        <>
            <Box >
                <AppBar position="static" >
                    <Toolbar >
                        <DrawerOpen />
                        <Typography variant="h6" sx={{ mr: 2,flexGrow: 1 }} style={{fontSize:"1.5vw"}} >
                            Masai
                        </Typography>
                        <IconButton
                            size="large"
                            color="inherit"
                            sx={{ mr: 0 }}
                            style={{size:"1.5vw"}}
                        >
                            <GitHub />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ mr: "1.0vw" }} style={{fontSize:"1.5vw"}}>
                            GitHub
                        </Typography>
                        <IconButton
                            size="large"
                            color="inherit"
                            sx={{ mr: 0 }}

                        >
                            <LinkedIn />
                        </IconButton>
                        <Typography variant="h6" component="div" style={{fontSize:"1.5vw"}}>
                            LinkedIn
                        </Typography>
                     
                     
                      
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    );
}
