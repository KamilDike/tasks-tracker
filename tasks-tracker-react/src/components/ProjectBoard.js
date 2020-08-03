import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import TaskItem from './Task/TaskItem'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getBacklog } from '../actions/TaskActions'

function ProjectBoard(props) {

    useEffect(() => {
        props.getBacklog();
    }, [])

    const {tasks} = props.tasks;

    let BoardContent;
    let toDoItems = []
    let inProgressItems = []
    let doneItems = []

    const BoardAlgorithm = tasks => {
        console.log(tasks)
        if (tasks.length < 1) {
            return (
                <div className="alert alert-info text-center" role="alert">
                    No Project Tasks on this board
                </div>
            )
        } else {
            const tasksElems = tasks.map(task => (
                <TaskItem key={task.id} task={task}/>)
            );

            for (let i = 0; i < tasksElems.length; i++) {
                switch (tasksElems[i].props.task.status) {
                    case "TO_DO":
                        toDoItems.push(tasksElems[i])
                        break;
                    case "IN_PROGRESS":
                        inProgressItems.push(tasksElems[i])
                        break;
                    case "DONE":
                        doneItems.push(tasksElems[i])
                        break;
                }
            }
            return (
                <React.Fragment>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card text-center mb-2">
                                    <div className="card-header bg-secondary text-white">
                                        <h3>TO DO</h3>
                                    </div>
                                </div>

                                {toDoItems}
                                
                            </div>
                            <div className="col-md-4">
                                <div className="card text-center mb-2">
                                    <div className="card-header bg-primary text-white">
                                        <h3>In Progress</h3>
                                    </div>
                                </div>

                                {inProgressItems}

                            </div>
                            <div className="col-md-4">
                                <div className="card text-center mb-2">
                                    <div className="card-header bg-success text-white">
                                        <h3>Done</h3>
                                    </div>
                                </div>

                                {doneItems}

                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }

    BoardContent = BoardAlgorithm(tasks)

    return (
        <>
            {/* <!-- Project Board Starts Here MIND OTHER COMPONENTS WHEN COPY AND PASTING --> */}
            <div className="container">
                <Link to="/addTask" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create Project Task</i>
                </Link>
                <br />
                <hr />
                {/* <!-- Backlog STARTS HERE --> */}
                {BoardContent}
            </div>

    {/* <!-- PROJECT BOARD ENDS HERE --> */}
        </>
    )
}

ProjectBoard.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    tasks: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    tasks: state.tasks
})

export default connect(
    mapStateToProps, 
    {getBacklog}
)(ProjectBoard)
