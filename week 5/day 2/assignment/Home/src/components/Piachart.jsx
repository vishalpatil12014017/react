import React from "react";
import Paper from '@mui/material/Paper';
import { PieChart, Pie } from "recharts";
import Card from '@mui/material/Card';


function Piachart({ pending, shipped, notstarted }) {
    const data = [
        {
            name: "shipped",
            value: shipped
        },
        {
            name: "pending",
            value: pending
        },
        {
            name: "not started",
            value: notstarted
        }
    ];
    return (
        <Paper>
            <Card >
               
                    <PieChart width={400} height={500}>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey={"name"}

                            outerRadius={150}
                            fill="#faa25b"
                        />
                    </PieChart>
                

            </Card>
        </Paper>
    );
}

export default Piachart

