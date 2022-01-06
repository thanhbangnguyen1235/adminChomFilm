import React from 'react'
import TableFilm from './data'
import { loadFilm } from '../../../Redux/action/flmAction';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


export default function Index() {

    let dispatch = useDispatch();
    useEffect(() => {
        let isActive = true;
        if (isActive) {
            dispatch(loadFilm(1));
        }
        return () => {
            isActive = false;
        }
    }, [dispatch])

    const { film } = useSelector(state => state.film)
    return (
        <>
            <TableFilm rows={film} />
        </>
    )
}
