import React from 'react'
import Footer from './Footer'
import Header from './Header'
import HomeTasks from './HomeTasks'
import Main from './Main'

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
