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
    Avatar,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';


const columns = [
    { id: 'author', label: 'Author', minWidth: 170 },
    { id: 'id', label: 'ID', minWidth: 100 },
    {
        id: 'username',
        label: 'UserName',
        minWidth: 170,
        align: 'left',
    },
    {
        id: 'email',
        label: 'Email',
        minWidth: 170,
        align: 'left',
    },
    {
        id: 'comment',
        label: 'Comments',
        minWidth: 170,
        align: 'left',
    },
    {
        id: 'edit',
        label: 'Delete',
        minWidth: 170,
        align: 'left',
    },
];

const useStyles = makeStyles((theme) => ({
    tableRow: {
        display: 'flex',
        height: '60px'
    },
    tableCell: {

    },
    buttonEdit: {
        justifyContent: 'center',
        display: 'flex',
        color: 'green',
        "&:hover": {
            cursor: 'pointer'
        }

    },
    buttonDelete: {
        justifyContent: 'center',
        display: 'flex',
        color: 'red',
        "&:hover": {
            cursor: 'pointer'
        }

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

    const [open, setOpen] = React.useState(false);

    const [username, setUsername] = React.useState('');

    const [deleted, setDeleted] = React.useState(false);

    function handleClickOpen(username) {
        setUsername(username)
        setOpen(true);
    };

    function handleYes(username) {
        setDeleted(true);
        setTimeout(() => {
            axios.delete('https://chom-phim.herokuapp.com/admin/users/delete/' + username)
                .then(res => {
                    console.log(res.data)
                    if (res.data.message == 'Xóa tài khoản thành công') {
                        setDeleted(false);
                        setOpen(false);
                        window.location.reload();
                    }
                })
        }, 1000);

    };
    const handleClose = () => {
        setOpen(false);
    };

    const [focus, setFocus] = React.useState(false);
    const [name, setName] = React.useState("");
    const [searchUser, setsearchUser] = React.useState([]);
    const [dataMoive, setDataMovie] = React.useState([]);

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== "") {
            const results = rows.filter((element) => {
                return element.username.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setsearchUser(results);
        } else {
            setsearchUser(rows);
        }
        setName(keyword);
    };
    React.useEffect(() => {
        if (!focus) {
            if (searchUser) {
                setDataMovie(searchUser)
            }
            else setDataMovie(rows)
        }
        else {
            setDataMovie(rows)
        }
    }, [focus])
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Search user?" value={name} onChange={filter} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
                    <button type="submit" className="searchButton">
                        <SearchIcon></SearchIcon>
                    </button>
                </div>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" style={{ display: 'flex' }}>
                    Are you sure to delete user <p style={{ color: 'red', margin: 'auto', margin: '0px 4px', }}>{username}</p>?
                </DialogTitle>
                <DialogContent>
                    {deleted == false ?
                        <DialogContentText id="alert-dialog-description">
                            Press Oke to complete delete, press Cancel to exit
                        </DialogContentText>
                        :
                        <DialogContentText id="alert-dialog-description">
                            Processing delete...
                        </DialogContentText>
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>CANCEL</Button>
                    <Button onClick={() => handleYes(username)} autoFocus>
                        OKE
                    </Button>
                </DialogActions>
            </Dialog>
            <Paper sx={{ width: '100%' }}>
                <TableContainer sx={{ maxHeight: 550, borderRadius: 2, backgroundColor: 'white' }}>
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
                                            backgroundColor: 'green',
                                            color: 'white',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        {focus ?
                            <TableBody>
                                {searchUser
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover={true} role="checkbox" tabIndex={-1} key={row['username']}>
                                                <TableCell>
                                                    <Avatar src={row['info']['avatar']}></Avatar>
                                                    {row['info']['full_name']}
                                                </TableCell>

                                                <TableCell>
                                                    {row['id']}
                                                </TableCell>

                                                <TableCell>
                                                    {row['username']}
                                                </TableCell>

                                                <TableCell>
                                                    {row['email']}
                                                </TableCell>

                                                <TableCell>
                                                    {row['cmt']}
                                                </TableCell>

                                                <TableCell className={classes.tableRow}>
                                                    <DeleteIcon className={classes.buttonDelete} onClick={() => handleClickOpen(row['username'])} />
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                            :
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover={true} role="checkbox" tabIndex={-1} key={row['username']}>
                                                <TableCell>
                                                    <Avatar src={row['info']['avatar']}></Avatar>
                                                    {row['info']['full_name']}
                                                </TableCell>

                                                <TableCell>
                                                    {row['id']}
                                                </TableCell>

                                                <TableCell>
                                                    {row['username']}
                                                </TableCell>

                                                <TableCell>
                                                    {row['email']}
                                                </TableCell>

                                                <TableCell>
                                                    {row['cmt']}
                                                </TableCell>

                                                <TableCell className={classes.tableRow}>
                                                    <DeleteIcon className={classes.buttonDelete} onClick={() => handleClickOpen(row['username'])} />
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        }
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
        </>
    );
}
