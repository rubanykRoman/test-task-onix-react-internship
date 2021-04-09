import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HomeTasks from './components/HomeTasks/HomeTasks'
import Main from './components/Main/Main'

export default function Home() {
    return (
        <div>
            <Header></Header>
            <HomeTasks></HomeTasks>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}
