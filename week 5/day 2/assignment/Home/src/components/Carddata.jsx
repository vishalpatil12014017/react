import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
function Carddata({ title, price,color,words,col }) {
    return (
        <Card >
            <CardContent>
                <Typography variant="body2" >{title}
                </Typography>
                <Typography paragraph variant="h2" sx={{pt:1}}>{price}
                </Typography>
                <Typography  variant="h6" sx={{pt:0}}><span style={{color:col}}>{color }</span>{words}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Carddata
