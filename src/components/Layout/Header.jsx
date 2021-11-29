import React from 'react';

import mealsImage from '../../assets/meals.jpg';

import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Gill Dhaba</h1>
            <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food!" />
        </div>
    </React.Fragment>
};

export default Header;
