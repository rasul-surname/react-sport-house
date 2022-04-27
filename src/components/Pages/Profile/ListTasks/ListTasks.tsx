import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import ListTasksItem from "./ListTasksItem/ListTasksItem";
import {Spin} from "antd";
import classes from './ListTasks.module.css';
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {fetchListTasks, fetchTasksSuccess} from "../../../../store/action_creators/list";

const ListTasks: React.FC = () => {
    const {listTasks, loading, error} = useTypedSelector(state => state.listReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasksSuccess());

        // искусственная задержка для имитации работы сервера
        setTimeout(() => {
            dispatch(fetchListTasks());
        }, 1000)
    }, [listTasks]);

    return (
        <>
            {loading ? (
                listTasks.map((elem) => (
                    <ListTasksItem todo={elem.todo} />
                    ))
            ) : <Spin className={classes.spin} size="large" />}
            {error ? <h1>{error}</h1> : ''}
        </>
    );
}

export default ListTasks;