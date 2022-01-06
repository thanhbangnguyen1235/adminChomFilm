import React, { useEffect, useState } from 'react'
import { Page, LayoutHome, MainHome, DetalHome } from './dash';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import Card from '../../components/card';
import ButtonReload from '../../components/button';
import axios from 'axios';



export default function Index() {
    const [value, setValue] = useState({})
    useEffect(() => {
        axios.get('https://chom-phim.herokuapp.com/admin/dashboard')
            .then(res => {
                setValue(res.data)
            })
    }, [])

    const Data = [{
        title: 'Total films',
        total: value.countFilm,
        color: '#e8e854',
        icon: 'CameraRollIcon',
        type: 'film'
    },
    {
        title: 'Total users',
        total: value.countAccount,
        color: 'rgb(46 232 70)',
        icon: 'CameraRollIcon',
        type: 'user'
    },
    {
        title: 'Total comments',
        total: value.countComment,
        color: 'orange',
        icon: 'CameraRollIcon',
        type: 'comment'
    },
    {
        title: 'Total votes',
        total: value.countVote,
        color: 'purple',
        icon: 'CameraRollIcon',
        type: 'vote'
    },]

    return (
        <Page>
            <Navbar></Navbar>
            <LayoutHome>
                <Header></Header>
                <MainHome>
                    {Data.map((element) => {
                        return <Card key={element.color} data={element}></Card>
                    })}
                </MainHome>
                <DetalHome>
                    <ButtonReload></ButtonReload>
                </DetalHome>
            </LayoutHome>
        </Page>
    )
}
