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
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/styles';
import ModalEditFilm from '../../modal-popup/film';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const columns = [
    {
        id: 'poster',
        label: 'Poster',
        minWidth: 70,
        align: 'left',
        format: (value) => value.toFixed(2),
    },
    { id: 'title', label: 'Title', minWidth: 150 },
    { id: 'id', label: 'ID', minWidth: 100 },
    {
        id: 'release_date',
        label: 'Release Date',
        minWidth: 170,
        align: 'left',
    },
    {
        id: 'vote',
        label: 'Vote Average',
        minWidth: 100,
        align: 'left',
    },
    {
        id: 'cmt',
        label: 'Comments',
        minWidth: 100,
        align: 'left',
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
        display: 'flex',
        height: '80px'
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

    // set state open dialog when click delete
    const [open, setOpen] = React.useState(false);
    // get title film on click table row
    // check when delete
    const [deleted, setDeleted] = React.useState(false);
    // function when click oke on dialog delte
    function handleYes(id) {
        setDeleted(true);
        setTimeout(() => {
            axios.delete('https://chom-phim.herokuapp.com/admin/delete/' + id)
                .then(res => {
                    if (res.data.message === 'xóa phim thành công') {
                        setDeleted(false);
                        setOpen(false);
                        window.location.reload();
                    }
                })
        }, 1000)

    };
    // function close dialog delete
    const handleClose = () => {
        setOpen(false);
    };

    //  state get id film
    const [idFilm, setIdFilm] = React.useState(0)
    // state open madal edit film
    const [openEdit, setOpenEdit] = React.useState(false);
    // function open dialog delete
    function handleClickOpen(id) {
        setIdFilm(id)
        setOpen(true);
    };
    // function open modal edit film
    function handleOnclickOpenEdit(id) {
        setIdFilm(id)
        setOpenEdit(true);
    }
    const [focus, setFocus] = React.useState(false);
    const [name, setName] = React.useState("");
    const [searchMovieFound, setsearchMovieFound] = React.useState([]);

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== "") {
            const results = rows.filter((element) => {

                return element.title.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setsearchMovieFound(results);
        } else {
            setsearchMovieFound(rows);
        }
        setName(keyword);
    };

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Search film?" value={name} onChange={filter} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
                    <button type="submit" className="searchButton">
                        <SearchIcon></SearchIcon>
                    </button>
                </div>
            </div>
            <ModalEditFilm open={openEdit} setOpenEdit={setOpenEdit} id={idFilm}></ModalEditFilm>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" style={{ display: 'flex' }}>
                    Are you sure to delete film <p style={{ color: 'red', margin: 'auto 4px', }}>{idFilm}</p>?
                </DialogTitle>
                <DialogContent>
                    {deleted === false ?
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
                    <Button onClick={() => handleYes(idFilm)} autoFocus>
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
                                            backgroundColor: 'yellow',
                                            color: 'black',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        {focus ? (

                            <TableBody>
                                {searchMovieFound
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover={true} role="checkbox" tabIndex={-1} key={row['id']}>
                                                <TableCell key={1}>
                                                    <Avatar src={row['poster_path']} variant="square" sx={{ width: 80, height: 80 }} />
                                                </TableCell>

                                                <TableCell key={3}>
                                                    {row['title']}
                                                </TableCell>

                                                <TableCell key={2}>
                                                    {row['id']}
                                                </TableCell>

                                                <TableCell key={4}>
                                                    {row['release_date']}
                                                </TableCell>

                                                <TableCell key={353}>
                                                    {row['vote_average']}
                                                </TableCell>

                                                <TableCell key={33}>
                                                    {row['cmt']}
                                                </TableCell>
                                                <TableCell key={56} className={classes.tableRow}>
                                                    <EditIcon className={classes.buttonEdit} onClick={() => handleOnclickOpenEdit(row['id'])} />
                                                    <DeleteIcon className={classes.buttonDelete} onClick={() => handleClickOpen(row['id'])} />
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        ) :
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover={true} role="checkbox" tabIndex={-1} key={row['id']}>
                                                <TableCell key={1}>
                                                    <Avatar src={row['poster_path']} variant="square" sx={{ width: 80, height: 80 }} />
                                                </TableCell>

                                                <TableCell key={3}>
                                                    {row['title']}
                                                </TableCell>

                                                <TableCell key={2}>
                                                    {row['id']}
                                                </TableCell>

                                                <TableCell key={4}>
                                                    {row['release_date']}
                                                </TableCell>

                                                <TableCell key={353}>
                                                    {row['vote_average']}
                                                </TableCell>

                                                <TableCell key={33}>
                                                    {row['cmt']}
                                                </TableCell>
                                                <TableCell key={56} className={classes.tableRow}>
                                                    <EditIcon className={classes.buttonEdit} onClick={() => handleOnclickOpenEdit(row['id'])} />
                                                    <DeleteIcon className={classes.buttonDelete} onClick={() => handleClickOpen(row['id'])} />
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
