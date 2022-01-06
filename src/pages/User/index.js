import React from 'react'
import { Page, LayoutHome, MainHome } from '../dashboard/dash';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import User from '../../components/layout/user'
import { Provider } from 'react-redux';
import store from '../../Redux/store';

export default function Index() {
    return (
        <Page>
            <Provider store={store}>
                <Navbar></Navbar>
                <LayoutHome>
                    <Header></Header>
                    <MainHome>
                        <User></User>
                    </MainHome>
                </LayoutHome>
            </Provider>
        </Page>
    )
}
