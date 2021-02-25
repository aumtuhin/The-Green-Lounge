import React from 'react';
import Directory from '../../components/directory/directory.component';
import Intro from '../../components/intro/intro.component';
import './homepage.styles.scss';

const HomePage = () => {
    return (
        <div className="homepage">
            <Intro />
            <h1 className="text-center">Our Menus</h1>
            <Directory />
        </div>
    );
}

export default HomePage;
