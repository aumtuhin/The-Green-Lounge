import React from 'react';
import {Link} from 'react-router-dom';
import CustomButton from '../custom-button/custom-buttom.component';
import './intro.styles.scss';

const Intro = ({match}) => {
    console.log(match);
    return (
        <div className="intro text-center">
            <h1>Let's Eat</h1>
            <img className="intro-image" src="https://purepng.com/public/uploads/large/purepng.com-tomato-saladsalad-9415246422565bqud.png" alt="Salad"/>
            <Link to="/shop">
                <CustomButton>Explore Menus</CustomButton>
            </Link>
        </div>
    );
}

export default Intro;
