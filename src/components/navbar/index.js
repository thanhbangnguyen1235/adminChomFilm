import React from 'react'
import { Dashboard, Top, Bottom, TypeDashboard, Name, NameDash } from './navbar'
import TheatersIcon from '@mui/icons-material/Theaters';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import { lightBlue, yellow, green } from '@mui/material/colors';

export default function Navbar() {
    return (
        <Dashboard>
            <Top>
                CHOM FILM
            </Top>
            <Bottom>
                <TypeDashboard>
                    <Name href='/'>
                        <HomeIcon sx={{ color: lightBlue[500] }}></HomeIcon>
                        <NameDash >Dashboard</NameDash>
                    </Name>
                    <Name href='/film'>
                        <TheatersIcon sx={{ color: yellow[500] }}></TheatersIcon>
                        <NameDash >Film</NameDash>
                    </Name>
                    <Name href='/user'>
                        <PersonIcon sx={{ color: green[500] }}></PersonIcon>
                        <NameDash >User</NameDash>
                    </Name>

                </TypeDashboard>
            </Bottom>
        </Dashboard>
    )
}
