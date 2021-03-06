export interface ListState {
    listTasks: { id: number, todo: string, complete: boolean, minutes: number, pomodoro: number, date: any, dayWeek: any; project: string }[];
    tasksOpen: any[];
    tasksClosed: any[];
    requiredHours: number;
    requiredMinutes: number;
    spendHours: number;
    spendMinutes: number;
    activeTask: { id: number, todo: string, minutes: number };
    projects: {id: number, value: string}[];
}

export enum ListTaskTypes {
    FETCH_LIST_TASKS = "FETCH_LIST_TASKS",
    ADD_TASK_LIST = "ADD_TASK_LIST",
    REMOVE_TASK_LIST = "REMOVE_TASK_LIST",
    CHANGE_COMPLETE_TASK = "CHANGE_COMPLETE_TASK",
    GET_REQUIRED_TIME = "GET_REQUIRED_TIME",
    GET_SPEND_TIME = "GET_SPEND_TIME",
    ADD_ACTIVE_TASK = "ADD_ACTIVE_TASK",
}

interface FETCH_LIST_TASKS {
    type: ListTaskTypes.FETCH_LIST_TASKS;
    payload: any;
}

interface ADD_TASK_LIST {
    type: ListTaskTypes.ADD_TASK_LIST;
    payload: { value: string, pomodoro: number, project: string, date?: string };
}

interface REMOVE_TASK_LIST {
    type: ListTaskTypes.REMOVE_TASK_LIST;
    payload: number;
}

interface CHANGE_COMPLETE_TASK {
    type: ListTaskTypes.CHANGE_COMPLETE_TASK;
    payload: {
        id: number,
        checked: boolean,
    };
}

interface GET_REQUIRED_TIME {
    type: ListTaskTypes.GET_REQUIRED_TIME;
}

interface GET_SPEND_TIME {
    type: ListTaskTypes.GET_SPEND_TIME;
}

interface ADD_ACTIVE_TASK {
    type: ListTaskTypes.ADD_ACTIVE_TASK;
    payload: {
        id: number;
        todo: string;
        minutes: number;
    }
}

export type ListAction =
    FETCH_LIST_TASKS
    | ADD_TASK_LIST
    | REMOVE_TASK_LIST
    | CHANGE_COMPLETE_TASK
    | GET_REQUIRED_TIME
    | GET_SPEND_TIME
    | ADD_ACTIVE_TASK;