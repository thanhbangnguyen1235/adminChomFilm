import React from 'react'
import TableUser from './data';
import { loadUser } from '../../../Redux/action/userAction';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function Index() {

    let dispatch = useDispatch();
    useEffect(() => {
        let isActive = true;
        if (isActive) {
            dispatch(loadUser(1));
        }
        return () => {
            isActive = false;
        }
    }, [])
    const { user } = useSelector(state => state.user)

    return (
        <>
            <TableUser rows={user} />
        </>
    )
}
