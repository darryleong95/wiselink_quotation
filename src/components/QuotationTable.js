import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import { useStyles } from '../styles'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {

    const classes = useStyles()

    return (
        <TableContainer component={Paper} className={classes.table_container}>
            <Table aria-label="simple table" className={classes.table} size='small'>
                <TableHead>
                <TableRow className={classes.table_row}>
                    <TableCell className={classes.table_cell}>Dessert (100g serving)</TableCell>
                    <TableCell className={classes.table_cell} align="right">Calories</TableCell>
                    <TableCell className={classes.table_cell} align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell className={classes.table_cell} align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell className={classes.table_cell} align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className={classes.table_cell} component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell className={classes.table_cell} align="right">{row.calories}</TableCell>
                            <TableCell className={classes.table_cell} align="right">{row.fat}</TableCell>
                            <TableCell className={classes.table_cell} align="right">{row.carbs}</TableCell>
                            <TableCell className={classes.table_cell} align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}