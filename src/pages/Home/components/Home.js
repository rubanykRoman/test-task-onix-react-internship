import React from 'react';
import Footer from './Footer';
import Header from './Header';
import HomeTasks from './HomeTasks/HomeTasks';
import Main from './Main';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeTasks></HomeTasks>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}

export default Home;
