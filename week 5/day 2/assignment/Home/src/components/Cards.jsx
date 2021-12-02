import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carddata from './Carddata';

function Cards() {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Box sx={{ flexGrow: 1, p: 4 }}>
            <Grid container spacing={1}>
                <Grid className={Item} item xs={12} sm={6} lg={3} md={4} xl={3} >
                    <Carddata title="PROBLEMS COMPLETED TODAY" price="6" words="Increse from yesterday" col="green" color="24 % " />
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={4} xl={3}>
                    <Carddata title="TOTAL ASSIGNMENTS COMPLETED" price="70%" words="Decreses from last week" col="red" color="10 % " />
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={4} xl={3}>
                    <Carddata title="ATTENDANCE" price="78%" words="Decreses from last week" col="red" color="5 % " />
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={4} xl={3}>
                    <Carddata title="TOTAL POINTS" price="790" words="Increse from last week" col="green" color="20 % " />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Cards





