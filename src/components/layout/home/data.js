import * as React from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { makeStyles } from '@mui/styles';

const columns = [
    { id: 'title', label: 'Title', minWidth: 170 },
    { id: 'id', label: 'ID', minWidth: 100 },
    {
        id: 'release_date',
        label: 'Release Date',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'renuve',
        label: 'Renuve',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'star',
        label: 'Star',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'edit',
        label: 'Edit',
        minWidth: 170,
        align: 'left',
    },
];

const useStyles = makeStyles((theme) => ({
    tableRow: {
        display: 'flex'
    },
    views: {
        marginLeft: '5px'

    }
}));
export default function ColumnGroupingTable({ rows }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const classes = useStyles();
    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 450, borderRadius: 2, backgroundColor: 'white' }}>
                <Table stickyHeader aria-label="sticky table"  >
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    className={classes.tableHeaderCell}
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                        minWidth: column.minWidth,
                                        backgroundColor: 'blue',
                                        color: 'white'
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover={true} role="checkbox" tabIndex={-1} key={row.code}>
                                        <TableCell key={1}>
                                            {row['title']}
                                        </TableCell>

                                        <TableCell key={3}>
                                            {row['id']}
                                        </TableCell>

                                        <TableCell key={2}>
                                            {row['release_date']}
                                        </TableCell>

                                        <TableCell key={4}>
                                            {row['renuve']}
                                        </TableCell>

                                        <TableCell key={33}>
                                            edit/ delete {row['star']}
                                        </TableCell>

                                        <TableCell key={56} className={classes.tableRow}>
                                            32423
                                            <RemoveRedEyeIcon className={classes.views} size="medium" />
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
