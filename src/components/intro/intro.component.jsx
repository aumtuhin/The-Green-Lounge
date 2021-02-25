import React from 'react';
import CustomButton from '../custom-button/custom-buttom.component';
import './intro.styles.scss';

const Intro = () => {
    return (
        <div className="intro text-center">
            <h1>Let's Eat</h1>
            <img className="intro-image" src="https://purepng.com/public/uploads/large/purepng.com-tomato-saladsalad-9415246422565bqud.png" alt="Salad"/>
            <CustomButton>Explore Menus</CustomButton>
        </div>
    );
}

export default Intro;
