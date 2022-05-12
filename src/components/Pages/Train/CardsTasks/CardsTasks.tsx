import React from 'react';
import Card from "./Card/Card";
import classes from './CardsTasks.module.css';

interface InterfaceCardsTasks {
    list: any[];
    onClick: (elem: any) => void;
    activeTask: number;
}

const CardsTasks: React.FC<InterfaceCardsTasks> = (props) => {
    const {list, onClick, activeTask} = props;

    return (
        <div className={classes.row}>
            {list.map(elem => (<Card id={elem.id} title={elem.todo} onClick={() => onClick(elem)} activeTask={activeTask} />))}
        </div>
    );
}

export default CardsTasks;