import axios from 'axios'
import { GET_ERRORS, GET_TASKS, DELETE_TASK, GET_TASK } from './types'

export const addTaskAction = (task, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/task", task);
        history.push("/");
        dispatch ({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const getBacklog = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/task/all")
    dispatch ({
        type: GET_TASKS,
        payload: res.data
    })
}

export const getTaskAction = (task_id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/task/${task_id}`);
        dispatch ({
            type: GET_TASK,
            payload: res.data
        })
    } catch (error) {
        history.push("/");
    }
}

export const deleteTaskAction = task_id => async dispatch => {
    if(window.confirm("Are you sure?")) {
        await axios.delete(`http://localhost:8080/api/task/${task_id}`)
        dispatch ({
            type: DELETE_TASK,
            payload: task_id
        })
    }
}