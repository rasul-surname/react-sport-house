import React from 'react';

import {IDisplayComponent} from "../../../../types/displayComponent";

import classes from './index.module.css';

const DisplayComponent: React.FC<IDisplayComponent> = (props) => {
    const {minute, second} = props;

    return (
        <div className={classes.wrapper}>
            <div className={classes.time}>{minute >= 10 ? minute : "0" + minute}</div>&#58;
            <div className={classes.time}>{second >= 10 ? second : "0" + second}</div>
        </div>
    );
}

export default DisplayComponent;