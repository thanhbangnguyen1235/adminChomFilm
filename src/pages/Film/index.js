import React from 'react'
import { Page, LayoutHome, MainHome } from '../dashboard/dash';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import Film from '../../components/layout/film';
import store from '../../Redux/store';
import { Provider } from 'react-redux';


export default function Index() {
    return (
        <Page>
            <Provider store={store}>
                <Navbar></Navbar>
                <LayoutHome>
                    <Header></Header>
                    <MainHome>
                        <Film></Film>
                    </MainHome>
                </LayoutHome>
            </Provider>
        </Page>
    )
}
