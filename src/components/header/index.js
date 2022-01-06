import React, { useEffect, useState } from 'react'
import { HeaderHome, Right, Left, AdminName } from './header'
import { useLocation } from 'react-router-dom';
import { Avatar } from '@mui/material';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';


export default function Header() {
    const [router, setRouter] = useState('')
    const location = useLocation()
    useEffect(() => {

        setRouter(location.pathname)
        if (location.pathname === '/') {
            setRouter('/ Dashboard')
        }
        if (location.pathname === '/user') {
            setRouter('/ User')
        }
        if (location.pathname === '/film') {
            setRouter('/ Film')
        }

    }, [location.pathname])


    const [success, setSuccess] = useState('');
    useEffect(() => {
        let isCancel = false;
        if (!isCancel) {
            setCookiesF();
        }
        return () => {
            isCancel = true
        }
    }, [success])
    async function setCookiesF() {
        const cookieUser = Cookies.get('User')
        if (cookieUser) {
            await setSuccess(jwt_decode(cookieUser).username)
        }
    }
    return (
        <HeaderHome>
            <Right>
                <ion-icon name="home"></ion-icon>{router}
            </Right>
            <Left>
                <AdminName>{success}</AdminName>
                <Avatar src={window.localStorage.getItem("avatar")}></Avatar>
            </Left>
        </HeaderHome>
    )
}
